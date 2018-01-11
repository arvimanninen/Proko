' use strict';
app.service('RunResultsService', function () {
    // first index = 0
    var maxChartIndex = -1;
    var currentChartIndex = 0;

    var getMaxChartIndex = function () {
        return maxChartIndex;
    };
    var setMaxChartIndex = function (nMaxChartIndex) {
        maxChartIndex = nMaxChartIndex;
    };
    var getCurrentChartIndex = function () {
        return currentChartIndex;
    };
    var setCurrentChartIndex = function (nCurrentChartIndex) {
        currentChartIndex = nCurrentChartIndex;
    };
    var reset = function () {
        maxChartIndex = -1;
        currentChartIndex = 0;
    };

    return {
        getMaxChartIndex: getMaxChartIndex,
        setMaxChartIndex: setMaxChartIndex,
        getCurrentChartIndex: getCurrentChartIndex,
        setCurrentChartIndex: setCurrentChartIndex,
        reset: reset
    };
});