'use strict';

app.service('AnswerService', function () {
    var surveyAnswers = [];
    var AnswerDTO = function (nValue, nQuestionID, nQuestionMethodID) {
        this.Value = nValue;
        this.QuestionID = nQuestionID;
        this.QuestionMethodID = nQuestionMethodID;
    };
    var getAnswers = function () {
        return surveyAnswers;
    };
    var setAnswer = function (nValue, nQuestionID, nQuestionMethodID) {
        var sa = new AnswerDTO(nValue, nQuestionID, nQuestionMethodID);
        surveyAnswers.push(sa);
    };
    var reset = function () {
        surveyAnswers.length = 0;
    };

    return {
        getAnswers: getAnswers,
        setAnswer: setAnswer,
        reset: reset
    };
});