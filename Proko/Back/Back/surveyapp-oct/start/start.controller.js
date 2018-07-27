'use strict';
app.controller('StartCtrl', function StartCtrl($location, DataFactory, QuestionService,
    AnswerService, AnswererTypeService, RunService, ResultService, AnswerBundleExtrasService,
    AnswersAndBundleExtrasService, RunResultsService) {
    console.log("StartCtrl started");
    var that = this;
    QuestionService.reset();
    AnswerService.reset();
    RunService.reset();
    ResultService.reset();
    AnswerBundleExtrasService.reset();
    AnswersAndBundleExtrasService.reset();
    AnswererTypeService.reset();
    RunResultsService.reset();

    var startButton = document.getElementById("start-button");
    // NAMED lt INSTEAD OF loadingText FOR AVOIDING CONFUSION WITH that.loadingText
    var lt = document.getElementById("loading-text");
    var loadingIcon = document.getElementById("loading-icon");

    startButton.style.visibility = "hidden";
    that.loadingText = "Kysymyksiä ladataan...";
    var showErrorMessage = function () {
        that.loadingText = "Kysymyksiä ei löydy! Voit sulkea selaimen ja yrittää halutessasi uudestaan";
        lt.style.color = "red";
        loadingIcon.src = "core/images/warning.gif";
    };
    var rawQs = DataFactory.getChosenQuestions.query(function () {
        if (rawQs.length === 0) {
            showErrorMessage();
        } else {
            console.log("All cq get!");
            console.log("rawQs.length: " + rawQs.length);
            QuestionService.setQuestions(rawQs);
            RunService.setQuestionSetCount(QuestionService.getQuestionSetCount());
            var answererTypeDtos = DataFactory.getChosenAnswererTypes.query(function () {
                if (answererTypeDtos.length === 0) {
                    showErrorMessage();
                } else {
                    console.log("All at get!");
                    console.log("answererTypeDtos.length: " + answererTypeDtos.length);
                    AnswererTypeService.setAnswererTypes(answererTypeDtos);
                    that.loadingText = "Kysymykset ladattu!";
                    lt.style.color = "green";
                    loadingIcon.src = "core/images/success.gif";
                    startButton.style.visibility = "visible";
                    console.log("QuestionService.getQuestion(0).QuestionMethodValue" + QuestionService.getQuestion(0).QuestionMethodValue);
                }
                //TODO: REMOVE UNNECESSARY FUNCTIONS
            }, function() {
                showErrorMessage();
            });
        }
    }, function () {
        // WHEN GET FAILS, THIS FUNCTION LAUNCHES
        showErrorMessage();
    });
            
        
        /*for (var i = 0; i < rawQs.length; i++) {
            console.log("rawQs[" + i + "].QuestionID: " + rawQs[i].QuestionID);
            console.log("rawQs[" + i + "].ChosenIndex: " + rawQs[i].ChosenIndex);
            console.log("rawQs[" + i + "].Text: " + rawQs[i].Text);
            console.log("rawQs[" + i + "].QuestionMethodValue: " + rawQs[i].QuestionMethodValue);
        }*/
            // $("#loading-icon").remove();
    

    that.startSurvey = function () {
        RunService.setRouteButtonsUsed(true);
        $location.path("/answerer-buttons-radio");
    };
});