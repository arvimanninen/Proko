'use strict';
app.controller('QuestionThumbsCtrl', function QuestionThumbsCtrl($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.setAnswers = function () {
        console.log("toimiiko");
        $location.path("/end");

    };
});