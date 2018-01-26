'use strict';

app.controller('ResultChartBarCtrl', function (AnswererTypeService, ResultService) {
    var that = this;

    var answererTypes = AnswererTypeService.getAnswererTypes();
    var names = [];
    var resultCounts = [];
    for (var i = 0; i < answererTypes.length; i++) {
        var rc = ResultService.getResultCountByAnswererTypeId(answererTypes[i].AnswererTypeID);
        resultCounts.push(rc);
        names.push(answererTypes[i].Name);
    }

    console.log("ResultChartBarCtrl names.length: " + names.length);
    console.log("ResultChartBarCtrl resultCounts.length: " + resultCounts.length);
    if (names.length !== resultCounts.length) {
        console.log("names and resultCounts length don't match @ ResultChartBarCtrl");
        alert("names and resultCounts length don't match @ ResultChartBarCtrl");
    }

    that.chart1 = {
        labels: names,
        data: resultCounts,
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
                        // CHANGED FROM -10 TO 10
                        padding: 10
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

});