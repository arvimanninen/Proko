'use strict';
app.controller('questionSmileysCtrl', function questionSmileysCtrl($scope, $location) {

        $scope.previousView = function () {
            $location.path("/questionRadioButton");
        };

        $scope.setAnswers = function () {
            $location.path("/questionThumbs");
        };

});