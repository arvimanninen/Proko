using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class AnswererType
    {
        public int AnswererTypeID { get; set; }
        public string Name { get; set; }
        public virtual ICollection <AnswerBundle> AnswerBundles { get; set; }
    }
}