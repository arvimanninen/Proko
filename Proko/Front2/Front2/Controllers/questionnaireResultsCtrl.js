'use strict';

app.controller('questionnaireResultsCtrl', function questionnaireResultsCtrl($scope, $location) {

    $scope.toStart = function () {
        $location.path("/start");
    };

    $scope.answerCount = 20;

    $scope.chart1 = {
        labels: ['20.11.', '27.11.', '4.12.', '11.12.', '18.12.'],
        series: ['Rakennusmies', 'Sähkömies', 'LVI asentaja', 'Putkimies'],
        data: [[50, 70, 47, 80, 81], [85, 79, 69, 92, 98], [76, 60, 80, 68, 72], [68, 60, 79, 100, 96]],
        options: {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        display: true,
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            display: false,
                            min: 0,
                            max: 120,
                            beginAtZero: true,
                            stepSize: 30
                        },
                        scaleLabel: {
                            display: false
                        }
                    }
                ]
            }
        }
    }

    $scope.chart2 = {
        labels: ['20.11.', '27.11.', '4.12.', '11.12.', '18.12.'],
        series: ['Rakennusmi', 'Sähköasentaja', 'LVI asentaja', 'Putkimies'],
        data: [[50, 70, 47, 80, 81], [85, 79, 69, 92, 98], [76, 60, 80, 68, 72], [68, 60, 79, 100, 96]],
        legend: {
            display: false
        },
        options: {
            legend: {
                display: true
            },
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        display: true,
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            display: false,
                            min: 0,
                            max: 120,
                            beginAtZero: true,
                            stepSize: 30
                        },
                        scaleLabel: {
                            display: false
                        }
                    }
                ]
            }
        }
    }
   

});