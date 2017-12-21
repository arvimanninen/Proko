'use strict';

app.controller('questionnaireResultsCtrl', function questionnaireResultsCtrl($scope, $location) {

    $scope.toStart = function () {
        $location.path("/start");
    };

    $scope.answerCount = 20;

    //$("#canvas1").parentNode.style.height = '400px';

    $scope.chart1 = {
        labels: ['20.11.', '27.11.', '4.12.', '11.12.', '18.12.'],
        series: ['Rakennusmies', 'Sähkömies', 'LVI asentaja', 'Putkimies'],
        data: [[3.4, 3.9, 3.7, 4.5, 4.0], [2.2, 3.0, 3.4, 3.1, 3.7], [3.1, 3.2, 3.0, 3.7, 4.3], [2.5, 2.4, 3.0, 2.8, 3.2]],
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
                            max: 5,
                            beginAtZero: true,
                            stepSize: 1.25
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Tyytyväisyys"
                        }
                    }
                ]
            }
        }
    };

    $scope.chart2 = {
        labels: ['20.11.', '27.11.', '4.12.', '11.12.', '18.12.'],
        series: ['Rakennusmies', 'Sähköasentaja', 'LVI asentaja', 'Putkimies'],
        data: [[1.6, 2.2, 2.5, 2.7, 2.4], [2.9, 3.1, 3.6, 3.6, 3.8], [2.5, 2.4, 2.2, 2.8, 3.0], [3.2, 3.0, 3.0, 3.3, 3.4]],
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
                            max: 5,
                            beginAtZero: true,
                            stepSize: 1.25
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Tyytyväisyys"
                        }
                    }
                ]
            }
        }
    };
   

});