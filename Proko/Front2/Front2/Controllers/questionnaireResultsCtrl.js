'use strict';

app.controller('questionnaireResultsCtrl', function questionnaireResultsCtrl($scope, $location) {

    $scope.toStart = function () {
        $location.path("/start");
    };

    $scope.answerCount = 20;

    $scope.chart = {
        labels: ["Viikko 40", "Viikko 41", "Viikko 42", "Viikko 43", "Viikko 43"],
        series: ['Rakennusmiehet', 'Sähköasentajat', 'LVI asentajat', 'Putkimiehet'],
        data: [[50, 70, 47, 80, 81], [85, 79, 69, 92, 98], [76, 60, 80, 68, 72], [68, 60, 79, 100, 96]],
        options: {
            fill: false,
            lineTension: 0,
            legend: {
                display: true,
                position: 'bottom',

            },
            elements: {
                line: {
                    fill: false
                }
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
                            stepSize: 20
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Tyytyväisyys',
                        }
                    }
                ]
            },
            tooltips: {
                enabled: false
            }
        }
    }



    // chart 2
    //$scope.labels1 = ["Viikko 40", "Viikko 41", "Viikko 42", "Viikko 43", "Viikko 43"];
    //$scope.series1 = ['Rakennusmiehet', 'Pomot', '3. Ryhmä'];
    //$scope.data1 = [
    //    [2.2, 2.8, 3.5, 2.3, 3.0],
    //    [1.2, 3.8, 2.5, 3.3, 3.7],
    //    [2, 1.7, 2, 2, 1]
    //];
    //$scope.onClick = function (points, evt) {
    //    console.log(points, evt);
    //};
    //$scope.datasetOverride1 = [{ yAxisID: 'y-axis-1' }];
    //$scope.options1 = {
    //    legend: {
    //        display: true,
    //        position: 'bottom'
    //    },
    //    elements: {
    //        line: {
    //            fill: false
    //        }
    //    },
    //    scales: {
    //        yAxes: [
    //            {
    //                id: 'y-axis-1',
    //                display: true,
    //                type: 'linear',
    //                position: 'left',
    //                ticks: {
    //                    min: 0,
    //                    max: 5,
    //                    beginAtZero: true,
    //                    stepSize: 1
    //                },
    //                scaleLabel: {
    //                    display: true,
    //                    labelString: 'Label tähän'
    //                }
    //            }
    //        ]
    //    }
    //};
});