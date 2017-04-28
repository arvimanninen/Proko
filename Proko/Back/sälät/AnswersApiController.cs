using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Back.Models;


namespace Back.ApiControllers
{
    public class AnswersApiController : ApiController
    {
        private BackDBContext db = new BackDBContext();

        // GET: api/AnswersApi
        public IQueryable<Answer> GetAnswers()
        {
            return db.Answers;
        }

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

            Answer answer = new Answer();
            answer.QuestionID = answerdto.QuestionID;
            answer.UserID = answerdto.UserID;
            answer.Value = answerdto.Value;

            db.Answers.Add(answer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = answer.AnswerID }, answer);
        }

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
    }
}