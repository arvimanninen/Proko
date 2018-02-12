'use strict';

app.controller('ResultChartPieCtrl', function ($attrs, QuestionService, ResultService, RunResultsService) {
    var that = this;
    var chartIndex = $attrs.questionindex;
    //var chartIndex = that.questionindex;
    
    console.log("ResultChartPieCtrl.chartIndex: " + chartIndex);

    var question = QuestionService.getQuestion(chartIndex);
    var maxResultValue = 4;
    that.questionText = question.QuestionText;
    that.ci = chartIndex;
    that.resultCounts = ResultService.getResultCounts(question.QuestionID, maxResultValue);

    

    that.chart3 = {
        labels: ['Rakennusmies', 'Sähköasentaja', 'LVI asentaja', 'Putkimies'],
        data: [that.resultCounts[0], that.resultCounts[1], that.resultCounts[2], that.resultCounts[3]],
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
                        // CHANGED TO FALSE
                        display: false,
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            // CHANGED TO FALSE AND BACK TO TRUE
                            display: false,
                            min: 0,
                            max: 5,
                            // mirror: false ADDED
                            beginAtZero: true,
                            stepSize: 1.25
                        },
                        scaleLabel: {
                            // CHANGED TO FALSE AND BACK TO TRUE
                            display: true,
                            labelString: "Tyytyväisyys"
                        }
                    }
                ]
            }
        }
    };

    
});