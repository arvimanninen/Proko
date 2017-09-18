using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class QuestionMethod
    {
        public int QuestionMethodID { get; set; }
        [Required]
        public string Value { get; set; }
        [Required]
        public virtual int ScaleMin { get; set; }
        [Required]
        public virtual int ScaleMax { get; set; }
        public virtual ICollection <QuestionSet> QuestionSets { get; set; }
        public virtual ICollection <AnswerSet> AnswerSets { get; set; }
    }
}