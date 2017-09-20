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
        public IHttpActionResult PostSurveyAnswers([FromBody] List<AnswerDTO> surveyAnswerDtos)
        {
            Debug.WriteLine("surveyAnswerDtos<AnswerDTO>.Count: " + surveyAnswerDtos.Count);
            if (surveyAnswerDtos.Count >= 1)
            {
                for (int i = 0; i < surveyAnswerDtos.Count; i++)
                {
                    Debug.WriteLine("*******");
                    Debug.WriteLine("surveyAnswerDtos[" + i + "].QuestionID: " + surveyAnswerDtos[i].QuestionID);
                    Debug.WriteLine("surveyAnswerDtos[" + i + "].Value: " + surveyAnswerDtos[i].Value);
                }
            }

            if (surveyAnswerDtos.Count == 0)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                Debug.WriteLine("ModelState not valid!");
                return BadRequest(ModelState);
            }

            // CREATE AnswerBundle bundle
            AnswerBundle bundle = new AnswerBundle();
            bundle.Date = DateTime.Now;
            // TODO: TRANSACTION MANAGEMENT
            db.AnswerBundles.Add(bundle);
            db.SaveChanges();

            // ADD AnswerSets TO bundle
            int currentQmId = -2;
            int currentAsId = -2;
            foreach (AnswerDTO aDto in surveyAnswerDtos)
            {
                // IF NEW QuestionMethodID IN surveyAnswerDtos,
                // NEW AnswerSet IS CREATED
                if(aDto.QuestionMethodID != currentQmId)
                {
                    currentQmId = aDto.QuestionMethodID;
                    AnswerSet newSet = new AnswerSet();
                    newSet.QuestionMethodID = currentQmId;
                    newSet.AnswerBundleID = bundle.AnswerBundleID;
                    db.AnswerSets.Add(newSet);
                    db.SaveChanges();
                    currentAsId = newSet.AnswerSetID;
                    
                }
                db.Answers.Add(new Answer
                {
                    Value = aDto.Value,
                    QuestionID = aDto.QuestionID,
                    AnswerSetID = currentAsId
                });
                db.SaveChanges();
                Debug.WriteLine("currentQmId:" + currentQmId);
                Debug.WriteLine("currentAsId:" + currentAsId);
            }
            
            return Ok();
            // int index = true
            /*
             * 1. Tee uusi AnswerBundle bundle
             * --- foreach(AnswerDTO aDto in surveyAnswerDTO)
             *      2. Tee uusi AnswerSet, missä AnswerBundleID = bundle.AnswerBundleID
             *      JA AnswerSet.QuestionMethodID == aDto.QuestionMethodID = 
             * ---
             * 3. Lisää kysymykset QuestionSetiin
             * 4. Jo
            */

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