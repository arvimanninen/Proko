using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class QuestionScale
    {
        public int QuestionScaleID { get; set; }
        public int ScaleMin { get; set; }
        public int ScaleMax { get; set; }
        public virtual ICollection<QuestionMethod> QuestionMethods { get; set; }
    }
}