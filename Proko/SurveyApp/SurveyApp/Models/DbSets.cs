using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class MainDbContext : IdentityDbContext<ApplicationUser>
    {
        public MainDbContext() : base("BackContext")
        {
            // DISABLE THIS BEFORE ENABLING DROPPING AND RECREATING EMPTY DB
            Database.SetInitializer<MainDbContext>(null);
            // ENABLE THESE TO DROP CURRENT DB AND RECREATING (EMPTY) DB
            // Database.SetInitializer(new DropCreateDatabaseAlways<MainDbContext>());
            // Database.Initialize(false);
        }

        public static MainDbContext Create()
        {
            return new MainDbContext();
        }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionMethod> QuestionMethods { get; set; }
        public DbSet<ChosenQuestion> ChosenQuestions { get; set; }
        public DbSet<QuestionSet> QuestionSets { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<AnswerSet> AnswerSets { get; set; }
        public DbSet<AnswerBundle> AnswerBundles { get; set; }
        public DbSet<AnswererType> AnswererTypes { get; set; }
    }
}