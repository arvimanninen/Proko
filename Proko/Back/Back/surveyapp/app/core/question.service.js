'use strict';

app.service('QuestionService', function () {
    var questions = [];

    var QuestionDTO = function (nQuestionID, nChosenIndex, nText, nQuestionMethodValue) {
        this.QuestionID = nQuestionID;
        this.ChosenIndex = nChosenIndex;
        this.Text = nText;
        this.QuestionMethodValue = nQuestionMethodValue;
    };

    var getQuestion = function (index) {
        return questions[index];
    }

    var getQuestions = function () {
        return questions;
    };

    var setQuestions = function (qs) {
        //TODO: CHECKUPS
        console.log("questionService.setQuestions started");
        for (var i = 0; i < qs.length; i++) {
            var q = new QuestionDTO(qs[i].QuestionID, qs[i].ChosenIndex, qs[i].Text, qs[i].QuestionMethodValue);

            questions.push(q);
            console.log("questionService.questions.length: " + questions.length);
        }
        
    };

    return {
        getQuestion: getQuestion,
        getQuestions: getQuestions,
        setQuestions: setQuestions
    };
});