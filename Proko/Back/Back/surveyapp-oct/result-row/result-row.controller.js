'use strict';

app.controller('ResultRowCtrl', function (RunResultsService, QuestionService) {
    var that = this;
    var rowIndex = RunResultsService.getCurrentRowIndex();
    var maxRowIndex = RunResultsService.getMaxRowIndex();

    var allChosenQuestions = QuestionService.getQuestions();


    var getComponentNames = function (questions) {
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
});