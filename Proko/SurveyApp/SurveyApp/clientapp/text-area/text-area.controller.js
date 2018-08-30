'use strict';

// TextAreaCtrl
// Controller for textArea -component

app.controller('TextAreaCtrl', function ($location, QuestionService, AnswerBundleExtrasService, RunService) {

    var that = this;

    // - Template adjustments
    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();
        var navbtnHeight = wrapperHeight - containerHeight;
        if ((navbtnHeight) < 64) {
            navbtnHeight = 52
        } else {
            navbtnHeight = navbtnHeight - 42;
        }
        console.log(navbtnHeight);
        $(".nav-btn-div").css("margin-top", navbtnHeight);
    });

    var textFb = document.getElementById("text-fb");
    // - textFeedback get from AnswerBundleExtrasService
    // - If textFeedback is already written, it is showed in "text-fb" textarea element
    //   and its available for editing.
    textFb.value = AnswerBundleExtrasService.getTextFeedback();

    // that.goToEndOrBack()
    // - Function is executed when user clicks the button(s) which function is binded to.
    // - direction is given to function as a parameter. If direction is -1, view is changed
    //   to the last question set view, defined by question method value. 
    // - Else if direction is 1, view is changed to the end view. Else, error message is showed.
    // @param {Number} direction

    that.goToEndOrBack = function (direction) {
        // - Text feedback is set to AnswerBundleExtrasService
        AnswerBundleExtrasService.setTextFeedback(textFb.value);
        if (direction === -1) {
            RunService.decreaseQuestionSetIndex();
            var lastQmv = QuestionService.getQuestionMethodValueBySetIndex(RunService.getQuestionSetIndex());
            $location.path(lastQmv);
        } else if (direction === 1) {
            $location.path("/end");
        } else {
            alert("Error at go(direction)!");
        }
    };

});