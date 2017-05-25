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
    [Authorize]
    public class QuestionScalesController : Controller
    {
        private BackDBContext db = new BackDBContext();

        // GET: QuestionScales
        public ActionResult Index()
        {
            return View(db.QuestionScales.ToList());
        }

        // GET: QuestionScales/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionScale questionScale = db.QuestionScales.Find(id);
            if (questionScale == null)
            {
                return HttpNotFound();
            }
            return View(questionScale);
        }

        // GET: QuestionScales/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: QuestionScales/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "QuestionScaleID,ScaleMin,ScaleMax")] QuestionScale questionScale)
        {
            if (ModelState.IsValid)
            {
                db.QuestionScales.Add(questionScale);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(questionScale);
        }

        // GET: QuestionScales/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionScale questionScale = db.QuestionScales.Find(id);
            if (questionScale == null)
            {
                return HttpNotFound();
            }
            return View(questionScale);
        }

        // POST: QuestionScales/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "QuestionScaleID,ScaleMin,ScaleMax")] QuestionScale questionScale)
        {
            if (ModelState.IsValid)
            {
                db.Entry(questionScale).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(questionScale);
        }

        // GET: QuestionScales/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionScale questionScale = db.QuestionScales.Find(id);
            if (questionScale == null)
            {
                return HttpNotFound();
            }
            return View(questionScale);
        }

        // POST: QuestionScales/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            QuestionScale questionScale = db.QuestionScales.Find(id);
            db.QuestionScales.Remove(questionScale);
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
