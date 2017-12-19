using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class AnswerResultTemp
    {
        public int QuestionID { get; set; }
        public DateTime AnswerBundleDate { get; set; }
        public int AnswerValue { get; set; }
        public int AnswerScaleMax { get; set; }
        public int AnswererTypeID { get; set; }
        public string AnswererTypeName { get; set; }
    }
}