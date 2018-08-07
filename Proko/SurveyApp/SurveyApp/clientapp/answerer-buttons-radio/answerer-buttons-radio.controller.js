'use strict';

app.controller('AnswererButtonsRadioCtrl', function ($location, AnswererTypeService, AnswerBundleExtrasService, QuestionService, RunService) {
    var that = this;

    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();       
        var navbtnHeight = wrapperHeight - containerHeight;
        if ((navbtnHeight) < 64) {
            navbtnHeight = 52
        } else {
            navbtnHeight = navbtnHeight - 12;
        }
        console.log(navbtnHeight);
        $(".nav-btn-div").css("margin-top", navbtnHeight);
    });

    if (RunService.getRouteButtonsUsed() !== true) {
        $location.path("/error");
    }
    RunService.setRouteButtonsUsed(false);

    var answererTypeChosen = false;
    that.answererTypes = AnswererTypeService.getAnswererTypes();
    that.setAnswererType = function (answererTypeId) {
        AnswerBundleExtrasService.setAnswererTypeId(answererTypeId);
        answererTypeChosen = true;
    };
    that.goToMainQuestions = function () {
        if (answererTypeChosen === true) {
            RunService.setRouteButtonsUsed(true);
            $location.path(QuestionService.getQuestionMethodValueBySetIndex(RunService.getQuestionSetIndex()));
        } else {
            console.log("AnswererButtonsRadioCtrl.answererTypeChosen === false!");
        }
    };
    //$(window).resize(function () {
    //    var wrapperHeight = $("#wrapper").height();
    //    var containerHeight = $(".container").height();
    //    var navbtnHeight = wrapperHeight - containerHeight;
    //    console.log(navbtnHeight);
    //    $(".nav-btn-div").css("margin-top", navbtnHeight);
    //});

});