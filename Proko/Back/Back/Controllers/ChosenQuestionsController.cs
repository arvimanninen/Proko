using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Back.Models;

namespace Back.Controllers
{
    public class ChosenQuestionsController : Controller
    {
        private MainDbContext db = new MainDbContext();

        // GET: ChosenQuestions
        public ActionResult Index()
        {
            var chosenQuestions = db.ChosenQuestions.Include(c => c.Question).Include(c => c.QuestionSet);
            return View(chosenQuestions.ToList());
        }

        // GET: ChosenQuestions/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ChosenQuestion chosenQuestion = db.ChosenQuestions.Find(id);
            if (chosenQuestion == null)
            {
                return HttpNotFound();
            }
            return View(chosenQuestion);
        }

        // GET: ChosenQuestions/Create
        public ActionResult Create()
        {
            ViewBag.QuestionID = new SelectList(db.Questions, "QuestionID", "Text");
            ViewBag.QuestionSetID = new SelectList(db.QuestionSets, "QuestionSetID", "QuestionSetID");
            return View();
        }

        // POST: ChosenQuestions/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "QuestionSetID,QuestionID,ChosenIndex")] ChosenQuestion chosenQuestion)
        {
            if (ModelState.IsValid)
            {
                db.ChosenQuestions.Add(chosenQuestion);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.QuestionID = new SelectList(db.Questions, "QuestionID", "Text", chosenQuestion.QuestionID);
            ViewBag.QuestionSetID = new SelectList(db.QuestionSets, "QuestionSetID", "QuestionSetID", chosenQuestion.QuestionSetID);
            return View(chosenQuestion);
        }

        // GET: ChosenQuestions/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ChosenQuestion chosenQuestion = db.ChosenQuestions.Find(id);
            if (chosenQuestion == null)
            {
                return HttpNotFound();
            }
            ViewBag.QuestionID = new SelectList(db.Questions, "QuestionID", "Text", chosenQuestion.QuestionID);
            ViewBag.QuestionSetID = new SelectList(db.QuestionSets, "QuestionSetID", "QuestionSetID", chosenQuestion.QuestionSetID);
            return View(chosenQuestion);
        }

        // POST: ChosenQuestions/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "QuestionSetID,QuestionID,ChosenIndex")] ChosenQuestion chosenQuestion)
        {
            if (ModelState.IsValid)
            {
                db.Entry(chosenQuestion).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.QuestionID = new SelectList(db.Questions, "QuestionID", "Text", chosenQuestion.QuestionID);
            ViewBag.QuestionSetID = new SelectList(db.QuestionSets, "QuestionSetID", "QuestionSetID", chosenQuestion.QuestionSetID);
            return View(chosenQuestion);
        }

        // GET: ChosenQuestions/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ChosenQuestion chosenQuestion = db.ChosenQuestions.Find(id);
            if (chosenQuestion == null)
            {
                return HttpNotFound();
            }
            return View(chosenQuestion);
        }

        // POST: ChosenQuestions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ChosenQuestion chosenQuestion = db.ChosenQuestions.Find(id);
            db.ChosenQuestions.Remove(chosenQuestion);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
