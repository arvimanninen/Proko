'use strict';

app.controller('ResultsCtrl', function ($location, QuestionService, AnswererTypeService, ResultService, RunResultsService) {
    var that = this;
    that.toStart = function () {
        $location.path("/start");
    };
    // FOR PRODUCTION
    var allChosenQuestions = QuestionService.getQuestions();
    // console.log("allQuestions.length: " + allQuestions.length);

    // FOR TESTING
    // var firstThreeQuestions = [QuestionService.getQuestion(0), QuestionService.getQuestion(1), QuestionService.getQuestion(2)];
    var firstQuestion = [QuestionService.getQuestion(0)];
    // FOR PRODUCTION
    var maxChartIndex = allChosenQuestions.length - 1;
    // FOR TESTING
    // var maxChartIndex = firstThreeQuestions.length - 1;
    RunResultsService.setMaxChartIndex(maxChartIndex);
    // var questions = [];
    
    var getComponentNames = function (questions) {
        var componentNames = [];
        for (var i = 0; i < questions.length; i++) {
            //var qmv = QuestionService.getQuestion(i).QuestionMethodValue;
            var qmv = questions[i].QuestionMethodValue;
            console.log("qmv - index[" + i + "]:" + qmv);
            if (qmv === "buttons-smileys") {
                componentNames.push("result-chart-pie");
            } else {
                componentNames.push("result-chart-line-single");
            }
        }
        return componentNames;
    };
    // TODO: CHANGE firstThreeQuestions -> allQuestions FOR PRODUCTION
    that.componentNames = getComponentNames(allChosenQuestions);
    /*var resultCounts = ResultService.getResultCounts(QuestionService.getQuestion(4).QuestionID, 4);
    // TAKE = -mark off?

    for (var k = 0; k < that.componentNames.length; k++) {
        console.log("that.componentNames[" + k + "]: " + that.componentNames[k]);
    }

    
    for (var i = 0; i <= maxChartIndex; i++) {
        chartQuestions.push(QuestionService.getQuestion(i));
    }
    console.log("chartQuestions.length: " + chartQuestions.length);
    that.componentNames = [];
    for (var k = 0; k < chartQuestions.length; k++) {
        var componentName = "";
        if()

    }
    */

    


    

    

    


    

    
    /*
    // COPIED TO CTRL
    var question1Averages = ResultService.getAveragesForAll(question1.QuestionID);
    var dps = ResultService.getDatePoints();

    //var question2Average = ResultService.getAveragesForAll(question2.QuestionID);
    for (var i = 0; i < question1Averages.length; i++) {
        console.log("question1Averages[" + i + "]: " + question1Averages[i]);
    }

    var getDayAndMonthString = function (dateObject) {
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1;
        var str = day + "." + month + ".";
        console.log("str: " + str);
        return str;
    };
    */
    /*
    var AverageResultSet = function (nAnswererTypeName, nAverages) {
        this.answererTypeName = nAnswererTypeName;
        this.averages = [];
        for (var i = 0; i < nAverages.length; i++) {
            this.averages.push(nAverages[i]);
        }
    };


    // TODO: MOVE TO ResultChartLineAllCtrl
    var question1 = QuestionService.getQuestion(0);
    var question2 = QuestionService.getQuestion(1);
    console.log("question1.QuestionID: " + question1.QuestionID);
    console.log("question2.QuestionID: " + question2.QuestionID);
    var answererTypes = AnswererTypeService.getAnswererTypes();
    console.log("answererTypes.length: " + answererTypes.length);
    var averageResultSets1 = [];
    var averageResultSets2 = [];
    for (var i = 0; i < answererTypes.length; i++) {
        var avgs1 = ResultService.getAverages(question1.QuestionID, answererTypes[i].AnswererTypeID);
        var avgs2 = ResultService.getAverages(question2.QuestionID, answererTypes[i].AnswererTypeID);
        for (var k = 0; k < avgs1.length; k++) {
            console.log(i + ".avgs1[" + k + "]: " + avgs1[k]);
            console.log(i + ".avgs2[" + k + "]: " + avgs2[k]);
        }
        var ars1 = new AverageResultSet(answererTypes[i].AnswererTypeName, avgs1);
        var ars2 = new AverageResultSet(answererTypes[i].AnswererTypeName, avgs2);
        averageResultSets1.push(ars1);
        averageResultSets2.push(ars2);
    }
    


    //$("#canvas1").parentNode.style.height = '400px';

    // COPIED TO CTRL
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

    that.chart2 = {
        labels: ['20.11.', '27.11.', '4.12.', '11.12.', '18.12.'],
        series: ['Rakennusmi', 'Sähköasentaja', 'LVI asentaja', 'Putkimies'],
        data: [[2.4, 3.1, 3.0, 2.6, 3.0], [3.2, 3.0, 2.8, 2.7, 3.4], [1.6, 2.2, 3.0, 2.7, 2.4], [2.5, 2.4, 2.8, 2.8, 3.0]],
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
    */

});