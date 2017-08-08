'use strict';

app.controller('ButtonsHorizontalText3Ctrl', function ($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/end");
    };
});
