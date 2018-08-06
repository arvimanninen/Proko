using System;
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
using System.Web.Http.Cors;
using Back.Models;


namespace Back.ApiControllers
{
    public class AnswersApiController : ApiController
    {
        private MainDbContext db = new MainDbContext();
        /*
        // GET: api/AnswersApi/5
        [ResponseType(typeof(Answer))]
        public IHttpActionResult GetAnswer(int id)
        {
            Answer answer = db.Answers.Find(id);
            if (answer == null)
            {
                return NotFound();
            }

            return Ok(answer);
        }

        // PUT: api/AnswersApi/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAnswer(int id, Answer answer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != answer.AnswerID)
            {
                return BadRequest();
            }

            db.Entry(answer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnswerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/AnswersApi
        // TODO: Narrow allowed headers
        // TODO: Make EnableCors as an editable field (from back management app)
        // TODO: EnableCors!
        // [EnableCors(origins: "http://prokof.azurewebsites.net", headers: "*", methods: "post")]
        /*
        [ResponseType(typeof(Answer))]
        public IHttpActionResult PostAnswer([FromBody] AnswerDTO answerdto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //System.Diagnostics.Debug.WriteLine("answer.AnswerID: " + answer.AnswerID);
            //System.Diagnostics.Debug.WriteLine("answer.QuestionID: " + answer.QuestionID);
            //System.Diagnostics.Debug.WriteLine("answer.UserID: " + answer.UserID);
            //System.Diagnostics.Debug.WriteLine("answer.Value: " + answer.Value);

            
            db.Answers.Add(answer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = answer.AnswerID }, answer);
        }
        */
        

        [Route("api/postsurveyanswers")]
        [HttpPost]
        public IHttpActionResult PostSurveyAnswers([FromBody] AnswersAndBundleExtrasDTO abe)
        {
            
            if (!ModelState.IsValid)
            {
                Debug.WriteLine("ModelState not valid!");
                return BadRequest(ModelState);
            }

            List<AnswerDTO> answerDtos = abe.AnswerDtos.ToList();
            int answererTypeId = abe.AnswerBundleExtrasDto.AnswererTypeID;
            string textFb = abe.AnswerBundleExtrasDto.TextFeedback;


            Debug.WriteLine("answerDtos<AnswerDTO>.Count: " + answerDtos.Count);
            Debug.WriteLine("answererTypeId: " + answererTypeId);
            Debug.WriteLine("textFb: " + textFb);


            
            if (answerDtos.Count == 0)
            {
                return BadRequest();
            }
            var rawSortedDtos = from sa in answerDtos
                                orderby sa.QuestionSetIndex, sa.ChosenQuestionIndex
                                select sa;
                                
            List<AnswerDTO> cleanSortedDtos = rawSortedDtos.ToList();

            for (int i = 0; i < cleanSortedDtos.Count; i++)
            {
                Debug.WriteLine("cleanSortedDtos[" + i + "].Value: " + cleanSortedDtos[i].Value);
                Debug.WriteLine("cleanSortedDtos[" + i + "].QuestionSetIndex: " + cleanSortedDtos[i].QuestionSetIndex);
                Debug.WriteLine("cleanSortedDtos[" + i + "].ChosenQuestionIndex: " + cleanSortedDtos[i].ChosenQuestionIndex);
                Debug.WriteLine("cleanSortedDtos[" + i + "].QuestionID: " + cleanSortedDtos[i].QuestionID);
                Debug.WriteLine("cleanSortedDtos[" + i + "].QuestionMethodID: " + cleanSortedDtos[i].QuestionMethodID);
            }
            // CREATE AnswerBundle bundle
            
                    AnswerBundle bundle = new AnswerBundle();
                    bundle.Date = DateTime.Now;
                    bundle.AnswererTypeID = answererTypeId;
                    bundle.TextFeedback = textFb;
                    // NEW: CHECK IF WORKS
                    // TODO: TRANSACTION MANAGEMENT
                    db.AnswerBundles.Add(bundle);

                    db.SaveChanges();

                    // ADD AnswerSets TO bundle
                    // int currentQmId = -2;
                    int currentSetId = -2;
                    int currentSetIndex = -2;

                    foreach (AnswerDTO aDto in cleanSortedDtos)
                    {
                        // IF NEW QuestionMethodID IN answerDtos,
                        // NEW AnswerSet IS CREATED
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
                        Debug.WriteLine("currentSetId:" + currentSetId);
                        Debug.WriteLine("currentSetIndex:" + currentSetIndex);
                    }
                    
                    Debug.WriteLine("answerBundleId: " + bundle.AnswerBundleID);
                    return Ok();
                }
                
        
        /*
        // ConvertToUnixTime CODE FROM: https://www.fluxbytes.com/csharp/convert-datetime-to-unix-time-in-c/
        public static long ConvertToUnixTime(DateTime datetime)
        {
            DateTime sTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

            return (long)(datetime - sTime).TotalMilliseconds;
        }
        
        public static double ScaleAnswerValue(int value, int currentMax, double absoluteMaxD) 
        {
            // PREVENTS WRONG SCALING WHEN VALUE
            if(value == 1)
            {
                return 1;
            }
            double valueD = Convert.ToDouble(value);
            double currentMaxD = Convert.ToDouble(currentMax);
            double scaledValueD = (absoluteMaxD / currentMaxD) * valueD;
            return scaledValueD;
        }
        */
        
        [Route("api/getresultstocq")]
        [HttpGet]
        public IHttpActionResult GetResultsToCq()
        {
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
            // TODO: CHANGE absoliteScaleMax TO ALWAYS 5
            double absoluteScaleMax = -2;
            foreach(AnswerResultTemp art in resultTemps)
            {
                Debug.WriteLine("art.AnswerScaleMax: " + art.AnswerScaleMax);
                if(art.AnswerScaleMax > absoluteScaleMax)
                {
                    absoluteScaleMax = Convert.ToDouble(art.AnswerScaleMax);
                }
            }
            Debug.WriteLine("absoluteScaleMax: " + absoluteScaleMax);
            Debug.WriteLine("******");
            List<AnswerResultDTO> results = new List<AnswerResultDTO>();
            foreach (AnswerResultTemp rt in resultTemps)
            {
                AnswerResultDTO nr = new AnswerResultDTO();
                nr.QuestionID = rt.QuestionID;
                nr.AnswerValue = ScaleAnswerValue(rt.AnswerValue, rt.AnswerScaleMax, absoluteScaleMax);
                nr.AnswererTypeID = rt.AnswererTypeID;
                nr.AnswererTypeName = rt.AnswererTypeName;
                nr.AnswerBundleDateMs = ConvertToUnixTime(rt.AnswerBundleDate);
                Debug.WriteLine("nr.AnswerValue: " + nr.AnswerValue);
                Debug.WriteLine("rt.AnswerValue: " + rt.AnswerValue);
                Debug.WriteLine("rt.AnswerScaleMax: " + rt.AnswerScaleMax);
                Debug.WriteLine("******");
                results.Add(nr);
            }
            Debug.WriteLine("results.Count: " + results.Count);

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