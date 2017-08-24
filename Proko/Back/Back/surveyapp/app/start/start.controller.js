'use strict';
app.controller('StartCtrl', function StartCtrl($location, DataFactory, QuestionService) {
    console.log("StartCtrl started");
    var that = this;
    var startButton = document.getElementById("start-button");
    // NAMED lt INSTEAD OF loadingText FOR AVOIDING CONFUSION WITH that.loadingText
    var lt = document.getElementById("loading-text");

    startButton.style.visibility = "hidden";
    that.loadingText = "Kysymyksiä ladataan...";
       
    var rawQs = DataFactory.getChosenQuestions.query(function () {
        console.log("All get!");
        console.log("rawQs.length" + rawQs.length);
        for (var i = 0; i < rawQs.length; i++) {
            console.log("rawQs[" + i + "].QuestionID: " + rawQs[i].QuestionID);
            console.log("rawQs[" + i + "].ChosenIndex: " + rawQs[i].ChosenIndex);
            console.log("rawQs[" + i + "].Text: " + rawQs[i].Text);
            console.log("rawQs[" + i + "].QuestionMethodValue: " + rawQs[i].QuestionMethodValue);
        }
        $("#loading-icon").remove();
        if (rawQs.length === 0) {
            that.loadingText = "Kysymyksiä ei löydy! Sulje selain ja yritä uudestaan";
            lt.style.color = "red";
        } else {
            QuestionService.setQuestions(rawQs);
            that.loadingText = "Kysymykset ladattu!";
            lt.style.color = "green";
            startButton.style.visibility = "visible";
            console.log("QuestionService.getQuestion(0).QuestionMethodValue" + QuestionService.getQuestion(0).QuestionMethodValue);
        }
    });

    that.startSurvey = function () {
        $location.path(QuestionService.getQuestion(0).QuestionMethodValue);
    };
});