app.controller('startCtrl', function StartCtrl($scope, $location) {

    //$(document).ready(function () {
    //    var wrapperHeight = $("#wrapper").height();
    //    var containerHeight = $(".container").height();
    //    var navbtnHeight = wrapperHeight - containerHeight; 
    //    console.log(navbtnHeight);
    //    if (navbtnHeight < 64) {
    //        navbtnHeight = 52
    //    } else {
    //        navbtnHeight = navbtnHeight - 12;
    //    }
    //    $(".nav-btn-div").css("margin-top", navbtnHeight);
    //});

    //$(window).resize(function () {
    //    var wrapperHeight = $("#wrapper").height();
    //    var containerHeight = $(".container").height();
    //    var navbtnHeight = wrapperHeight - containerHeight;
    //    console.log(navbtnHeight);
    //    $(".nav-btn-div").css("margin-top", navbtnHeight);
    //});

    $scope.formatAndGo = function () {
        //answerService.format();
        $location.path("/questionRadioButton");
    };
    $scope.question1 = function () {      
        $location.path("/question1");
    };

});