'use strict';
app.controller('ProgressBarCtrl', function (QuestionService, AnswerService) {
    var that = this;
    var prBar = document.getElementById("pr-bar");
    that.progress = 0;

    var currentStep = AnswerService.getAnswers().length + 1;
    var stepCount = QuestionService.getQuestions().length + 1;
    var progressPerStep = 100 / stepCount;
    var currentProgress = currentStep * progressPerStep;
    console.log("progressBar.currentProgress: " + currentProgress);

    if (currentProgress <= 100) {
        that.progress = currentProgress;
        prBar.style.width = currentProgress + "%";
    } else {
        alert("Virhe etenemispalkissa!");
    }
});