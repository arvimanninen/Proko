'use strict';

app.service('QuestionService', function () {
    var questions = [];
    /*
    var QuestionDTO = function (nQuestionID, nQuestionSetIndex,
        nChosenQuestionIndex, nQuestionText, nQuestionMethodValue) {
        this.QuestionID = nQuestionID;
        this.QuestionSetIndex = nQuestionSetIndex;
        this.ChosenQuestionIndex = nChosenQuestionIndex;
        this.QuestionText = nQuestionText;
        this.QuestionMethodValue = nQuestionMethodValue;
    };
    */
    var getQuestion = function (index) {
        return questions[index];
    };

    var getQuestions = function () {
        return questions;
    };

    var setQuestions = function (qs) {
        //TODO: CHECKUPS
        console.log("questionService.setQuestions started");
        for (var i = 0; i < qs.length; i++) {

            questions.push(qs[i]);
            console.log("questionService.questions.length: " + questions.length);
        }
        
    };
    var reset = function () {
        questions.length = 0;
    };
    return {
        getQuestion: getQuestion,
        getQuestions: getQuestions,
        setQuestions: setQuestions
    };
});