' use strict';
app.service('RunService', function () {
    var questionSetIndex = 1;
    var questionSetCount = 0;
    var routeButtonsUsed = false;
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
    var getRouteButtonsUsed = function() {
        return routeButtonsUsed;
    };
    var setRouteButtonsUsed = function (nRouteButtonsUsed) {
        if (nRouteButtonsUsed === true || nRouteButtonsUsed === false) {
           routeButtonsUsed = nRouteButtonsUsed;
        } else {
            alert("Incorrect value @ RunService.setRouteButtonsUsed()");
        }
    };
    
    var reset = function () {
        questionSetIndex = 1;
        questionSetCount = 0;
        routeButtonsUsed = false;
    };

    return {
        getQuestionSetIndex: getQuestionSetIndex,
        increaseQuestionSetIndex: increaseQuestionSetIndex,
        decreaseQuestionSetIndex: decreaseQuestionSetIndex,
        getQuestionSetCount: getQuestionSetCount,
        setQuestionSetCount: setQuestionSetCount,
        getRouteButtonsUsed: getRouteButtonsUsed,
        setRouteButtonsUsed: setRouteButtonsUsed,
        reset: reset
    };
});