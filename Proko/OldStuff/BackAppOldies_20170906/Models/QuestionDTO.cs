using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class QuestionDTO
    {
        public int QuestionID { get; set; }
        public int ChosenIndex { get; set; }
        public string Text { get; set; }
        public string QuestionMethodValue { get; set; }
        /*
         * CODE FROM Question.cs
        public int QuestionID { get; set; }
        [Required]
        public bool Chosen { get; set; }
        public int ChosenIndex { get; set; }
        [Required]
        public string Text { get; set; }
        // NOT SET AS Required SO CLIENT CAN ADD QUESTIONS WITHOUT DECIDING QUESTIONMETHOD RIGHT AWAY
        public int QuestionMethodID { get; set; }

        public virtual QuestionMethod QuestionMethod { get; set; }
        public virtual ICollection <Answer> Answers { get; set; }
         */
    }
}