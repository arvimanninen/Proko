using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Front.Models
{
    public class AnswerMethod
    {
        public int id { get; set; }
        public string value { get; set; }
        public virtual ICollection<Question> Questions { get; set; }

    }
}