using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class QuestionDTO
    {
        public int QuestionID { get; set; }
        public int QuestionMethodID { get; set; }
        public int QuestionSetIndex { get; set; }
        public string QuestionSetTitle { get; set; }
        public int ChosenQuestionIndex { get; set; }
        public string QuestionText { get; set; }
        public string QuestionMethodValue { get; set; }
    }
}