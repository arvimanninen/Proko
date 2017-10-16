'use strict';

app.controller('resultsCtrl', function resultsCtrl($scope, $location) {

    $scope.previousView = function () {
        $location.path("/end");
    };

    $scope.toStart = function () {
        $location.path("/start");
    };

    $scope.answerCount = 20;
    $scope.pollData = [
        [65, 59, 80],
        [28, 48, 40]
    ];
    $scope.pollLabels = ['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];
    $scope.pollSeries = ['Tyytyvaisyys', 'Toinen title'];
    $scope.options1 = {
        scales: {
            yAxes: [{
                ticks: {
                    max: 5,
                    min: 0,
                    stepSize: 1
                }
            }]
        }
    };

});