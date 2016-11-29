using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    public class UserType
    {
        public int UserTypeID { get; set; }
        public string Text { get; set; }
        public virtual ICollection <User> Users { get; set; }
    }
}