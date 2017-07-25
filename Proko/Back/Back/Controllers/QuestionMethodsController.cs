﻿using System;
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
    public class QuestionMethodsController : Controller
    {
        private MainDbContext db = new MainDbContext();

        // GET: QuestionMethods
        public ActionResult Index()
        {
            return View(db.QuestionMethods.ToList());
        }

        // GET: QuestionMethods/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionMethod questionMethod = db.QuestionMethods.Find(id);
            if (questionMethod == null)
            {
                return HttpNotFound();
            }
            return View(questionMethod);
        }

        // GET: QuestionMethods/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: QuestionMethods/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "QuestionMethodID,Value,ScaleMin,ScaleMax")] QuestionMethod questionMethod)
        {
            if (ModelState.IsValid)
            {
                db.QuestionMethods.Add(questionMethod);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(questionMethod);
        }

        // GET: QuestionMethods/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionMethod questionMethod = db.QuestionMethods.Find(id);
            if (questionMethod == null)
            {
                return HttpNotFound();
            }
            return View(questionMethod);
        }

        // POST: QuestionMethods/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "QuestionMethodID,Value,ScaleMin,ScaleMax")] QuestionMethod questionMethod)
        {
            if (ModelState.IsValid)
            {
                db.Entry(questionMethod).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(questionMethod);
        }

        // GET: QuestionMethods/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuestionMethod questionMethod = db.QuestionMethods.Find(id);
            if (questionMethod == null)
            {
                return HttpNotFound();
            }
            return View(questionMethod);
        }

        // POST: QuestionMethods/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            QuestionMethod questionMethod = db.QuestionMethods.Find(id);
            db.QuestionMethods.Remove(questionMethod);
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
