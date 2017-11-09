'use strict';

app.service('ResultService', function () {
    var answerResults = [];
    // TODO: UPDATE AnswerDTO

    var AnswerResultDTO = function (nQuestionID, nAnswerBundleDate, nAnswerValue, nAnswererTypeID, nAnswererTypeName) {
        this.QuestionID = nQuestionID;
        this.AnswerBundleDate = nAnswerBundleDate;
        this.AnswerValue = nAnswerValue;
        this.AnswererTypeID = nAnswererTypeID;
        this.AnswererTypeName = nAnswererTypeName;
    };

    var getAnswerResults = function () {
        return answerResults;
    };

    var setAnswerResults = function (results) {
        answerResults = results;
    }

    var reset = function () {
        surveyAnswers.length = 0;
        textFeedback = "";
    };
    // TODO: UPDATE THIS
    return {
        getAnswer: getAnswer,
        getAnswers: getAnswers,
        getAnswerCountByQuestionSetIndex: getAnswerCountByQuestionSetIndex,
        getAnswersBySetIndex: getAnswersBySetIndex,
        setAnswer: setAnswer,
        getAnswerIndex: getAnswerIndex,
        replaceAnswer: replaceAnswer,
        getTextFeedback: getTextFeedback,
        setTextFeedback: setTextFeedback,
        reset: reset
    };
});