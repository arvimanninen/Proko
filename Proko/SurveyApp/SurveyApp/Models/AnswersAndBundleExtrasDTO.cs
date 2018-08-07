using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class AnswersAndBundleExtrasDTO
    {
        public List<AnswerDTO> AnswerDtos { get; set; }
        public AnswerBundleExtrasDTO AnswerBundleExtrasDto { get; set; }
    }
}