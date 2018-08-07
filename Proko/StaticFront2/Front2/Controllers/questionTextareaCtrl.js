'use strict';

app.controller('questionTextareaCtrl', function questionTextareaCtrl($scope, $location) {

    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();
        var navbtnHeight = wrapperHeight - containerHeight;
        if ((navbtnHeight) < 64) {
            navbtnHeight = 52
        } else {
            navbtnHeight = navbtnHeight - 42;
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
        $location.path("/questionThumbs");
    };

    $scope.setAnswers = function () {
        $location.path("/end");
    };

});