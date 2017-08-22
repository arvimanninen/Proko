'use strict';
app.controller('StartCtrl', function StartCtrl($location, DataFactory, QuestionService) {
    console.log("StartCtrl started");
    var that = this;
    that.loadText = "Kysymyksiä ladataan...";
       
    var rawQs = DataFactory.getChosenQuestions.query(function () {
        console.log("All get!");
        console.log("rawQs.length" + rawQs.length);
        for (var i = 0; i < rawQs.length; i++) {
            console.log("rawQs[" + i + "].QuestionID: " + rawQs[i].QuestionID);
            console.log("rawQs[" + i + "].ChosenIndex: " + rawQs[i].ChosenIndex);
            console.log("rawQs[" + i + "].Text: " + rawQs[i].Text);
            console.log("rawQs[" + i + "].QuestionMethodValue: " + rawQs[i].QuestionMethodValue);
        }
        if (rawQs.length === 0) {
            alert("Kysymyksiä ei löydy! Sulje selain ja yritä uudestaan");
        }
        QuestionService.setQuestions(rawQs);
        that.loadText = "Kysymykset ladattu!";
        console.log("QuestionService.getQuestion(0).QuestionMethodValue" + QuestionService.getQuestion(0).QuestionMethodValue);
    });

    that.routeToTest = function () {
        $location.path(QuestionService.getQuestion(0).QuestionMethodValue);
    };
});