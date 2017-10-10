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
    public class QuestionSetsController : Controller
    {
        private MainDbContext db = new MainDbContext();

        // GET: QuestionSets
        public ActionResult Index()
        {
            var questionSets = db.QuestionSets.Include(q => q.QuestionMethod);
            return View(questionSets.ToList());
        }

        // GET: QuestionSets/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionSet questionSet = db.QuestionSets.Find(id);
            if (questionSet == null)
            {
                return HttpNotFound();
            }
            return View(questionSet);
        }

        // GET: QuestionSets/Create
        public ActionResult Create()
        {
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value");
            return View();
        }

        // POST: QuestionSets/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "QuestionSetID,QuestionMethodID,ChosenIndex")] QuestionSet questionSet)
        {
            if (ModelState.IsValid)
            {
                db.QuestionSets.Add(questionSet);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", questionSet.QuestionMethodID);
            return View(questionSet);
        }

        // GET: QuestionSets/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionSet questionSet = db.QuestionSets.Find(id);
            if (questionSet == null)
            {
                return HttpNotFound();
            }
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", questionSet.QuestionMethodID);
            return View(questionSet);
        }

        // POST: QuestionSets/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "QuestionSetID,QuestionMethodID,ChosenIndex")] QuestionSet questionSet)
        {
            if (ModelState.IsValid)
            {
                db.Entry(questionSet).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", questionSet.QuestionMethodID);
            return View(questionSet);
        }

        // GET: QuestionSets/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionSet questionSet = db.QuestionSets.Find(id);
            if (questionSet == null)
            {
                return HttpNotFound();
            }
            return View(questionSet);
        }

        // POST: QuestionSets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            QuestionSet questionSet = db.QuestionSets.Find(id);
            db.QuestionSets.Remove(questionSet);
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
