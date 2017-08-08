'use strict';

app.controller('ButtonsHorizontalShortBlank5Ctrl', function ($scope, $location) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswer = function () {
        $location.path("/questionSingle3");
    };
});
