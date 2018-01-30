'use strict';

app.controller('ResultRowCtrl', function (RunResultsService, QuestionService) {
    var that = this;
    var rowIndex = RunResultsService.getCurrentRowIndex();
    var maxRowIndex = RunResultsService.getMaxRowIndex();
    var chartIndexRow = RunResultsService.getChartIndexRow();
    var maxChartIndex = RunResultsService.getMaxChartIndex();

    if (maxRowIndex < 0) {
        console.log("Invalid maxRowIndex @ ResultRowCtrl!");
        alert("Invalid maxRowIndex @ ResultRowCtrl!");
    }
    if (rowIndex > maxRowIndex) {
        console.log("Invalid rowIndex @ ResultRowCtrl!");
        alert("Invalid rowIndex @ ResultRowCtrl!");
    }
    
    var chartsPerRow = RunResultsService.getChartsPerRow();
    if (maxChartIndex - chartIndexRow < chartsPerRow) {
        chartsPerRow = maxChartIndex - chartIndexRow;
    }
    console.log("********");
    console.log("ResultRowCtrl.rowIndex: " + rowIndex);
    console.log("ResultRowCtrl.maxRowIndex: " + maxRowIndex);
    console.log("ResultRowCtrl.chartIndexRow: " + chartIndexRow);
    console.log("ResultRowCtrl.maxChartIndex: " + maxChartIndex);
    console.log("ResultRowCtrl.chartsPerRow: " + chartsPerRow);
    var currentQuestions = [];
    for (var i = chartIndexRow; i < chartIndexRow + chartsPerRow; i++) {
        var cq = QuestionService.getQuestion(i);
        currentQuestions.push(cq);
    }

    var getChartNames = function (questions) {
        for (var i = 0; i < questions.length; i++) {
            //var qmv = QuestionService.getQuestion(i).QuestionMethodValue;
            var chartNames = [];
            var qmv = questions[i].QuestionMethodValue;
            console.log("qmv - index[" + i + "]:" + qmv);
            if (qmv === "buttons-smileys") {
                chartNames.push("result-chart-pie");
            } else {
                chartNames.push("result-chart-line-single");
            }
        }
        return chartNames;
    };

    rowIndex++;
    RunResultsService.setCurrentRowIndex(rowIndex);
    chartIndexRow = chartIndexRow + chartsPerRow;
    RunResultsService.setChartIndexRow(chartIndexRow);

    that.chartNames = getChartNames(currentQuestions);

    
});