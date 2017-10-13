'use strict';

app.controller('resultsCtrl', function resultsCtrl($scope, $location) {



    $scope.answerCount = 20;
    $scope.pollData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.pollLabels = ['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];
    $scope.pollSeries = ['Tyytyvaisyys'];
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