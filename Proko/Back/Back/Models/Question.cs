using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back.Models
{
    public class Question
    {
        public int QuestionID { get; set; }
        
        [Required]
        public string Text { get; set; }
        public virtual ICollection <ChosenQuestion> ChosenQuestions { get; set; }
    }
}