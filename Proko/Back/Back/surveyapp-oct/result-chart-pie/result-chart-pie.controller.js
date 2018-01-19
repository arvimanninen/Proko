'use strict';

app.controller('ResultChartPieCtrl', function (QuestionService, ResultService, RunResultsService) {
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

    var question = QuestionService.getQuestion(chartIndex);
    var maxResultValue = 4;
    that.questionText = question.QuestionText;
    var resultCounts = ResultService.getResultCounts(question.QuestionID, maxResultValue);

    chartIndex++;
    RunResultsService.setCurrentChartIndex(chartIndex);

    that.pieChart = {
        labels: ['Rakennusmies', 'Sähköasentaja', 'LVI asentaja', 'Putkimies'],
        data: [resultCounts[0], resultCounts[1], resultCounts[2], resultCounts[3]],
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
                        display: false,
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