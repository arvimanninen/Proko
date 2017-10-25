'use strict';
app.controller('EndCtrl', function (AnswerService, DataFactory) {
    var that = this;
    var endText = document.getElementById("end-text");
    var postingIcon = document.getElementById("posting-icon");
    endText.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki...";

    var postAnswers = DataFactory.postSurveyAnswers.save(AnswerService.getAnswers(), function () {
        $("#posting-status").remove();
        endText.style.visibility = "visible";
    }, function () {
        // THIS LAUNCHES IN CASE OF POSTING ERROR
        postingIcon.src = "images/warning.gif";
        that.postingText = "Vastausten lähettäminen epäonnistui! Voit halutessasi sulkea selaimen ja tehdä testin uudestaan.";
    });
});