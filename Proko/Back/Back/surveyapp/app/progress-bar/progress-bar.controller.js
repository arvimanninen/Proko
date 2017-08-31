'use strict';
app.controller('ProgressBarCtrl', function (QuestionService, AnswerService) {
    var that = this;
    var prBar = document.getElementById("pr-bar");
    that.progress = 0;

    var currentStep = AnswerService.getAnswers().length + 1;
    var questionCount = QuestionService.getQuestions().length;
    var progressPerStep = 100 / questionCount;
    var currentProgress = currentStep * progressPerStep;

    if (currentProgress <= 100 - progressPerStep) {
        that.progress = currentProgress;
        prBar.style.width = currentProgress + "%";
    } else {
        alert("Virhe etenemispalkissa!");
    }
});