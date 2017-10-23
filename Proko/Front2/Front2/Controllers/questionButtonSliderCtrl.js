'use strict';

app.controller('questionButtonSliderCtrl', function questionButtonSliderCtrl($scope, $location) {

    $scope.previousView = function () {
        $location.path("/questionCheckbox");
    };

    $scope.setAnswers = function () {
        $location.path("/questionSmileys");
    };
});