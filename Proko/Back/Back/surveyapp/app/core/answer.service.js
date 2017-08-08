'use strict';

app.service('answerService', function () {
    var surveyAnswers = [];
    var AnswerDTO = function (nQuestionID, nValue) {
        this.QuestionID = nQuestionID;
        this.Value = nValue;
    };
    var getSurveyAnswers = function () {
        return surveyAnswers;
    }
    var setSurveyAnswer = function (nQuestionID, nValue) {
        // TODO: DO CHECKUPS
        var sa = new AnswerDTO(nQuestionID, nValue);
        surveyAnswers.push(sa);
    }

    return {
        getSurveyAnswers: getSurveyAnswers,
        setSurveyAnswer: setSurveyAnswer
    };
});