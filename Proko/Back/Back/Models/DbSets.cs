﻿using Microsoft.AspNet.Identity.EntityFramework;
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
            // ENABLE THESE FOR DROPPING CURRENT DB AND RECREATING (EMPTY) DB
            // Database.SetInitializer(new DropCreateDatabaseAlways<MainDbContext>());
            // Database.Initialize(false);
        }

        public static MainDbContext Create()
        {
            return new MainDbContext();
        }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionMethod> QuestionMethods { get; set; }
    }
}