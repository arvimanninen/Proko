﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class AnswerBundle
    {
        public int AnswerBundleID { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public string TextFeedback { get; set; }
        public virtual ICollection <AnswerSet> AnswerSets { get; set; }
    }
}