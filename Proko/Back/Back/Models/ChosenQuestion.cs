using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class ChosenQuestion
    {
        [Key]
        [Column(Order = 1)]
        public int QuestionSetID { get; set; }
        [Key]
        [Column(Order = 2)]
        public int QuestionID { get; set; }
        public int ChosenIndex { get; set; }
        public virtual QuestionSet QuestionSet { get; set; }
        public virtual Question Question { get; set; }

    }
}