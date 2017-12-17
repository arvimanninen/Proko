app.controller('TextAreaCtrl', function ($location, QuestionService, AnswerBundleExtrasService, RunService) {
    var that = this;
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