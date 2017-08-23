'use strict';

app.controller('ButtonsHorizontalText3Ctrl', function ($location, AnswerService, QuestionService) {
    var that = this;
    // TODO: CHECK SHOULD THIS BE var OR that
    var currentIndex = AnswerService.getAnswers().length;
    console.log("ButtonsHorizontalNum5Ctrl.currentIndex: " + currentIndex);
    var currentQuestion = QuestionService.getQuestion(currentIndex);
    that.questionText = currentQuestion.Text;
    that.setAnswerAndGo = function (answer) {
        AnswerService.setAnswer(currentQuestion.QuestionID, answer);
        currentIndex++;
        if (currentIndex >= QuestionService.getQuestions().length) {
            $location.path("/end");
        } else {
            $location.path(QuestionService.getQuestion(currentIndex).QuestionMethodValue);
        }
    };
});
