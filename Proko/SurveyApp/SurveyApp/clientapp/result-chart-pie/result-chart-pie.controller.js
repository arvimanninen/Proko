'use strict';

// ResultChartPieCtrl
// - Controller for resultChartPie -component
app.controller('ResultChartPieCtrl', function ($attrs, QuestionService, ResultService) {

    var that = this;

    // - Attribute from HTML template
    var chartIndex = $attrs.questionindex;
    var question = QuestionService.getQuestion(chartIndex);
    // TODO: CHANGE TO DYNAMIC VALUE
    var maxResultValue = 4;

    that.questionText = question.QuestionText;
    that.ci = chartIndex;
    // - Result counts for each result value (minimum = always 1)
    that.resultCounts = ResultService.getResultCounts(question.QuestionID, maxResultValue);

    // - Chart options for Angular-Chart.js/Chart.js chart
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