'use strict';

app.service('AnswerService', function () {
    var surveyAnswers = [];
    var AnswerDTO = function (nQuestionID, nValue, nQuestionMethodValue) {
        this.QuestionID = nQuestionID;
        this.Value = nValue;
        this.QuestionMethodValue = nQuestionMethodValue;
    };
    var getAnswers = function () {
        return surveyAnswers;
    };
    var setAnswer = function (nQuestionID, nValue, nQuestionMethodValue) {
        var sa = new AnswerDTO(nQuestionID, nValue, nQuestionMethodValue);
        surveyAnswers.push(sa);
    };
    var reset = function () {
        surveyAnswers.length = 0;
    }

    return {
        getAnswers: getAnswers,
        setAnswer: setAnswer,
        reset: reset
    };
});