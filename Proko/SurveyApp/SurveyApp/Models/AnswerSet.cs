using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class AnswerSet
    {
        public int AnswerSetID { get; set; }
        [Required]
        public int AnswerBundleID { get; set; }
        [Required]
        public int QuestionMethodID { get; set; }
        public virtual AnswerBundle AnswerBundle { get; set; }
        public virtual QuestionMethod QuestionMethod { get; set; }
        public virtual ICollection <Answer> Answers { get; set; }
    }
}