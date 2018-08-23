'use strict';
// StartCtrl
// - Controller for Start-component
app.controller('StartCtrl', function StartCtrl($location, DataFactory, QuestionService,
    AnswerService, AnswererTypeService, RunService, ResultService, AnswerBundleExtrasService,
    AnswersAndBundleExtrasService) {

    var that = this;

    // Reseting all services to default state
    QuestionService.reset();
    AnswerService.reset();
    RunService.reset();
    ResultService.reset();
    AnswerBundleExtrasService.reset();
    AnswersAndBundleExtrasService.reset();
    AnswererTypeService.reset();

    var startButton = document.getElementById("start-button");
    var lt = document.getElementById("loading-text");
    var loadingIcon = document.getElementById("loading-icon");
    // startButton visibility is hidden until all needed data is received from REST API
    startButton.style.visibility = "hidden";
    // startButton default loading text
    that.loadingText = "Kysymyksiä ladataan...";
    // showErrorMessage()
    // - Function is executed in case of error in data receiving
    var showErrorMessage = function () {
        that.loadingText = "Kysymyksiä ei löydy! Voit sulkea selaimen ja yrittää halutessasi uudestaan";
        lt.style.color = "red";
        loadingIcon.src = "core/images/warning.gif";
    };
    // Chosen questions are queryed from REST API (HTTP GET)
    var rawQs = DataFactory.getChosenQuestions.query(function () {
        // If REST API sends empty list (no chosen questions), error message is showed
        if (rawQs.length === 0) {
            showErrorMessage();
        } else {
            console.log("All cq get!");
            console.log("rawQs.length: " + rawQs.length);
            // - Received questions are set to QuestionService
            QuestionService.setQuestions(rawQs);
            // - Question set count is set to RunService for performance reasons
            RunService.setQuestionSetCount(QuestionService.getQuestionSetCount());
            // - Answerer types are queryed from REST API (HTTP GET)
            var answererTypeDtos = DataFactory.getChosenAnswererTypes.query(function () {
                // - If REST API sends empty list (no answerer types), error message is showed
                if (answererTypeDtos.length === 0) {
                    showErrorMessage();
                } else {
                    console.log("All at get!");
                    console.log("answererTypeDtos.length: " + answererTypeDtos.length);
                    // - Answerer types are set to AnswererTypeService
                    AnswererTypeService.setAnswererTypes(answererTypeDtos);
                    // - Success message is shown, text colour changed to green,
                    // and start button set as visible
                    that.loadingText = "Kysymykset ladattu!";
                    lt.style.color = "green";
                    loadingIcon.src = "core/images/success.gif";
                    startButton.style.visibility = "visible";
                    console.log("QuestionService.getQuestion(0).QuestionMethodValue" + QuestionService.getQuestion(0).QuestionMethodValue);
                }
            }, function () {
                // - In case of answerer type query error, error message is showed
                showErrorMessage();
            });
        }
    }, function () {
        // - In case of question query error, error message is showed
        showErrorMessage();
    });
    // that.startSurvey()
    // - Function is executed when user clicks the button which is binded to it
    // - routeButtonsUsed variable in RunService is set as true, so route button checkup passes
    that.startSurvey = function () {
        RunService.setRouteButtonsUsed(true);
        $location.path("/answerer-buttons-radio");
    };

});