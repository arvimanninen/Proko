﻿'use strict';
app.controller('NextPrevButtonsCtrl', function ($location, $route, $templateCache, RunService, QuestionService, AnswerService) {
    var that = this;
    var changeLocation = function (currentLocation, nextLocation, index) {
        var maximumIndex = RunService.getQuestionSetCount();
        if (index > maximumIndex) {
            $location.path("/text-area");
        } else if (currentLocation === nextLocation) {
            var currentPageTemplate = $route.current.templateUrl;
            $templateCache.remove(currentPageTemplate);
            $route.reload();
        } else {
            $location.path(nextLocation);
        }
    };

    that.goTo = function (direction) {
        var questionSetIndex = RunService.getQuestionSetIndex();
        var maxSetIndex = RunService.getQuestionSetCount();
        var currentQmv = QuestionService.getQuestionMethodValueBySetIndex(questionSetIndex);
        var nextQmv;
        var aCount = AnswerService.getAnswerCountByQuestionSetIndex(questionSetIndex);
        var qCount = QuestionService.getQuestionCountBySetIndex(questionSetIndex);
        if (aCount === qCount) {
            console.log("aCount and qCount are SAME");
            console.log("aCount: " + aCount);
            console.log("qCount: " + qCount);
            if (direction === 1 || direction === -1) {
                RunService.setRouteButtonsUsed(true);
                if (direction === 1) {
                    questionSetIndex++;
                    RunService.increaseQuestionSetIndex();
                }
                if (direction === -1) {
                    questionSetIndex--;
                    RunService.decreaseQuestionSetIndex();
                }

                nextQmv = QuestionService.getQuestionMethodValueBySetIndex(questionSetIndex);
                changeLocation(currentQmv, nextQmv, questionSetIndex);
            } else {
                alert("Error at go(direction)!");
            }
        } else {
            console.log("aCount and qCount are NOT SAME");
            console.log("aCount: " + aCount);
            console.log("qCount: " + qCount);
        }
    };
});