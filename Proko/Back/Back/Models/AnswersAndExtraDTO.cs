using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Back.Models
{
    public class AnswersAndExtraDTO
    {
        public List<AnswerDTO> SurveyAnswerDtos { get; set; }
        public AnswerExtraDTO AnswerExtra { get; set; }
    }
}