'use strict';

app.service('AnswerService', function () {
    var surveyAnswers = [];
    var AnswerDTO = function (nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID) {
        this.Value = nValue;
        this.QuestionSetIndex = nQuestionSetIndex;
        this.ChosenQuestionIndex = nChosenQuestionIndex;
        this.QuestionID = nQuestionID;
        this.QuestionMethodID = nQuestionMethodID;
    };
    var getAnswers = function () {
        return surveyAnswers;
    };
    var getAnswer
    var setAnswer = function (nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID) {
        var sa = new AnswerDTO(nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID);
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