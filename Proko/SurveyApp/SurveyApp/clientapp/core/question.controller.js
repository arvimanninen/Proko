'use strict';

app.controller('QuestionCtrl', function ($location, $route, $templateCache, AnswerService, QuestionService, RunService) {
    var that = this;
    
    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();
        var navbtnHeight = wrapperHeight - containerHeight;
        if ((navbtnHeight) < 64) {
            navbtnHeight = 52
        } else {
            navbtnHeight = navbtnHeight - 12;
        }
        console.log(navbtnHeight);
        $(".nav-btn-div").css("margin-top", navbtnHeight);
    });

    if (RunService.getRouteButtonsUsed() === false) {
        $location.path("/error");
    }
    RunService.setRouteButtonsUsed(false);
    var questionSetIndex = RunService.getQuestionSetIndex();
    console.log("questionSetIndex: " + questionSetIndex);
    that.currentQuestions = QuestionService.getQuestionsBySetIndex(questionSetIndex);
    that.setAnswer = function (value, questionSetIndex, chosenQuestionIndex, questionId, questionMethodId) {
        // Check if Answer exists
        var answerIndex = AnswerService.getAnswerIndex(questionSetIndex, chosenQuestionIndex);
        console.log("setAnswer.answerIndex: " + answerIndex);
        if (answerIndex >= 0) {
            AnswerService.replaceAnswer(answerIndex, value, questionId, questionMethodId);
        } else if (answerIndex === -1) {
            AnswerService.setAnswer(value, questionSetIndex, chosenQuestionIndex, questionId, questionMethodId);
        } else if (answerIndex === -2) {
            alert("answerIndex virheellinen!");
        } else {
            alert("Tuntematon virhe @ QuestionCtrl ");
        }
 
        var allAnswers = AnswerService.getAnswers();
        console.log("");
        console.log("");
        for (var i = 0; i < allAnswers.length; i++) {
            console.log("allAnswers.[" + i + "].Value" + allAnswers[i].Value);
            console.log("allAnswers.[" + i + "].QuestionID" + allAnswers[i].QuestionID);
            console.log("allAnswers.[" + i + "].QuestionMethodID" + allAnswers[i].QuestionMethodID);
            console.log("**************");
        }


    };

});


