﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Back.Models
{
    
    public class AnswerDTO
    {
        public int Value { get; set; }
        public int QuestionSetIndex { get; set; }
        public int ChosenQuestionIndex { get; set; }
        public int QuestionID { get; set; }
        public int QuestionMethodID { get; set; }
        // public string AnswererTypeName {get; set; }
        
    }
}