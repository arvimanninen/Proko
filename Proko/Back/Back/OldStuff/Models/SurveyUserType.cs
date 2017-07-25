using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    // TODO: Remove
    public class SurveyUserType
    {
        public int SurveyUserTypeID { get; set; }
        public string Text { get; set; }
        public virtual ICollection <SurveyUser> SurveyUsers { get; set; }
    }
}