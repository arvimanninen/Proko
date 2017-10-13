'use strict';

app.controller('questionThumbsCtrl', function questionThumbsCtrl($scope, $location) {

        $scope.previousView = function () {
            $location.path("/questionSmileys");
        };

        $scope.setAnswers = function () {
            $location.path("/textarea");
        };

});