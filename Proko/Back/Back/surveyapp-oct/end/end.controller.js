
'use strict';
app.controller('EndCtrl', function (AnswerService, DataFactory) {
    var that = this;
    var postingSuccess = document.getElementById("posting-success");
    var postingIcon = document.getElementById("posting-icon");
    postingSuccess.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki...";

    var postAnswers = DataFactory.postSurveyAnswers.save(AnswerService.getAnswers(), function () {
        $("#posting-status").remove();
        postingSuccess.style.visibility = "visible";
    }, function () {
        // THIS LAUNCHES IN CASE OF POSTING ERROR
        postingIcon.src = "core/images/warning.gif";
        that.postingText = "Vastausten lähettäminen epäonnistui! Voit halutessasi sulkea selaimen ja tehdä testin uudestaan.";
    });
});