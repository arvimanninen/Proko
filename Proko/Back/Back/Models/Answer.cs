using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class Answer
    {
        public int AnswerID { get; set; }
        public int Value { get; set; }
        public int QuestionID { get; set; }
        public int UserID { get; set; }

        public virtual Question Question { get; set; }
        public virtual User User { get; set; }

    }
}