'use strict';
app.service('AnswersAndBundleExtrasService', function () {
    var answersAndBundleExtras = null;

    var AnswersAndBundleExtrasDTO = function (nAnswerDtos, nExtrasDto) {
        this.AnswerDtos = [];
        this.AnswerBundleExtrasDto = nExtrasDto;
        for (var i = 0; i < nAnswerDtos.length; i++) {
            this.AnswerDtos.push(nAnswerDtos[i]);
        }
    };
    var getAnswersAndBundleExtras = function () {
        return answersAndBundleExtras;
    };
    var setAnswersAndBundleExtras = function (answerDtos, extrasDto) {
        answersAndBundleExtras = new AnswersAndBundleExtrasDTO(answerDtos, extrasDto);
    };
    var reset = function () {
        answersAndBundleExtras = null;
    };

    return {
        getAnswersAndBundleExtras: getAnswersAndBundleExtras,
        setAnswersAndBundleExtras: setAnswersAndBundleExtras,
        reset: reset
    };
    /*
    public class AnswersAndBundleExtrasDTO
    {
        public List<AnswerDTO> AnswerDtos { get; set; }
        public AnswerBundleExtrasDTO AnswerBundleExtrasDto { get; set; }
    }
    */
});