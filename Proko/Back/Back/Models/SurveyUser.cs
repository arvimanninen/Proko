using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class SurveyUser
    {
        public int SurveyUserID { get; set; }
        public string Name { get; set; }
        public int SurveyUserTypeID { get; set; }
        public int ContractorID { get; set; }

        public virtual ICollection <Answer> Answers { get; set; }
        public virtual SurveyUserType SurveyUserType { get; set; }
        public virtual Contractor Contractor { get; set; }

    }
}