'use strict';
app.service('AnswersAndBundleExtrasService', function () {
    var answersAndBundleExtras;
    var AnswersAndBundleExtrasDTO = function (nAnswers, nExtras) {
        this.AnswerDtos = [];
        this.AnswerBundleExtrasDto = nExtras;
        for (var i = 0; i < nAnswers.length; i++) {
            AnswerDtos.push(nAnswers[i]);
        }
    };
    var getAnswersAndBundleExtras = function () {
        return answersAndBundleExtras;
    };
    var setAnswersAndBundleExtras = function (answers, extras) {
        answersAndBundleExtras = new AnswersAndBundleExtrasDTO(answers, extras);
    };
    /*
    public class AnswersAndBundleExtrasDTO
    {
        public List<AnswerDTO> AnswerDtos { get; set; }
        public AnswerBundleExtrasDTO AnswerBundleExtrasDto { get; set; }
    }
    */
});