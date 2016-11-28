using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string Name { get; set; }
        public int UserTypeID { get; set; }
        public int ContractorID { get; set; }

        public virtual ICollection <Answer> Answers { get; set; }
        public virtual UserType UserType { get; set; }
        public virtual Contractor Contractor { get; set; }

    }
}