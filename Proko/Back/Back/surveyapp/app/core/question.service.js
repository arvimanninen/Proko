'use strict';

app.service('questionService', function () {
    var questions = [];
    var AnswerDTO = function (nQuestionID, nValue) {
        this.QuestionID = nQuestionID;
        this.Value = nValue;
    };
    var getSurveyAnswers = function () {
        return surveyAnswers;
    };
    var getQuestions = function () {
        // TODO: DO CHECKUPS
        var na = new AnswerDTO(nQuestionID, nValue);
        surveyAnswers.push(sa);
    };

    return {
        getSurveyAnswers: getSurveyAnswers,
        setSurveyAnswer: setSurveyAnswer
    };
});