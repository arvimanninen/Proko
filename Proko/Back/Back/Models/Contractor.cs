using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class Contractor
    {
        public int ContractorID { get; set; }
        public string Name { get; set; }
        public ICollection <User> Users { get; set; }
    }
}