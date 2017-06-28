'use strict'; app.controller('QuestionSingle4Ctrl', function QuestionSingle4Ctrl($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/end");
    };
});
