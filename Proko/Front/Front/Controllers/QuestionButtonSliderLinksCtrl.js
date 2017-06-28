'use strict';

app.controller('QuestionButtonSliderLinksCtrl', function QuestionButtonSliderLinksCtrl($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/questionbuttontest");
    };
});