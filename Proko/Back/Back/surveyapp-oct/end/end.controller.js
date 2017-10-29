
'use strict';
app.controller('EndCtrl', function ($location, AnswerService, DataFactory) {
    var that = this;
    var postingSuccess = document.getElementById("posting-success");
    var postingIcon = document.getElementById("posting-icon");
    postingSuccess.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki...";
    that.goToResults = function () {
        $location.path("/results");
    };


    var postAnswers = DataFactory.postSurveyAnswers.save(AnswerService.getAnswers(), function (bundle) {
        var TextFeedbackDTO = function (nAnswerBundleID, nTextFeedback) {
            this.AnswerBundleID = nAnswerBundleID;
            this.TextFeedback = nTextFeedback;
        };
        console.log("bundle.AnswerBundleID: " + bundle.AnswerBundleID);
        
        var bundleId = bundle.AnswerBundleID;
        var textFb = AnswerService.getTextFeedback();
        console.log("textFb: " + textFb);
        var textFbDto = new TextFeedbackDTO(bundleId, textFb);
        
        var postFeedback = DataFactory.postTextFeedback.save(textFbDto, function () {
            $("#posting-status").remove();
            postingSuccess.style.visibility = "visible"
        // THIS LAUNCHES IN CASE OF TEXT FEEDBACK POSTING ERROR
        }, function () {
            postingIcon.src = "core/images/warning.gif";
            that.postingText = "Vapaaehtoisen palautteen lähettäminen epäonnistui! Voit halutessasi sulkea selaimen ja tehdä testin uudestaan.";
        });
    }, function () {
        // THIS LAUNCHES IN CASE OF ANSWER POSTING ERROR
        postingIcon.src = "core/images/warning.gif";
        that.postingText = "Vastausten lähettäminen epäonnistui! Voit halutessasi sulkea selaimen ja tehdä testin uudestaan.";
    });
});