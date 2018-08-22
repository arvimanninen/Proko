
'use strict';

// EndCtrl
// - Controller for end -component
app.controller('EndCtrl', function ($location, AnswerService, AnswerBundleExtrasService,
    AnswersAndBundleExtrasService, DataFactory, ResultService, RunService) {

    var that = this;

    // Template adjustments
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

    // Checkup that application view changing is made with built-in buttons.
    // If buttons are used for view change, checkup is set to false 
    // If not, user is moved to error view.
    if (RunService.getRouteButtonsUsed() === false) {
        $location.path("/error");
    }
    RunService.setRouteButtonsUsed(false);

    var postingSuccess = document.getElementById("posting-success");
    var postingIcon = document.getElementById("posting-icon");
    postingSuccess.style.visibility = "hidden";
    that.postingText = "Lähetetään vastauksia, odota hetki...";

    // that.goToResults()
    // - Function executes when user clicks the button where the function is binded to
    // - routeButtonsUsed in RunService is set to true and the view is changed to
    //   the results view
    //   TODO: ADD ERROR MESSAGE TO TEMPLATE
    that.goToResults = function () {
        RunService.setRouteButtonsUsed(true);
        $location.path("/results");
    };

    // - AnswersAndBundleExtrasDTO object is added to AnswerAndBundleExtrasService
    // based on data in AnswerService and AnswerBundleExtrasService
    AnswersAndBundleExtrasService.setAnswersAndBundleExtras(AnswerService.getAnswers(),
        AnswerBundleExtrasService.getAnswerBundleExtras());

    // - AnswersAndBundleExtrasDTO is sended to the REST API (HTTP POST)
    var postAnswersAndExtras = DataFactory.postSurveyAnswers.save(AnswersAndBundleExtrasService.getAnswersAndBundleExtras(),
        function () {
            // - Results to the questions currently used in client application
            //   are queryed from the REST API (HTTP GET)
            var resultDtos = DataFactory.getResultsToChosenQuestions.query(function () {
                console.log("resultDtos.length: " + resultDtos.length);
                ResultService.setResults(resultDtos);

                $("#posting-status").remove();
                postingSuccess.style.visibility = "visible";
            // - Function is executed when querying results fails.
            // - Warning icon and error text is showed to the user
            }, function () {
                postingIcon.src = "core/images/warning.gif";
                that.postingText = "Vastaustilastojen lataaminen epäonnistui! Vastauksesi on kuitenkin lähetetty onnistuneesti.";
            });
        // - Function is executed when sending AnswersAndBundleExtrasDTO fails
        // - Warning icon and error text is showed to the user
        }, function () {
            postingIcon.src = "core/images/warning.gif";
            that.postingText = "Vastausten lähettäminen epäonnistui! Voit halutessasi sulkea selaimen ja tehdä kyselyn uudestaan.";
        }
    );
});