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
        [Route("api/posttextfeedback")]
        [HttpPost]
        public IHttpActionResult PostTextFeedback([FromBody] TextFeedbackDTO fbDto)
        {
            if (!ModelState.IsValid)
            {
                Debug.WriteLine("ModelState not valid!");
                return BadRequest(ModelState);
            }
            AnswerBundle bundle = db.AnswerBundles.Find(fbDto.AnswerBundleID);
            if(bundle == null)
            {
                // TODO: CHANGE TO SOMETHING SENSIBLE?
                return BadRequest();
            }
            bundle.TextFeedback = fbDto.TextFeedback;
            // TODO: TRANSACTION MANAGEMENT!!!
            db.Entry(bundle).State = EntityState.Modified;
            db.SaveChanges();
            return Ok();
        }

        [Route("api/postsurveyanswers")]
        [HttpPost]
        public IHttpActionResult PostSurveyAnswers([FromBody] List<AnswerDTO> surveyAnswerDtos)
        {
            Debug.WriteLine("surveyAnswerDtos<AnswerDTO>.Count: " + surveyAnswerDtos.Count);


            if (!ModelState.IsValid)
            {
                Debug.WriteLine("ModelState not valid!");
                return BadRequest(ModelState);
            }
            if (surveyAnswerDtos.Count == 0)
            {
                return BadRequest();
            }
            var rawSortedDtos = from sa in surveyAnswerDtos
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
            // TODO: TRANSACTION MANAGEMENT
            db.AnswerBundles.Add(bundle);
            db.SaveChanges();

            // ADD AnswerSets TO bundle
           // int currentQmId = -2;
            int currentSetId = -2;
            int currentSetIndex = -2;
            
            foreach (AnswerDTO aDto in cleanSortedDtos)
            {
                // IF NEW QuestionMethodID IN surveyAnswerDtos,
                // NEW AnswerSet IS CREATED
                if(aDto.QuestionSetIndex != currentSetIndex)
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
            return Ok(bundle.AnswerBundleID);
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