﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Diagnostics;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Back.Models;


namespace Back.ApiControllers
{
    public class AnswersApiController : ApiController
    {
        private MainDbContext db = new MainDbContext();
        
        // PostSurveyAnswers()
        // - Function gets AnswersAndBundleExtrasDTO abe-object as function parameter and saves
        //   its content to the database
        // @param {AnswersAndBundleExtrasDTO} abe
        [Route("api/postsurveyanswers")]
        [HttpPost]
        public IHttpActionResult PostSurveyAnswers([FromBody] AnswersAndBundleExtrasDTO abe)
        {
            // Model state check. If State is not valid, BadRequest will be returned with ModelState.
            if (!ModelState.IsValid)
            {
                Debug.WriteLine("ModelState not valid!");
                return BadRequest(ModelState);
            }

            // Unpacking abe-object
            List<AnswerDTO> answerDtos = abe.AnswerDtos.ToList();
            int answererTypeId = abe.AnswerBundleExtrasDto.AnswererTypeID;
            string textFb = abe.AnswerBundleExtrasDto.TextFeedback;


            Debug.WriteLine("answerDtos<AnswerDTO>.Count: " + answerDtos.Count);
            Debug.WriteLine("answererTypeId: " + answererTypeId);
            Debug.WriteLine("textFb: " + textFb);


            // - If there is no answerDtos, BadRequest will be returned.
            if (answerDtos.Count == 0)
            {
                return BadRequest();
            }

            // - Sorting answerDtos by QuestionSetIndex and ChosenQuestionIndex (in this order)
            var rawSortedDtos = from sa in answerDtos
                                orderby sa.QuestionSetIndex, sa.ChosenQuestionIndex
                                select sa;
            
            // - Converting IOrderedEnumerable as list 
            List<AnswerDTO> cleanSortedDtos = rawSortedDtos.ToList();
            
            // Creating AnswerBundle bundle
            AnswerBundle bundle = new AnswerBundle();

            // Adding variables to bundle
            bundle.Date = DateTime.Now;
            bundle.AnswererTypeID = answererTypeId;
            bundle.TextFeedback = textFb;

            // Adding bundle is to the database
            db.AnswerBundles.Add(bundle);

            // - Saving database changes
            // TODO: TRANSACTION MANAGEMENT
            db.SaveChanges();

            // - Creating helper variables
            int currentSetId = -2;
            int currentSetIndex = -2;

            foreach (AnswerDTO aDto in cleanSortedDtos)
            {
                // - If new QuestionMethodID in answerDtos,
                //   new AnswerSet is created and saved to the database
                if (aDto.QuestionSetIndex != currentSetIndex)
                {
                    // currentQmId = aDto.QuestionMethodID;
                    currentSetIndex = aDto.QuestionSetIndex;
                    AnswerSet newSet = new AnswerSet();
                    newSet.QuestionMethodID = aDto.QuestionMethodID;
                    newSet.AnswerBundleID = bundle.AnswerBundleID;
                    db.AnswerSets.Add(newSet);
                    db.SaveChanges();
                    currentSetId = newSet.AnswerSetID;
                }
                db.Answers.Add(new Answer
                {
                    Value = aDto.Value,
                    QuestionID = aDto.QuestionID,
                    AnswerSetID = currentSetId
                });
                db.SaveChanges();
            }
                    
            return Ok();

        }

        // GetResultsToChosenQuestions()
        // - Function returns results (AnswerResultDTO) to questions that are currently chosen
        //   (= that are in database's ChosenQuestions-table) and returns them in a List.
        // @return {List<AnswerResultDTO>} results
        [Route("api/getresultstochosenquestions")]
        [HttpGet]
        public IHttpActionResult GetResultsToChosenQuestions()
        {
            // GetResultsToChosenQuestions.ScaleAnswerValue()
            // - Gets target value, value's current maximum value and target maximum value
            //   as parameters, and scale them 
            double ScaleAnswerValue(int value, int currentMax, double absoluteMaxD)
            {
                // PREVENTS WRONG SCALING WHEN VALUE
                if (value == 1)
                {
                    return 1;
                }
                double valueD = Convert.ToDouble(value);
                double currentMaxD = Convert.ToDouble(currentMax);
                double scaledValueD = (absoluteMaxD / currentMaxD) * valueD;
                return scaledValueD;
            }

            // ConvertToUnixTime CODE FROM: https://www.fluxbytes.com/csharp/convert-datetime-to-unix-time-in-c/
            long ConvertToUnixTime(DateTime datetime)
            {
                DateTime sTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

                return (long)(datetime - sTime).TotalMilliseconds;
            }

            var rawCqIdsWithDupl = from cq in db.ChosenQuestions
                                   orderby cq.QuestionID
                                   select cq.QuestionID;
            List<int> cqIdsWithDupl = rawCqIdsWithDupl.ToList();
            Debug.WriteLine("cqIdsWithDupl.Count: "  + cqIdsWithDupl.Count);
            List<int> cqIds = cqIdsWithDupl.Distinct().ToList();
            Debug.WriteLine("cqIds.Count: " + cqIds.Count);

            var rawResultTemps = from id in cqIds
                      join a in db.Answers
                      on id equals a.QuestionID
                      orderby id ascending
                      select new AnswerResultTemp
                      {
                          QuestionID = a.QuestionID,
                          AnswerValue = a.Value,
                          AnswerScaleMax = a.AnswerSet.QuestionMethod.ScaleMax,
                          AnswererTypeID = a.AnswerSet.AnswerBundle.AnswererTypeID,
                          AnswererTypeName = a.AnswerSet.AnswerBundle.AnswererType.Name,
                          AnswerBundleDate = a.AnswerSet.AnswerBundle.Date
                      };

            List<AnswerResultTemp> resultTemps = rawResultTemps.ToList();
            double absoluteScaleMax = -2;
            foreach(AnswerResultTemp art in resultTemps)
            {
                if(art.AnswerScaleMax > absoluteScaleMax)
                {
                    absoluteScaleMax = Convert.ToDouble(art.AnswerScaleMax);
                }
            }

            List<AnswerResultDTO> results = new List<AnswerResultDTO>();
            foreach (AnswerResultTemp rt in resultTemps)
            {
                AnswerResultDTO nr = new AnswerResultDTO();
                nr.QuestionID = rt.QuestionID;
                nr.AnswerValue = ScaleAnswerValue(rt.AnswerValue, rt.AnswerScaleMax, absoluteScaleMax);
                nr.AnswererTypeID = rt.AnswererTypeID;
                nr.AnswererTypeName = rt.AnswererTypeName;
                nr.AnswerBundleDateMs = ConvertToUnixTime(rt.AnswerBundleDate);
                results.Add(nr);
            }

            return Ok(results);

        }  

        [Route("api/getchosenanswerertypes")]
        [HttpGet]
        public IHttpActionResult GetChosenAnswererTypes()
        {
            var rawTypes = from at in db.AnswererTypes
                           where at.Chosen == true
                           select new AnswererTypeDTO
                           {
                               AnswererTypeID = at.AnswererTypeID,
                               Name = at.Name
                           };
            List<AnswererTypeDTO> types = rawTypes.ToList();
            if(types.Count >= 1)
            {
                return Ok(types);
            }
            else
            {
                Debug.WriteLine("Answerer types not chosen!");
                return NotFound();
            }
        }
        /*
        // DELETE: api/AnswersApi/5
        [ResponseType(typeof(Answer))]
        public IHttpActionResult DeleteAnswer(int id)
        {
            Answer answer = db.Answers.Find(id);
            if (answer == null)
            {
                return NotFound();
            }

            db.Answers.Remove(answer);
            db.SaveChanges();

            return Ok(answer);
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
        
        private bool AnswerExists(int id)
        {
            return db.Answers.Count(e => e.AnswerID == id) > 0;
        }
        */
    }
}