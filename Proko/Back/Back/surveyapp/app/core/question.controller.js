'use strict';

app.controller('QuestionCtrl', function ($location, $route, $templateCache, AnswerService, QuestionService, RunService) {
    var that = this;
    var questionSetIndex = RunService.getQuestionSetIndex();
    console.log("questionSetIndex: " + questionSetIndex);
    that.currentQuestions = QuestionService.getQuestionsBySetIndex(questionSetIndex);


    /*var currentIndex = AnswerService.getAnswers().length;
    console.log("ButtonsHorizontalNum5Ctrl.currentIndex: " + currentIndex);
    var currentQuestion = QuestionService.getQuestion(currentIndex);
    that.questionText = currentQuestion.Text;*/
    that.setAnswer = function (value, questionId, questionMethodId) {
        AnswerService.setAnswer(value, questionId, questionMethodId);
        var allAnswers = AnswerService.getAnswers();
        for (var i = 0; i < allAnswers.length; i++) {
            console.log("**************");
            console.log("allAnswers.[" + i + "].Value" + allAnswers[i].Value);
            console.log("allAnswers.[" + i + "].QuestionID" + allAnswers[i].QuestionID);
            console.log("allAnswers.[" + i + "].QuestionMethodID" + allAnswers[i].QuestionMethodID);
        }
        /*var currentQmv = currentQuestion.QuestionMethodValue;
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
           */
    };
});