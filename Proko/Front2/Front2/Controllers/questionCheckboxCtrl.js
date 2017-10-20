'use strict'; app.controller('questionCheckboxCtrl', function questionCheckboxCtrl($scope, $location) {

    $scope.previousView = function () {
        $location.path("/questionRadioButton");
    };

    $scope.setAnswers = function () {
        $location.path("/questionSmileys");
    };
});
