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
        // TODO: Narrow allowed headers
        // TODO: Make EnableCors as an editable field (from back management app)
        // TODO: EnableCors!
        // [EnableCors(origins: "http://prokof.azurewebsites.net", headers: "*", methods: "post")]
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
            answer.Value = answerdto.Value;
            answer.Date = DateTime.Now;
            Debug.WriteLine("answer.QuestionID: " + answer.QuestionID);
            Debug.WriteLine("answer.Value: " + answer.Value);
            Debug.WriteLine("answer.Date: " + answer.Date);
            db.Answers.Add(answer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = answer.AnswerID }, answer);
        }
        // TODO: DOES THIS WORK?
        // List or IEnumerable ?
        [Route("api/postsurveyanswers")]
        [HttpPost]
        public IHttpActionResult PostSurveyAnswers([FromBody] List<AnswerDTO> surveyAnswerDtos)
        {
            Debug.WriteLine("surveyAnswerDtos<AnswerDTO>.Count: " + surveyAnswerDtos.Count);
            for (int i = 0; i < surveyAnswerDtos.Count && surveyAnswerDtos.Count >= 1; i++)
            {
                Debug.WriteLine("*******");
                Debug.WriteLine("surveyAnswerDtos[" + i + "].QuestionID: " + surveyAnswerDtos[i].QuestionID);
                Debug.WriteLine("surveyAnswerDtos[" + i + "].Value: " + surveyAnswerDtos[i].Value);
            }
            
            if (!ModelState.IsValid)
            {
                Debug.WriteLine("Model state not valid!");
                return BadRequest(ModelState);
            }
            DateTime answerDate = DateTime.Now;
            // THIS DOESN'T RUN BECAUSE surveyAnswerDtos.Count = 0?
            foreach (AnswerDTO aDto in surveyAnswerDtos)
            {
                Answer a = new Answer();
                a.QuestionID = aDto.QuestionID;
                a.Value = aDto.Value;
                a.Date = answerDate;
                Debug.WriteLine("a.QuestionID: " + a.QuestionID);
                Debug.WriteLine("a.Value: " + a.Value);
                Debug.WriteLine("a.Date: " + a.Date);
                db.Answers.Add(a);
                // TODO: Should this be before loop ends?
            }
            db.SaveChanges();
            return Ok();
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