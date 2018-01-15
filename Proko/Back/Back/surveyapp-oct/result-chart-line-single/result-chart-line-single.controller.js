﻿'use strict';

app.controller('ResultChartLineSingleCtrl', function (QuestionService, AnswererTypeService, ResultService, RunResultsService) {
    var that = this;
    var chartIndex = RunResultsService.getCurrentChartIndex();
    var maxChartIndex = RunResultsService.getMaxChartIndex();

    if (maxChartIndex < 0) {
        console.log("Invalid maxChartIndex @ ResultChartLineSingleCtrl!");
        alert("Invalid maxChartIndex @ ResultChartLineSingleCtrl!");
    }
    if (chartIndex > maxChartIndex) {
        console.log("Invalid chartIndex @ ResultChartLineSingleCtrl!");
        alert("Invalid chartIndex @ ResultChartLineSingleCtrl!");
    }
    console.log("ResultChartLineSingleCtrl.chartIndex: " + chartIndex);
    console.log("ResultChartLineSingleCtrl.maxChartIndex: " + maxChartIndex);

    var question = QuestionService.getQuestion(chartIndex);
    var questionId = question.QuestionID;
    console.log("ResultChartLineSingleCtrl.question.QuestionID: " + question.QuestionID);
    that.questionText = question.QuestionText;
    var questionAverages = ResultService.getAveragesForAll(question.QuestionID);
    var dps = ResultService.getDatePoints();

    if (questionAverages.length !== 5) {
        console.log("Invalid questionAverages.length @ ResultChartlineSingleCtrl!")
        alert("Invalid questionAverages.length @ ResultChartlineSingleCtrl!");
    }
    if (dps.length !== 6) {
        console.log("Invalid dps.length @ ResultChartLineSingleCtrl!");
        alert("Invalid dps.length @ ResultChartLineSingleCtrl!");
    }
    
    var getDayAndMonthString = function (dateObject) {
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1;
        var str = day + "." + month + ".";
        console.log("str: " + str);
        return str;
    };

    //var question2Average = ResultService.getAveragesForAll(question2.QuestionID);
    for (var i = 0; i < questionAverages.length; i++) {
        console.log("questionAverages[" + i + "]: " + questionAverages[i]);
    }

    chartIndex++;
    RunResultsService.setCurrentChartIndex(chartIndex);

    that.chart1 = {
        labels: [getDayAndMonthString(dps[4]), getDayAndMonthString(dps[3]), getDayAndMonthString(dps[2]), getDayAndMonthString(dps[1]), getDayAndMonthString(dps[0])],
        //series: ['Rakennusmies', 'Sähkömies', 'LVI asentaja', 'Putkimies'],
        series: ['Testiseries'], // THIS DOESN'T WORK!
        data: [questionAverages[4], questionAverages[3], questionAverages[2], questionAverages[1], questionAverages[0]],
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