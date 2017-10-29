app.controller('TextAreaCtrl', function ($location, QuestionService, AnswerService, RunService) {
    var that = this;
    var textFb = document.getElementById("text-fb");
    textFb.value = AnswerService.getTextFeedback();
    
    that.goToEndOrBack = function (direction) {
        AnswerService.setTextFeedback(textFb.value);
        console.log("AnswerService.getTextFeedback:" + AnswerService.getTextFeedback());
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