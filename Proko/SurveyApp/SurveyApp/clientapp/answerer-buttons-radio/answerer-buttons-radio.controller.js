'use strict';
// AnswererButtonsRadioCtrl
// - Controller for answererButtonsRadio -component
app.controller('AnswererButtonsRadioCtrl', function ($location, AnswererTypeService, AnswerBundleExtrasService, QuestionService, RunService) {

    var that = this;

    // Template adjustments
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

    // Checkup that application view changing is made with built-in buttons.
    // If buttons are used for view change, checkup is set to false 
    // If not, user is moved to error view.
    if (RunService.getRouteButtonsUsed() !== true) {
        $location.path("/error");
    }
    RunService.setRouteButtonsUsed(false);

    // answererTypeChosen is set to false, so user cannot move to another view
    // without choosing answererType
    var answererTypeChosen = false;

    // getting answererTypes from AnswererTypeService for template binding
    that.answererTypes = AnswererTypeService.getAnswererTypes();

    // that.setAnswererType()
    // - Function is executed when user clicks answerer type chosing button.
    //   Chosen answerer type is set to AnswerBundleExtrasService according to answererTypeId
    // - answererTypeChosen is set to true, so route button checkup passes
    // @param {Number} answererTypeId
    that.setAnswererType = function (answererTypeId) {
        AnswerBundleExtrasService.setAnswererTypeId(answererTypeId);
        answererTypeChosen = true;
    };

    // that.goToMainQuestions()
    // - Function is executed when user clicks the button which function is binded.
    // - If answerer type is chosen, routeButtonsUsed in RunService is set to true
    //   and user is moved to the first question set view
    // - If answerer type is not chosen, error message is shown in console
    //   TODO: ADD ERROR MESSAGE TO TEMPLATE
    that.goToMainQuestions = function () {
        if (answererTypeChosen === true) {
            RunService.setRouteButtonsUsed(true);
            $location.path(QuestionService.getQuestionMethodValueBySetIndex(RunService.getQuestionSetIndex()));
        } else {
            alert("Vastaajatyyppiä ei valittu.");
            console.log("AnswererButtonsRadioCtrl.answererTypeChosen === false!");
        }
    };

});