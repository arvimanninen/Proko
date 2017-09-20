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

        // GET: api/QuestionsApi
        public IQueryable<Question> GetQuestions()
        {
            return db.Questions;
        }
        
       
        [Route("api/getchosenquestions")]
        [HttpGet]
        public IHttpActionResult GetChosenQuestions()
        {

            var rawDtos = from chosenquestion in db.ChosenQuestions
                          join questionmethod in db.QuestionMethods
                          on chosenquestion.QuestionSet.QuestionMethodID equals questionmethod.QuestionMethodID
                          orderby chosenquestion.QuestionSet.ChosenIndex ascending, chosenquestion.ChosenIndex ascending
                          select new QuestionDTO
                          {
                              QuestionID = chosenquestion.QuestionID,
                              QuestionMethodID = questionmethod.QuestionMethodID,
                              QuestionSetIndex = chosenquestion.QuestionSet.ChosenIndex,
                              ChosenQuestionIndex = chosenquestion.ChosenIndex,
                              QuestionText = chosenquestion.Question.Text,
                              QuestionMethodValue = questionmethod.Value
                          };
            
            
                           
            List<QuestionDTO> cleanDtos = rawDtos.ToList();
            foreach(QuestionDTO d in cleanDtos)
            {
                Debug.WriteLine("");
                Debug.WriteLine("cleanDtos.QuestionSetIndex: " + d.QuestionSetIndex);
                Debug.WriteLine("cleanDtos.ChosenQuestionIndex:  " + d.ChosenQuestionIndex);
                Debug.WriteLine("--------");
                Debug.WriteLine("cleanDtos.QuestionID: " + d.QuestionID);
                Debug.WriteLine("cleanDtos.QuestionMethodID: " + d.QuestionMethodID);
                Debug.WriteLine("cleanDtos.QuestionText: " + d.QuestionText);
                Debug.WriteLine("cleanDtos.QuestionMethodValue: " + d.QuestionMethodValue);
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
        
        


        // GET: api/QuestionsApi/5
        [ResponseType(typeof(Question))]
        public IHttpActionResult GetQuestion(int id)
        {
            Question question = db.Questions.Find(id);
            Debug.WriteLine("question.QuestionID" + question.QuestionID);
            Debug.WriteLine("question.Text" + question.Text);
            if (question == null)
            {
                Debug.WriteLine("question is null!");
                return NotFound();
            }

            return Ok(question);
        }

        // PUT: api/QuestionsApi/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQuestion(int id, Question question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != question.QuestionID)
            {
                return BadRequest();
            }

            db.Entry(question).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(id))
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

        // POST: api/QuestionsApi
        [ResponseType(typeof(Question))]
        public IHttpActionResult PostQuestion(Question question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Questions.Add(question);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = question.QuestionID }, question);
        }

        // DELETE: api/QuestionsApi/5
        [ResponseType(typeof(Question))]
        public IHttpActionResult DeleteQuestion(int id)
        {
            Question question = db.Questions.Find(id);
            if (question == null)
            {
                return NotFound();
            }

            db.Questions.Remove(question);
            db.SaveChanges();

            return Ok(question);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QuestionExists(int id)
        {
            return db.Questions.Count(e => e.QuestionID == id) > 0;
        }
    }
}