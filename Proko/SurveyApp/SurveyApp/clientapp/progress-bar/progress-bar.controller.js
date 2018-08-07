'use strict';
app.controller('ProgressBarCtrl', function (RunService) {
    var that = this;
    var prBar = document.getElementById("pr-bar");
    that.progress = 0;

    var currentStep = RunService.getQuestionSetIndex() - 1;
    var maxSteps = RunService.getQuestionSetCount();
    var progressPerStep = 100 / maxSteps;
    var currentProgress = currentStep * progressPerStep;
    console.log("progressBar.currentProgress: " + currentProgress);

    if (currentProgress <= 100 && currentProgress >= 0) {
        that.progress = currentProgress;
        prBar.style.width = currentProgress + "%";
    } else {
        alert("Virhe etenemispalkissa!");
    }
});