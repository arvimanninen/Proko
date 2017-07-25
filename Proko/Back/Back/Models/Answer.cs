using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class Answer
    {
        public int AnswerID { get; set; }
        public int Value { get; set; }
        public DateTime Date { get; set; }
        public int QuestionID { get; set; }
        public virtual Question Question { get; set; }

    }
}