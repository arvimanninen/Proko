'use strict';

app.controller('questionRadioButtonCtrl', function questionRadioButtonCtrl($scope, $location) {

    $scope.previousView = function () {
        $location.path("/questionButtonSlider");
    };

    $scope.setAnswers = function () {
        $location.path("/questionSmileys");
    };
});