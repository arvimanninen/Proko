'use strict';

app.controller('QuestionCtrl', function ($location, $route, $templateCache, AnswerService, QuestionService, RunService) {
    var that = this;
    var backButton = document.getElementById("back-button");
    var questionSetIndex = RunService.getQuestionSetIndex();
    var maxSetIndex = RunService.getQuestionSetCount();
    console.log("questionSetIndex: " + questionSetIndex);
    var currentQmv = QuestionService.getQmvBySetIndex(questionSetIndex);
    var nextQmv;
    
    

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
    
    if (questionSetIndex >= 2) {
        backButton.style.visibility = "visible";
    } else {
        backButton.style.visibility = "hidden";
    }

    that.currentQuestions = QuestionService.getQuestionsBySetIndex(questionSetIndex);
    var currentAnswers = AnswerService.getAnswersBySetIndex(questionSetIndex);

    var checkAnsweredAndActivate = function () {
        for(var i = 0; i < currentAnswers; i++) {
            var cqi = currentAnswers[i].ChosenQuestionIndex.toString();
            var i1 = i.toString();
            var elementId = "#" + cgi + " " + i1;
            var currentElement = angular.element( document.querySelector( elementId ) );
            currentElement.addClass('active');
        }
    };
        

        
        
    };

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
        
        var answerCountInSet = AnswerService.getAnswerCountByQuestionSetIndex(questionSetIndex);
        var questionCountInSet = QuestionService.getQuestionCountBySetIndex(questionSetIndex);

        if (answerCountInSet === questionCountInSet) {
            questionSetIndex++;
            RunService.increaseQuestionSetIndex();
            nextQmv = QuestionService.getQmvBySetIndex(questionSetIndex);
            changeLocation(currentQmv, nextQmv, questionSetIndex, maxSetIndex);
            // $location.path(QuestionService.getQmvBySetIndex(questionSetIndex));
        }
    };
    that.goBack = function () {
        questionSetIndex--;
        RunService.decreaseQuestionSetIndex();
        nextQmv = QuestionService.getQmvBySetIndex(questionSetIndex);
        changeLocation(currentQmv, nextQmv, questionSetIndex, maxSetIndex);
    };
});


