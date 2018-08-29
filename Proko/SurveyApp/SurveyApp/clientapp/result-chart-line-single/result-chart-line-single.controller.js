'use strict';
// ResultChartLineSingleCtrl
// - Controller for resultChartLineSingle -component
app.controller('ResultChartLineSingleCtrl', function ($attrs, QuestionService, AnswererTypeService, ResultService) {
    var that = this;
    // - Attribute from HTML template
    var chartIndex = $attrs.questionindex;
    var question = QuestionService.getQuestion(chartIndex);
    var questionId = question.QuestionID;
    that.questionText = question.QuestionText;
    // - Gets five week averages based on question.QuestionID for chart
    var questionAverages = ResultService.getAveragesForAll(question.QuestionID);
    // - Gets dates for constructing date strings for chart
    var dps = ResultService.getDatePoints();

    // - Checks that questionAverages[] and dps[] have correct length
    if (questionAverages.length !== 5) {
        console.log("Invalid questionAverages.length @ ResultChartlineSingleCtrl!")
        alert("Invalid questionAverages.length @ ResultChartlineSingleCtrl!");
    }
    if (dps.length !== 6) {
        console.log("Invalid dps.length @ ResultChartLineSingleCtrl!");
        alert("Invalid dps.length @ ResultChartLineSingleCtrl!");
    }

    // getDayAndMonthString()
    // - Function gets Date object (dateObject) as a parameter, 
    //   and returns date string in following format: DD.MM.
    // @param {Date} dateObject
    // @return {String} str
    var getDayAndMonthString = function (dateObject) {
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1;
        var str = day + "." + month + ".";
        return str;
    };

    for (var i = 0; i < questionAverages.length; i++) {
        console.log("questionAverages[" + i + "]: " + questionAverages[i]);
    }

    // Chart options for Angular-Chart.js/Chart.js chart
    that.chart1 = {
        labels: [getDayAndMonthString(dps[4]), getDayAndMonthString(dps[3]), getDayAndMonthString(dps[2]), getDayAndMonthString(dps[1]), getDayAndMonthString(dps[0])],
        data: [ [questionAverages[4], questionAverages[3], questionAverages[2], questionAverages[1], questionAverages[0]] ],
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
});
