'use strict';
// AnswersAndBundleExtrasService
// - Client-side data model for answers and bundle extras (answerer type, written feedback)
// - Used for sending data to REST API in correct format
app.service('AnswersAndBundleExtrasService', function () {
    var answersAndBundleExtras = null;

    // Object constructor
    var AnswersAndBundleExtrasDTO = function (nAnswerDtos, nExtrasDto) {
        this.AnswerDtos = [];
        this.AnswerBundleExtrasDto = nExtrasDto;
        for (var i = 0; i < nAnswerDtos.length; i++) {
            this.AnswerDtos.push(nAnswerDtos[i]);
        }
    };

    // getAnswersAndBundleExtras()
    // - Returns AnswersAndBundleExtrasService.answersAndBundleExtras -object
    // @return {AnswersAndBundleExtrasDTO} answersAndBundleExtras
    var getAnswersAndBundleExtras = function () {
        return answersAndBundleExtras;
    };

    // setAnswersAndBundleExtras()
    // - Gets answers (answerDtos) and bundle extras (extrasDto) as parameters
    // - Creates new AnswersAndBundleExtrasDTO with answerDtos and extrasDto
    //   as constructor parameters, and sets created AnswersAndBundleExtrasDTO object
    //   to AnswersAndBundleExtrasService.answersAndBundleExtras
    // @param {Array<AnswerDTO> answerDtos}
    // @param {AnswerBundleExtrasDto extrasDto}
    var setAnswersAndBundleExtras = function (answerDtos, extrasDto) {
        answersAndBundleExtras = new AnswersAndBundleExtrasDTO(answerDtos, extrasDto);
    };

    // reset()
    // - Function will set AnswersAndBundleExtrasService to its default state
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