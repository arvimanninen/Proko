'use strict';

app.service('AnswerService', function () {
    var surveyAnswers = [];
    var AnswerDTO = function (nQuestionID, nValue) {
        this.QuestionID = nQuestionID;
        this.Value = nValue;
    };
    var getAnswers = function () {
        return surveyAnswers;
    };
    var setAnswer = function (nQuestionID, nValue) {
        var sa = new AnswerDTO(nQuestionID, nValue);
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