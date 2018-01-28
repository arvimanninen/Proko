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

    that.answererTypes = AnswererTypeService.getAnswererTypes();
    that.setAnswererType = function (answererTypeId) {
        AnswerBundleExtrasService.setAnswererTypeId(answererTypeId);
    };
    that.goToMainQuestions = function () {
        $location.path(QuestionService.getQmvBySetIndex( RunService.getQuestionSetIndex() ));
    };
    //$(window).resize(function () {
    //    var wrapperHeight = $("#wrapper").height();
    //    var containerHeight = $(".container").height();
    //    var navbtnHeight = wrapperHeight - containerHeight;
    //    console.log(navbtnHeight);
    //    $(".nav-btn-div").css("margin-top", navbtnHeight);
    //});

});