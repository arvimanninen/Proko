app.controller('TextAreaCtrl', function ($location, QuestionService, AnswerBundleExtrasService, RunService) {
    var that = this;
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
    textFb.value = AnswerBundleExtrasService.getTextFeedback();
    
    that.goToEndOrBack = function (direction) {
        AnswerBundleExtrasService.setTextFeedback(textFb.value);
        console.log("AnswerService.getTextFeedback:" + AnswerBundleExtrasService.getTextFeedback());
        if (direction === -1) {
            RunService.decreaseQuestionSetIndex();
            var lastQmv = QuestionService.getQmvBySetIndex(RunService.getQuestionSetIndex());
            $location.path(lastQmv);
        } else if (direction === 1) {
            $location.path("/end");
        } else {
            alert("Error at go(direction)!");
        }
    };
});