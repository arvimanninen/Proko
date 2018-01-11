'use strict';

app.controller('ResultChartLineSingleCtrl', function (QuestionService, AnswererTypeService, ResultService, RunResultsService) {
    var that = this;

    var currentQuestion = QuestionService.getQuestion();
    var question1Averages = ResultService.getAveragesForAll(question1.QuestionID);
    var dps = ResultService.getDatePoints();

    var getDayAndMonthString = function (dateObject) {
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1;
        var str = day + "." + month + ".";
        console.log("str: " + str);
        return str;
    };

    //var question2Average = ResultService.getAveragesForAll(question2.QuestionID);
    for (var i = 0; i < question1Averages.length; i++) {
        console.log("question1Averages[" + i + "]: " + question1Averages[i]);
    }

    that.chart1 = {
        labels: [getDayAndMonthString(dps[4]), getDayAndMonthString(dps[3]), getDayAndMonthString(dps[2]), getDayAndMonthString(dps[1]), getDayAndMonthString(dps[0])],
        //series: ['Rakennusmies', 'Sähkömies', 'LVI asentaja', 'Putkimies'],
        series: ['Testiseries'], // THIS DOESN'T WORK!
        // TODO: CHANGE THIS TO question1Averages
        data: [question1Averages[4], question1Averages[3], question1Averages[2], question1Averages[1], question1Averages[0]],
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