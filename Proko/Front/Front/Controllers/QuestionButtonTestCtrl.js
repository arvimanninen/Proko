'use strict';

app.controller('QuestionButtonTestCtrl', function QuestionButtonTestCtrl($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/questionSingle3");
    };
});
