'use strict';

app.service('QuestionService', function () {
    var questions = [];
    /*
    QuestionDTO - updated 2018-02-11
                          {
                              QuestionID = chosenquestion.QuestionID,
                              QuestionMethodID = questionmethod.QuestionMethodID,
                              QuestionSetIndex = chosenquestion.QuestionSet.ChosenIndex,
                              QuestionSetTitle = chosenquestion.QuestionSet.Title,
                              ChosenQuestionIndex = chosenquestion.ChosenIndex,
                              QuestionText = chosenquestion.Question.Text,
                              QuestionMethodValue = questionmethod.Value
                          };
    */
    
    var getQuestion = function (index) {
        if (index < questions.length) {
            return questions[index];
        } else {
            return -1;
        }
    };

    var getQuestions = function () {
        return questions;
    };

    var getQuestionsBySetIndex = function (index) {
        var qs = [];
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex === index) {
                qs.push(questions[i]);
            }
        }
        return qs;
    };
    var getQuestionMethodValueBySetIndex = function (index) {
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex === index) {
                return questions[i].QuestionMethodValue;
            }
        }
    };
    var getQuestionCountBySetIndex = function (index) {
        var qCount = 0;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex === index) {
                qCount++;
            }
        }
        console.log("questionCountBySetIndex: " + qCount);
        return qCount;
    };

    var getQuestionSetCount = function () {
        var sc = 0;
        var qsi;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex !== qsi) {
                qsi = questions[i].QuestionSetIndex;
                sc++;
            }
        }
        return sc;
    };

    var setQuestions = function (qs) {
        //TODO: CHECKUPS
        console.log("questionService.setQuestions started");
        for (var i = 0; i < qs.length; i++) {

            questions.push(qs[i]);
            console.log("questionService.questions.length: " + questions.length);
        }
        
    };

    var reset = function () {
        questions.length = 0;
    };

    return {
        getQuestion: getQuestion,
        getQuestions: getQuestions,
        getQuestionCountBySetIndex: getQuestionCountBySetIndex,
        getQuestionsBySetIndex: getQuestionsBySetIndex,
        getQuestionMethodValueBySetIndex: getQuestionMethodValueBySetIndex,
        getQuestionSetCount: getQuestionSetCount,
        setQuestions: setQuestions,
        reset: reset
    };
});