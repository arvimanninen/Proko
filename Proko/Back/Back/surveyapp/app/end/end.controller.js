app.controller('EndCtrl', function (AnswerService, DataFactory) {
    var that = this;
    var endText = document.getElementById("end-text");
    endText.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki..."

    var postAnswers = DataFactory.postSurveyAnswers.save(AnswerService.getAnswers(), function () {
        $("#posting-status").remove();
        endText.style.visibility = "visible";
    });
});