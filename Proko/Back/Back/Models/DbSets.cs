using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class BackDBContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Contractor> Contractors { get; set; }
        public DbSet<UserType> UserTypes { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionMethod> QuestionMethods { get; set; }
        public DbSet<QuestionScale> QuestionScales { get; set; }
        }
    
}