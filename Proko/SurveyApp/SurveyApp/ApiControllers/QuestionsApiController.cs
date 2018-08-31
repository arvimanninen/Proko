using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Diagnostics;
using System.Web.Http.Description;
using Back.Models;
using System.Collections;

namespace Back.ApiControllers
{
    public class QuestionsApiController : ApiController
    {
        private MainDbContext db = new MainDbContext();

        /// <summary>
        /// The method returns all questions which are included in db.ChosenQuestions -table.
        /// </summary>
        /// <returns>
        /// The method returns List<QuestionDTO>.
        /// </returns>
        [Route("api/getchosenquestions")]
        [HttpGet]
        public IHttpActionResult GetChosenQuestions()
        {
            // Querying questions.
            var rawDtos = from cq in db.ChosenQuestions
                          join cm in db.QuestionMethods
                          on cq.QuestionSet.QuestionMethodID equals cm.QuestionMethodID
                          orderby cq.QuestionSet.ChosenIndex ascending, cq.ChosenIndex ascending
                          select new QuestionDTO
                          {
                              QuestionID = cq.QuestionID,
                              QuestionMethodID = cm.QuestionMethodID,
                              QuestionSetIndex = cq.QuestionSet.ChosenIndex,
                              QuestionSetTitle = cq.QuestionSet.Title,
                              ChosenQuestionIndex = cq.ChosenIndex,
                              QuestionText = cq.Question.Text,
                              QuestionMethodValue = cm.Value
                          };
            
            // Converting IQueryable to List
            List<QuestionDTO> cleanDtos = rawDtos.ToList();
            
            // Helper variables for validation
            int setIndex = 1;
            int questionIndex = 1;

            // Validation checkup for checking that cleanDtos.QuestionSetIndex:es and 
            // ChosenQuestionIndex:es are in linearly ascending order without gaps.
            for (int i = 0; i < cleanDtos.Count; i++)
            {
                if(cleanDtos[i].QuestionSetIndex != setIndex)
                {
                    if(cleanDtos[i].QuestionSetIndex == setIndex + 1)
                    {
                        setIndex = cleanDtos[i].QuestionSetIndex;
                        questionIndex = 1;
                    }
                    else
                    {
                        Debug.WriteLine("setIndex error!");
                        // TODO: CHANGE THIS TO SOMETHING SENSIBLE
                        return NotFound();
                    }
                }
                if(cleanDtos[i].ChosenQuestionIndex != questionIndex)
                {
                    if (cleanDtos[i].ChosenQuestionIndex == questionIndex + 1)
                    {
                        questionIndex = cleanDtos[i].ChosenQuestionIndex;
                    }
                    else
                    {
                        Debug.WriteLine("questionIndex error!");
                        // TODO: CHANGE THIS TO SOMETHING SENSIBLE
                        return NotFound();
                    }
                }
            }
            
            if(cleanDtos.Count >= 1)
            {
                return Ok(cleanDtos);
            }
            else
            {
                return NotFound();
            }
        }
    }    
}