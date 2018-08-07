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
        [Index("IX_QsIDAndCI", 1, IsUnique = true)]
        public int QuestionSetID { get; set; }
        [Key]
        [Column(Order = 2)]
        public int QuestionID { get; set; }
        [Index("IX_QsIDAndCI", 2, IsUnique = true)]
        public int ChosenIndex { get; set; }
        public virtual QuestionSet QuestionSet { get; set; }
        public virtual Question Question { get; set; }

    }
}