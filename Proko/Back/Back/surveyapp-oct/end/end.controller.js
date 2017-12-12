
'use strict';
app.controller('EndCtrl', function ($location, AnswerService, DataFactory, ResultService) {
    var that = this;
    var postingSuccess = document.getElementById("posting-success");
    var postingIcon = document.getElementById("posting-icon");
    postingSuccess.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki...";
    that.goToResults = function () {
        $location.path("/results");
    };


    var postAnswers = DataFactory.postSurveyAnswers.save(AnswerService.getAnswers(), function () {
        var resultDtos = DataFactory.getResultsToCq.query(function () {
            ResultService.setResults(resultDtos);
            $("#posting-status").remove();
            postingSuccess.style.visibility = "visible";
        // THIS LAUNCHES IN OF RESULT QUERYING ERROR
        }, function () {
            postingIcon.src = "core/images/warning.gif";
            that.postingText = "Vastaustilastojen lataaminen epäonnistui! Vastauksesi on kuitenkin lähetetty onnistuneesti.";
        });
    // THIS LAUNCHES IN CASE OF ANSWER POSTING ERROR
    }, function () {
        postingIcon.src = "core/images/warning.gif";
        that.postingText = "Vastausten lähettäminen epäonnistui! Voit halutessasi sulkea selaimen ja tehdä testin uudestaan.";
    });
});