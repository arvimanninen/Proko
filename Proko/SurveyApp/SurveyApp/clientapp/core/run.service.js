' use strict';
// RunService
// - State service, stores information about current question set index (questionSetIndex),
//   question set count (questionSetCount, for avoiding unnecessary recounting) and
//   usage of application's own navigation buttons (routeButtonsUsed).
app.service('RunService', function () {
    var questionSetIndex = 1;
    var questionSetCount = 0;
    var routeButtonsUsed = false;

    // getQuestionSetIndex()
    // - Function returns RunService.questionSetIndex
    var getQuestionSetIndex = function () {
        return questionSetIndex;
    };

    // increaseQuestionSetIndex()
    // - Function increases RunService.questionSetIndex by 1.
    var increaseQuestionSetIndex = function () {
        questionSetIndex++;
    };

    // decreaseQuestionSetIndex()
    // - Function decreases RunService.questionSetIndex by 1.
    var decreaseQuestionSetIndex = function () {
        questionSetIndex--;
    };

    // getQuestionSetCount()
    // - Function returns current question set count
    // @return {Number} questionSetCount.
    var getQuestionSetCount = function () {
        return questionSetCount;
    };

    // setQuestionSetCount()
    // - Function gets question set count (count) as a parameter, and
    //   set count -value to RunService.questionSetCount.
    // @param {Number} count
    var setQuestionSetCount = function (count) {
        questionSetCount = count;
    }

    // getRouteButtonsUsed()
    // - Function returns route/navigation button usage information
    // @return {Boolean} routeButtonsUsed
    var getRouteButtonsUsed = function() {
        return routeButtonsUsed;
    };

    // setRouteButtonsUsed()
    // - Function gets new route button usage information (nRouteButtonsUsed) as a parameter.
    //   If type of nRouteButtonsUsed is boolean, value of nRouteButtonsUsed is set to 
    //   RunService.routeButtonsUsed -variable. Else, error message is shown.
    // @param {Boolean} nRouteButtonsUsed
    var setRouteButtonsUsed = function (nRouteButtonsUsed) {
        if (nRouteButtonsUsed === true || nRouteButtonsUsed === false) {
           routeButtonsUsed = nRouteButtonsUsed;
        } else {
            alert("Incorrect value @ RunService.setRouteButtonsUsed()");
        }
    };

    // reset()
    // Sets RunService to the default state.
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