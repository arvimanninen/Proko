'use strict';

app.controller('questionButtonSliderCtrl', function questionButtonSliderCtrl($scope, $location) {

    $scope.previousView = function () {
        $location.path("/start");
    };

    $scope.setAnswers = function () {
        $location.path("/questionSmileys");
    };
});