using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class QuestionSet
    {
        public int QuestionSetID { get; set; }
        [Required]
        public int QuestionMethodID { get; set; }
        [Index(IsUnique = true)]
        public int ChosenIndex { get; set; }
        public virtual QuestionMethod QuestionMethod { get; set; }
        public virtual ICollection <ChosenQuestion> ChosenQuestions { get; set; }
    }
}