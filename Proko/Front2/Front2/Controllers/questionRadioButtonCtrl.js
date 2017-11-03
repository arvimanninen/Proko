﻿'use strict';

app.controller('questionRadioButtonCtrl', function questionRadioButtonCtrl($scope, $location) {

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

    //$(window).resize(function () {
    //    var wrapperHeight = $("#wrapper").height();
    //    var containerHeight = $(".container").height();
    //    var navbtnHeight = wrapperHeight - containerHeight;
    //    console.log(navbtnHeight);
    //    $(".nav-btn-div").css("margin-top", navbtnHeight);
    //});

    $scope.previousView = function () {
        $location.path("/start");
    };
    $scope.setAnswers = function () {
        $location.path("/questionCheckbox");
    };
    $scope.start = function () {
        $location.path("/start");
    };
    $scope.question2 = function () {
        $location.path("/question2");
    };
});