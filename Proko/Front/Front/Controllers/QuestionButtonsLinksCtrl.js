'use strict';

app.controller('QuestionButtonsLinksCtrl', function QuestionButtonsCtrl($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/questionbuttonsliderlinks");
    };
});