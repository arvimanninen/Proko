'use strict';
app.controller('StartCtrl', function StartCtrl($location, DataFactory, QuestionService, AnswerService, RunService) {
    console.log("StartCtrl started");
    var that = this;
    QuestionService.reset();
    AnswerService.reset();
    RunService.reset();

    var startButton = document.getElementById("start-button");
    // NAMED lt INSTEAD OF loadingText FOR AVOIDING CONFUSION WITH that.loadingText
    var lt = document.getElementById("loading-text");
    var loadingIcon = document.getElementById("loading-icon");

    startButton.style.visibility = "hidden";
    that.loadingText = "Kysymyksiä ladataan...";
       
    var rawQs = DataFactory.getChosenQuestions.query(function () {
        console.log("All get!");
        console.log("rawQs.length" + rawQs.length);
        /*for (var i = 0; i < rawQs.length; i++) {
            console.log("rawQs[" + i + "].QuestionID: " + rawQs[i].QuestionID);
            console.log("rawQs[" + i + "].ChosenIndex: " + rawQs[i].ChosenIndex);
            console.log("rawQs[" + i + "].Text: " + rawQs[i].Text);
            console.log("rawQs[" + i + "].QuestionMethodValue: " + rawQs[i].QuestionMethodValue);
        }*/
        if (rawQs.length === 0) {
            that.loadingText = "Kysymyksiä ei löydy! Voit sulkea selaimen ja yrittää halutessasi uudestaan";
            lt.style.color = "red";
            loadingIcon.src = "images/warning.gif";
        } else {
            // $("#loading-icon").remove();
            QuestionService.setQuestions(rawQs);
            that.loadingText = "Kysymykset ladattu!";
            lt.style.color = "green";
            loadingIcon.src = "images/success.gif";
            startButton.style.visibility = "visible";
            console.log("QuestionService.getQuestion(0).QuestionMethodValue" + QuestionService.getQuestion(0).QuestionMethodValue);
        }
    }, function () {
        // WHEN GET FAILS, THIS FUNCTION LAUNCHES
        that.loadingText = "Virhe kysymysten lataamisessa! Voit sulkea selaimen ja yrittää halutessasi uudestaan";
        loadingIcon.src = "images/warning.gif";
        lt.style.color = "red";
    });

    that.startSurvey = function () {
        $location.path(QuestionService.getQmvBySetIndex(RunService.getQuestionSetIndex));
    };
});