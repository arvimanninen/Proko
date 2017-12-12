using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class AnswerResultDTO
    {
         public int QuestionID { get; set; }
         public long AnswerBundleDateMs { get; set; }
         public int AnswerValue { get; set; }
         public int AnswererTypeID { get; set; }
         public string AnswererTypeName { get; set; }
    }
}