' use strict';
app.service('RunService', function () {
    var questionSetIndex = 1;
    var getQuestionSetIndex = function () {
        return questionSetIndex;
    };
    var setQuestionSetIndex = function (newIndex) {
        questionSetIndex = newIndex;
    };
    var reset = function () {
        questionSetIndex = 1;
    };
    return {
        getQuestionSetIndex: getQuestionSetIndex,
        setQuestionSetIndex: setQuestionSetIndex,
        reset: reset
    };
});