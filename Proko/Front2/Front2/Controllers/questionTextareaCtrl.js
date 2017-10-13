'use strict';

app.controller('questionTextareaCtrl', function questionTextareaCtrl($scope, $location) {

    $scope.previousView = function () {
        $location.path("/questionThumbs");
    };

    $scope.setAnswers = function () {
        $location.path("/end");
    };

});