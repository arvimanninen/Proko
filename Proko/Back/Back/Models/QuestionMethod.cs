﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class QuestionMethod
    {
        public int QuestionMethodID { get; set; }
        public string Value { get; set; }
        public int QuestionScaleID { get; set; }
        public virtual QuestionScale QuestionScale { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}