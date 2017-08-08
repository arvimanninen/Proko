'use strict';

app.service('questionService', function () {
    var questions = [];
    var getQuestions = function () {
        return questions;
    };
    var setQuestions = function (q) {
        //TODO: CHECKUPS
        var questions = q;
    };

    return {
        getQuestions: getQuestions,
        setQuestions: setQuestions

    };
});