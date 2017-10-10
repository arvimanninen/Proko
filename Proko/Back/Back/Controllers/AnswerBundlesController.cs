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
    public class AnswerBundlesController : Controller
    {
        private MainDbContext db = new MainDbContext();

        // GET: AnswerBundles
        public ActionResult Index()
        {
            return View(db.AnswerBundles.ToList());
        }

        // GET: AnswerBundles/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AnswerBundle answerBundle = db.AnswerBundles.Find(id);
            if (answerBundle == null)
            {
                return HttpNotFound();
            }
            return View(answerBundle);
        }

        // GET: AnswerBundles/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: AnswerBundles/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "AnswerBundleID,Date")] AnswerBundle answerBundle)
        {
            if (ModelState.IsValid)
            {
                db.AnswerBundles.Add(answerBundle);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(answerBundle);
        }

        // GET: AnswerBundles/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AnswerBundle answerBundle = db.AnswerBundles.Find(id);
            if (answerBundle == null)
            {
                return HttpNotFound();
            }
            return View(answerBundle);
        }

        // POST: AnswerBundles/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "AnswerBundleID,Date")] AnswerBundle answerBundle)
        {
            if (ModelState.IsValid)
            {
                db.Entry(answerBundle).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(answerBundle);
        }

        // GET: AnswerBundles/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AnswerBundle answerBundle = db.AnswerBundles.Find(id);
            if (answerBundle == null)
            {
                return HttpNotFound();
            }
            return View(answerBundle);
        }

        // POST: AnswerBundles/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            AnswerBundle answerBundle = db.AnswerBundles.Find(id);
            db.AnswerBundles.Remove(answerBundle);
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
