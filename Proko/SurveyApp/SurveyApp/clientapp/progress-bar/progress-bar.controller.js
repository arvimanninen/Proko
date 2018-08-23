'use strict';
// ProgressBarCtrl
// - Controller for progressBar -component

app.controller('ProgressBarCtrl', function (RunService) {
    var that = this;

    var prBar = document.getElementById("pr-bar");
    that.progress = 0;
    var currentStep = RunService.getQuestionSetIndex() - 1;
    var maxSteps = RunService.getQuestionSetCount();
    var progressPerStep = 100 / maxSteps;
    var currentProgress = currentStep * progressPerStep;
    console.log("progressBar.currentProgress: " + currentProgress);

    // Checks that currentProgress is between 0 and 100
    // If not, error message is shown in console and progress bar element (prBar)
    // remains empty (value 0)
    if (currentProgress <= 100 && currentProgress >= 0) {
        // Template bindable progress for WAI-ARIA
        that.progress = currentProgress;
        // Progress bar is filled by current progress (currentProgress) in percents
        prBar.style.width = currentProgress + "%";
    } else {
        alert("Virhe etenemispalkissa!");
    }
});