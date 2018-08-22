
'use strict';

// EndCtrl
// - Controller for end -component
app.controller('EndCtrl', function ($location, AnswerService, AnswerBundleExtrasService,
    AnswersAndBundleExtrasService, DataFactory, ResultService, RunService) {

    var that = this;

    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();
        var navbtnHeight = wrapperHeight - containerHeight;
        if ((navbtnHeight) < 64) {
            navbtnHeight = 52
        } else {
            navbtnHeight = navbtnHeight - 12;
        }
        console.log(navbtnHeight);
        $(".nav-btn-div").css("margin-top", navbtnHeight);
    });

    if (RunService.getRouteButtonsUsed() === false) {
        $location.path("/error");
    }
    RunService.setRouteButtonsUsed(false);

    var postingSuccess = document.getElementById("posting-success");
    var postingIcon = document.getElementById("posting-icon");
    postingSuccess.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki...";
    that.goToResults = function () {
        RunService.setRouteButtonsUsed(true);
        $location.path("/results");
    };

    AnswersAndBundleExtrasService.setAnswersAndBundleExtras(AnswerService.getAnswers(),
        AnswerBundleExtrasService.getAnswerBundleExtras());
    var postAnswersAndExtras = DataFactory.postSurveyAnswers.save(AnswersAndBundleExtrasService.getAnswersAndBundleExtras(),
        function () {
            var resultDtos = DataFactory.getResultsToChosenQuestions.query(function () {
                console.log("resultDtos.length: " + resultDtos.length);
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
            that.postingText = "Vastausten lähettäminen epäonnistui! Voit halutessasi sulkea selaimen ja tehdä kyselyn uudestaan.";
        }
    );
});