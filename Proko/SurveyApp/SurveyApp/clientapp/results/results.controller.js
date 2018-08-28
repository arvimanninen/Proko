'use strict';
// ResultsCtrl
// - Controller for results -component
app.controller('ResultsCtrl', function ($location, QuestionService, AnswererTypeService, ResultService,
    RunService) {

    var that = this;

    // that.toStart()
    // - Function is executed when user clicks the button binded to it in the UI
    // - Changes view to the start view
    that.toStart = function () {
        $location.path("/start");
    };

    // - Checks that built-in navigation buttons are used. If not, view is changed to the error view.
    if (RunService.getRouteButtonsUsed() === false) {
        $location.path("/error");
    }
    RunService.setRouteButtonsUsed(false);

    var allQuestions = QuestionService.getQuestions();
    var maxChartIndex = allQuestions.length - 1;

    // getChartNames()
    // - Function gets array (questions) of questions (QuestionDTO), iterates through the array
    //   and returns array which includes the right chart component names for questions based on 
    //   question method value (questions[].QuestionMethodValue).
    // @param {Array<QuestionDTO>} questions
    // @return {Array<String>} chartNames
    var getChartNames = function (questions) {
        var chartNames = [];
        for (var i = 0; i < questions.length; i++) {
            var qmv = questions[i].QuestionMethodValue;
            if (qmv === "buttons-smileys") {
                chartNames.push("result-chart-pie");
            } else {
                chartNames.push("result-chart-line-single");
            }
        }
        return chartNames;
    };

    // - Data that is binded to the template and passed to the dynamic-chart-row -element
    //   (dynamicChartRow component in JS) as arguments in the template
    that.chartsPerRow = 3;
    that.chartNames = getChartNames(allQuestions);
    that.firstChartName = "answerer-result-chart-bar";

});