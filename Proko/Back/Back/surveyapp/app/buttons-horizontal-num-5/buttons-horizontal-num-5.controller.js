'use strict';

app.controller('ButtonsHorizontalNum5Ctrl', function ($location, $route, $templateCache, AnswerService, QuestionService) {
    var that = this;
    // TODO: CHECK SHOULD THIS BE var OR that
    var currentIndex = AnswerService.getAnswers().length;
    console.log("ButtonsHorizontalNum5Ctrl.currentIndex: " + currentIndex);
    var currentQuestion = QuestionService.getQuestion(currentIndex);
    that.questionText = currentQuestion.Text;
    that.setAnswerAndGo = function (answer) {
        AnswerService.setAnswer(currentQuestion.QuestionID, answer);
        var currentQmv = currentQuestion.QuestionMethodValue;
        var nextQmv;
        currentIndex++;
        if (currentIndex < QuestionService.getQuestions().length) {
            nextQmv = QuestionService.getQuestion(currentIndex).QuestionMethodValue;
        }

        if (currentIndex >= QuestionService.getQuestions().length) {
            $location.path("/end");
        } else if (currentQmv === nextQmv) {
            var currentPageTemplate = $route.current.templateUrl;
            $templateCache.remove(currentPageTemplate);
            $route.reload();
        } else {
            $location.path(nextQmv);
        }
    };

});
