﻿'use strict';

app.controller('question3Ctrl', function question3Ctrl($scope, $location) {

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

    $scope.previousView = function () {
        $location.path("/question2");
    };

    $scope.setAnswers = function () {
        $location.path("/questionnaireEnd");
    };

});