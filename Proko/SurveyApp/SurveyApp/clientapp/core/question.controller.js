'use strict';

// QuestionCtrl
// - Controller used by qmButtonsSmileys, qmButtonsSlider and qmButtonThumbs -components
// TODO: RENAME AS QuestionMethodCtrl OR QmCtrl
app.controller('QuestionCtrl', function ($location, $route, $templateCache, AnswerService, QuestionService, RunService) {

    var that = this;

    // Template adjustments
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

    // Checks that buttons in app are used for navigation
    if (RunService.getRouteButtonsUsed() === false) {
        $location.path("/error");
    }
    RunService.setRouteButtonsUsed(false);

    // Gets current questionSetIndex
    var questionSetIndex = RunService.getQuestionSetIndex();

    // Current questions based on questionSetIndex
    that.currentQuestions = QuestionService.getQuestionsBySetIndex(questionSetIndex);

    // that.setAnswer()
    // - Function is executed when user clicks answering button or other answer method in UI.
    // - Function gets answerIndex based on question set index (questionSetIndex) and 
    //   chosen question index (chosenQuestionIndex). If question already has answer (answerIndex >= 0), answer is replaced.
    //   If question doesn't have answer (answerIndex === 1), answer is set. Other answerIndex values tell
    //   that there is a bug in application, and error message is shown.
    // @param {Number} value
    // @param {Number} questionSetIndex
    // @param {Number} chosenQuestionIndex
    // @param {Number} questionId
    // @param {Number} questionMethodId
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
    };

});


