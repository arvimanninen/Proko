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
        
       // TODO: DOES THIS WORK?
        [Route("api/getchosenquestions")]
        [HttpGet]
        //public List<QuestionDTO> GetChosenQuestions()
        public IHttpActionResult GetChosenQuestions()
        {
            // TODO:FIND OUT IS chosenQuestionDtos NEEDED
            // -> List off, send chosenQuestions ?
            
            var rawDtos = from question in db.Questions
                          join questionmethod in db.QuestionMethods
                          on question.QuestionMethodID equals questionmethod.QuestionMethodID
                          where question.Chosen == true
                          orderby question.ChosenIndex ascending
                          select new QuestionDTO
                          {
                                 QuestionID = question.QuestionID,
                                 ChosenIndex = question.ChosenIndex,
                                 Text = question.Text,
                                 QuestionMethodValue = questionmethod.Value
                          };
            // REPLACE THIS rawDtos.toList()?
            List<QuestionDTO> cleanDtos = new List<QuestionDTO>();
            
            foreach (QuestionDTO rawDto in rawDtos)
            {
                QuestionDTO cleanDto = new QuestionDTO();
                cleanDto.QuestionID = rawDto.QuestionID;
                cleanDto.ChosenIndex = rawDto.ChosenIndex;
                cleanDto.Text = rawDto.Text;
                Debug.WriteLine("q.QuestionMethod.Value: " + rawDto.QuestionMethodValue);
                cleanDto.QuestionMethodValue = rawDto.QuestionMethodValue;
                cleanDtos.Add(cleanDto);
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