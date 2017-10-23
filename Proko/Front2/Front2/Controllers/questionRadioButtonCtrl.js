'use strict';

app.controller('questionRadioButtonCtrl', function questionRadioButtonCtrl($scope, $location) {

    $scope.previousView = function () {
        $location.path("/start");
    };

    $scope.setAnswers = function () {
        $location.path("/questionCheckbox");
    };
});