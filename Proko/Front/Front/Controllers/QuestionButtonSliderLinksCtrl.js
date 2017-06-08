'use strict';

app.controller('QuestionButtonSliderLinksCtrl', function QuestionButtonSliderCtrl($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/questionbuttontest");
    };
});