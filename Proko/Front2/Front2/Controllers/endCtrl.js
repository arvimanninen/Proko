'use strict';

app.controller('endCtrl', function endCtrl($scope, $location) {

    $scope.end = function () {
        $location.path("/results");
    };

});