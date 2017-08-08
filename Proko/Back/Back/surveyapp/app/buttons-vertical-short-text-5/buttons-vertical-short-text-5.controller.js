'use strict';

app.controller('ButtonsVerticalShortText5Ctrl', function ($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/questionbuttontest");
    };
});