' use strict';
app.service('RunService', function () {
    var questionSetIndex = 1;
    var questionSetCount = 0;

    var getQuestionSetIndex = function () {
        return questionSetIndex;
    };
    var increaseQuestionSetIndex = function () {
        questionSetIndex++;
    };
    var decreaseQuestionSetIndex = function () {
        questionSetIndex--;
    };
    var getQuestionSetCount = function () {
        return questionSetCount;
    };
    var setQuestionSetCount = function (count) {
        questionSetCount = count;
    }
    var reset = function () {
        questionSetIndex = 1;
        questionSetCount = 0;
    };
    return {
        getQuestionSetIndex: getQuestionSetIndex,
        increaseQuestionSetIndex: increaseQuestionSetIndex,
        decreaseQuestionSetIndex: decreaseQuestionSetIndex,
        getQuestionSetCount: getQuestionSetCount,
        setQuestionSetCount: setQuestionSetCount,
        reset: reset
    };
});