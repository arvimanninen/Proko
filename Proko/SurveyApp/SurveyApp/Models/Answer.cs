﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class Answer
    {
        public int AnswerID { get; set; }
        [Required]
        public int Value { get; set; }
        [Required]
        public int QuestionID { get; set; }
        [Required]
        public int AnswerSetID { get; set; }
        public virtual Question Question { get; set; }
        public virtual AnswerSet AnswerSet { get; set; }

    }
}