'use strict';

app.controller('ResultRowCtrl', function (RunResultsService, QuestionService) {
    var that = this;
    var rowIndex = RunResultsService.getCurrentRowIndex();
    var maxRowIndex = RunResultsService.getMaxRowIndex();
    var chartIndex = RunResultsService.getCurrentChartIndex();
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
    if (maxChartIndex - chartIndex < chartsPerRow) {
        chartsPerRow = maxChartIndex - chartIndex;
    }
    var currentQuestions = [];
    for (var i = chartIndex; i < chartIndex + chartsPerRow; i++) {
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

    that.componentNames = getComponentNames(currentQuestions);

    rowIndex++;
    RunResultsService.setCurrentRowIndex(rowIndex);
});