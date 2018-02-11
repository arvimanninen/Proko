﻿
'use strict';
app.controller('EndCtrl', function ($location, AnswerService, AnswerBundleExtrasService,
    AnswersAndBundleExtrasService, DataFactory, ResultService) {
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

    var postingSuccess = document.getElementById("posting-success");
    var postingIcon = document.getElementById("posting-icon");
    postingSuccess.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki...";
    that.goToResults = function () {
        $location.path("/results");
    };
    AnswersAndBundleExtrasService.setAnswersAndBundleExtras(AnswerService.getAnswers(),
        AnswerBundleExtrasService.getAnswerBundleExtras());
    var postAnswersAndExtras = DataFactory.postSurveyAnswers.save(AnswersAndBundleExtrasService.getAnswersAndBundleExtras(),
        function () {
            var resultDtos = DataFactory.getResultsToCq.query(function () {
                console.log("resultDtos.length: " + resultDtos.length);
                ResultService.setResults(resultDtos);
                // Ensimmäinen kysymys

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