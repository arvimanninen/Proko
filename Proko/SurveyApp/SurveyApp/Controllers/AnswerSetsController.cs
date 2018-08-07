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
    public class AnswerSetsController : Controller
    {
        private MainDbContext db = new MainDbContext();

        // GET: AnswerSets
        public ActionResult Index()
        {
            var answerSets = db.AnswerSets.Include(a => a.AnswerBundle).Include(a => a.QuestionMethod);
            return View(answerSets.ToList());
        }

        // GET: AnswerSets/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AnswerSet answerSet = db.AnswerSets.Find(id);
            if (answerSet == null)
            {
                return HttpNotFound();
            }
            return View(answerSet);
        }

        // GET: AnswerSets/Create
        public ActionResult Create()
        {
            ViewBag.AnswerBundleID = new SelectList(db.AnswerBundles, "AnswerBundleID", "TextFeedback");
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value");
            return View();
        }

        // POST: AnswerSets/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "AnswerSetID,AnswerBundleID,QuestionMethodID")] AnswerSet answerSet)
        {
            if (ModelState.IsValid)
            {
                db.AnswerSets.Add(answerSet);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.AnswerBundleID = new SelectList(db.AnswerBundles, "AnswerBundleID", "TextFeedback", answerSet.AnswerBundleID);
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", answerSet.QuestionMethodID);
            return View(answerSet);
        }

        // GET: AnswerSets/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AnswerSet answerSet = db.AnswerSets.Find(id);
            if (answerSet == null)
            {
                return HttpNotFound();
            }
            ViewBag.AnswerBundleID = new SelectList(db.AnswerBundles, "AnswerBundleID", "TextFeedback", answerSet.AnswerBundleID);
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", answerSet.QuestionMethodID);
            return View(answerSet);
        }

        // POST: AnswerSets/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "AnswerSetID,AnswerBundleID,QuestionMethodID")] AnswerSet answerSet)
        {
            if (ModelState.IsValid)
            {
                db.Entry(answerSet).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.AnswerBundleID = new SelectList(db.AnswerBundles, "AnswerBundleID", "TextFeedback", answerSet.AnswerBundleID);
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", answerSet.QuestionMethodID);
            return View(answerSet);
        }

        // GET: AnswerSets/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AnswerSet answerSet = db.AnswerSets.Find(id);
            if (answerSet == null)
            {
                return HttpNotFound();
            }
            return View(answerSet);
        }

        // POST: AnswerSets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            AnswerSet answerSet = db.AnswerSets.Find(id);
            db.AnswerSets.Remove(answerSet);
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
