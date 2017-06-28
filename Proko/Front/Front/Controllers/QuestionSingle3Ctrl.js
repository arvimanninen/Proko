'use strict';

app.controller('QuestionSingle3Ctrl', function QuestionSingle3Ctrl($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/questionSingle4");
    };
});
