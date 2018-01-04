'use strict';

app.controller('questionnaireResultsCtrl', function questionnaireResultsCtrl($scope, $location) {

    $scope.toStart = function () {
        $location.path("/start");
    };

    $scope.chart1 = {
        labels: ['Rakennusmies', 'Sähkömies', 'LVI-asentaja', 'Putkimies'],
        data: [10, 4, 7, 2],
        colors: ['rgba(142,215,145,0.35)', 'rgba(142,215,145,0.35)', 'rgba(142,215,145,0.35)', 'rgba(142,215,145,0.35)', 'rgba(142,215,145,0.35)'],
        options: {
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        min: 0,
                        mirror: true,
                        fontSize: 18,
                        padding: -10
                    },
                    categoryPercentage: 1
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        min: 0
                    }
                }]
            },
            legend: {
                display: false
            },
            title: {
                display: false
            },
            barShowStroke: false,
            barStrokeWidth: 10,
            barValueSpacing: 10
        }
    };


    $scope.chart2 = {
        labels: ['20.11.', '27.11.', '4.12.', '11.12.', '18.12.'],
        data: [[2.4, 3.2, 3.7, 3.3, 4.0]],
        colors: ['#8ed791'],
        datasetOverride: [
            {
                pointRadius: 4,
                pointHoverRadius: 4,
                pointHoverBorderColor: "#ffffff"
            }
        ],
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

    $scope.chart3 = {
        labels: ['Rakennusmies', 'Sähköasentaja', 'LVI asentaja', 'Putkimies'],
        data: [3, 5, 7, 11],
        colors: [
            {
                backgroundColor: '#f7ab98',
                pointBackgroundColor: '#f7ab98'
            }, {
                backgroundColor: '#f1c18e',
                pointBackgroundColor: '#f1c18e'
            }, {
                backgroundColor: '#ceda97',
                pointBackgroundColor: '#ceda97'
            }, {
                backgroundColor: '#8ed791',
                pointBackgroundColor: '#8ed791'
            }
        ],
        options: {
            legend: {
                display: false
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
  

    $scope.chartxx = {
        labels: ['20.11.', '27.11.', '4.12.', '11.12.', '18.12.'],
        series: ['Rakennusmies', 'Sähkömies', 'LVI asentaja', 'Putkimies'],
        data: [[3.4, 3.9, 3.7, 4.5, 4.0], [2.2, 3.0, 3.4, 3.1, 3.7], [3.1, 3.2, 3.0, 3.7, 4.3], [2.5, 2.4, 3.0, 2.8, 3.2]],
        colors: ['#8ed791', '#d7d78e', '#d78e8e', '#c58ed7', '#8eb3d7'],
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
   

});