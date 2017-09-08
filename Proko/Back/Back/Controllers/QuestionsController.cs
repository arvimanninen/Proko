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
    public class QuestionsController : Controller
    {
        private MainDbContext db = new MainDbContext();
        
        // GET: Questions
        public ActionResult Index()
        {
            var questions = from question in db.Questions
                            join questionmethod in db.QuestionMethods
                            on question.QuestionMethodID equals questionmethod.QuestionMethodID
                            orderby question.QuestionID ascending
                            select new QuestionDTO
                            {
                                QuestionID = question.QuestionID,
                                ChosenIndex = question.ChosenIndex,
                                Text = question.Text,
                                QuestionMethodValue = questionmethod.Value
                            };
            return View(questions.ToList());
        }

        // GET: Questions/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Question question = db.Questions.Find(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            return View(question);
        }

        // GET: Questions/Create
        public ActionResult Create()
        {
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value");
            return View();
        }

        // POST: Questions/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "QuestionID,Chosen,ChosenIndex,Text,QuestionMethodID")] Question question)
        {
            if (ModelState.IsValid)
            {
                db.Questions.Add(question);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", question.QuestionMethodID);
            return View(question);
        }

        // GET: Questions/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Question question = db.Questions.Find(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", question.QuestionMethodID);
            return View(question);
        }

        // POST: Questions/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "QuestionID,Chosen,ChosenIndex,Text,QuestionMethodID")] Question question)
        {
            if (ModelState.IsValid)
            {
                var rawQIDs = from answer in db.Answers
                           where answer.QuestionID == question.QuestionID
                           orderby answer.QuestionID ascending
                           select answer.QuestionID;
                List<int> cleanQIDs = rawQIDs.ToList();
                if (cleanQIDs.Count != 0)
                {
                    return Content("Kysymykseen on vastattu! Muokkaaminen ei ole mahdollista.");
                }
                else
                {
                    db.Entry(question).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            ViewBag.QuestionMethodID = new SelectList(db.QuestionMethods, "QuestionMethodID", "Value", question.QuestionMethodID);
            return View(question);
        }

        // GET: Questions/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Question question = db.Questions.Find(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            return View(question);
        }

        // POST: Questions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Question question = db.Questions.Find(id);
            var rawQIDs = from answer in db.Answers
                          where answer.QuestionID == question.QuestionID
                          orderby answer.QuestionID ascending
                          select answer.QuestionID;
            List<int> cleanQIDs = rawQIDs.ToList();
            if (cleanQIDs.Count != 0)
            {
                return Content("Kysymykseen on vastattu! Poistaminen ei ole mahdollista.");
            }
            else
            {
                db.Questions.Remove(question);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
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
