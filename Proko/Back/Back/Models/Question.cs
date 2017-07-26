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
        [Required]
        public bool Chosen { get; set; }
        // TODO: Add unique checks!
        public int ChosenIndex { get; set; }
        [Required]
        public string Text { get; set; }
        // NOT SET AS Required SO CLIENT CAN ADD QUESTIONS WITHOUT DECIDING QUESTIONMETHOD RIGHT AWAY
        public int QuestionMethodID { get; set; }

        public virtual QuestionMethod QuestionMethod { get; set; }
        public virtual ICollection <Answer> Answers { get; set; }
    }
}