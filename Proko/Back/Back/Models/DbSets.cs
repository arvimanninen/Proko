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
        }

        public static MainDbContext Create()
        {
            return new MainDbContext();
        }

        public DbSet<SurveyUser> SurveyUsers { get; set; }
        public DbSet<Contractor> Contractors { get; set; }
        public DbSet<SurveyUserType> SurveyUserTypes { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionMethod> QuestionMethods { get; set; }
        public DbSet<QuestionScale> QuestionScales { get; set; }
    }
}