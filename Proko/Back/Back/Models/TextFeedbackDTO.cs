using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class TextFeedbackDTO
    {
        public int AnswerBundleID { get; set; }
        public string TextFeedback { get; set; }
    }
}