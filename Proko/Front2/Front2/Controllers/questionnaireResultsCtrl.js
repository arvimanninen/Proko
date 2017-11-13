'use strict';

app.controller('questionnaireResultsCtrl', function questionnaireResultsCtrl($scope, $location) {

    $scope.toStart = function () {
        $location.path("/start");
    };

    $scope.answerCount = 20;

    $scope.chart1 = {
        labels: ['Viikko 40', 'Viikko 41', 'Viikko 42', 'Viikko 43', 'Viikko 43'],
        series: ['Eri mieltä', 'Ei osaa sanoa', 'Samaa mieltä'],
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
                            stepSize: 20
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Tyytyväisyys',
                        }
                    }
                ]
            }
        }
    }

    $scope.chart2 = {
        labels: [''],
        series: ['Vaihtoehto 1', 'Vaihtoehto 2', 'Vaihtoehto 3', 'Vaihtoehto 4', 'Vaihtoehto 5'],
        data: [[50], [40], [26], [69], [46]],
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
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Vastaajien määrä',
                        }
                    }
                ]
            }
        }
    }
   

});