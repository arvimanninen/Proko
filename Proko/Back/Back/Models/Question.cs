using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class Question
    {
        public int QuestionID { get; set; }
        public int ChosenIndex { get; set; }
        public string Text { get; set; }
        public int QuestionMethodID { get; set; }

        public virtual QuestionMethod QuestionMethod { get; set; }
        public virtual ICollection <Answer> Answers { get; set; }
    }
}