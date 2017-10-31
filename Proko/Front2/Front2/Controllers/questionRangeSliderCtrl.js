'use strict';

app.controller('questionRangeSliderCtrl', function questionRangeSliderCtrl($scope, $location) {

    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();
        var navbtnHeight = wrapperHeight - containerHeight;
        console.log(navbtnHeight);
        if (navbtnHeight < 64) {
            navbtnHeight = 52;
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

    // Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.

    $('input[type="range"]').rangeslider({
        polyfill: false
    });




    $scope.previousView = function () {
        $location.path("/questionThumbs");
    };

    $scope.setAnswers = function () {
        $location.path("/questionTextarea");
    };
});