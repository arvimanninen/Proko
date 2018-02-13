'use strict';

app.controller('QuestionCtrl', function ($location, $route, $templateCache, AnswerService, QuestionService, RunService) {
    var that = this;
    //var backButton = document.getElementById("back-button");
    
    
    //var currentQmv = QuestionService.getQmvBySetIndex(questionSetIndex);
    //var nextQmv;
    
    
    /*
    var changeLocation = function (currentLocation, nextLocation, index, maximumIndex) {
        if (index > maximumIndex) {
            $location.path("/end");
        } else if (currentLocation === nextLocation) {
            var currentPageTemplate = $route.current.templateUrl;
            $templateCache.remove(currentPageTemplate);
            $route.reload();
        } else {
            $location.path(nextLocation);
        }
    };
    */
    /*
    var checkAnsweredAndActivate = function (currentAnswers) {
        console.log("checkAnsweredAndActivate() started!");
        for (var i = 0; i < currentAnswers.length; i++) {
            var cqi = currentAnswers[i].ChosenQuestionIndex.toString();
            var v = currentAnswers[i].Value.toString();
            var element = "#cqi" + cqi + "-a" + v;
            console.log("checkAnsweredAndActivate().ElementId:");
            console.log(element);
            //var currentElement = document.getElementById(elementId);

            $(element).addClass("active");
        }
    };
    */
    /*if (questionSetIndex >= 2) {
        backButton.style.visibility = "visible";
    } else {
        backButton.style.visibility = "hidden";
    }*/
    //var currentAnswers = AnswerService.getAnswersBySetIndex(questionSetIndex);
    //console.log("currentAnswers.length: ");
    //console.log(currentAnswers.length);
    /*
    if (currentAnswers.length >= 1) {
        angular.element(document).ready(checkAnsweredAndActivate(currentAnswers));
    }
    */
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
    var questionSetIndex = RunService.getQuestionSetIndex();
    console.log("questionSetIndex: " + questionSetIndex);
    that.currentQuestions = QuestionService.getQuestionsBySetIndex(questionSetIndex);
    that.setAnswer = function (value, questionSetIndex, chosenQuestionIndex, questionId, questionMethodId) {
        // Check if Answer exists
        var answerIndex = AnswerService.getAnswerIndex(questionSetIndex, chosenQuestionIndex);
        console.log("setAnswer.answerIndex: " + answerIndex);
        if (answerIndex >= 0) {
            AnswerService.replaceAnswer(answerIndex, value, questionId, questionMethodId);
        } else if (answerIndex === -1) {
            AnswerService.setAnswer(value, questionSetIndex, chosenQuestionIndex, questionId, questionMethodId);
        } else if (answerIndex === -2) {
            alert("answerIndex virheellinen!");
        } else {
            alert("Tuntematon virhe @ QuestionCtrl ");
        }
 
        var allAnswers = AnswerService.getAnswers();
        console.log("");
        console.log("");
        for (var i = 0; i < allAnswers.length; i++) {
            console.log("allAnswers.[" + i + "].Value" + allAnswers[i].Value);
            console.log("allAnswers.[" + i + "].QuestionID" + allAnswers[i].QuestionID);
            console.log("allAnswers.[" + i + "].QuestionMethodID" + allAnswers[i].QuestionMethodID);
            console.log("**************");
        }


    };

});


