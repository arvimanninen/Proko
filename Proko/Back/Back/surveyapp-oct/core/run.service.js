' use strict';
app.service('RunService', function () {
    var questionSetIndex = 1;
    var questionSetCount = 0;
    //var goneBack = false;

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
    var getGoneBack = function() {
        return goneBack;
    };
    var setGoneBack = function (newValue) {
        if (newValue === true || newValue === false) {
            goneBack = newValue;
        } else {
            alert("Virheellinen arvo @ RunService.setGoneBack()");
        }
    };

    var reset = function () {
        questionSetIndex = 1;
        questionSetCount = 0;
        //goneBack = false;
    };

    return {
        getQuestionSetIndex: getQuestionSetIndex,
        increaseQuestionSetIndex: increaseQuestionSetIndex,
        decreaseQuestionSetIndex: decreaseQuestionSetIndex,
        getQuestionSetCount: getQuestionSetCount,
        setQuestionSetCount: setQuestionSetCount,
        /*getGoneBack: getGoneBack,
        setGoneBack: setGoneBack,*/
        reset: reset
    };
});