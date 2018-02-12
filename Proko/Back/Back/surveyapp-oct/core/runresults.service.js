' use strict';
app.service('RunResultsService', function () {
    // first index = 0
    var maxChartIndex = -1;
    var currentChartIndex = 0;
    
    var maxRowIndex = -1;
    var currentRowIndex = 0;

    var chartsPerRow = 0;
    var chartIndexRow = 0;

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
    var getMaxRowIndex = function () {
        return maxRowIndex;
    };
    var setMaxRowIndex = function (nMaxRowIndex) {
        maxRowIndex = nMaxRowIndex;
    };
    var getCurrentRowIndex = function () {
        return currentRowIndex;
    };
    var setCurrentRowIndex = function (nCurrentRowIndex) {
        currentRowIndex = nCurrentRowIndex;
    };
    var getChartsPerRow = function () {
        return chartsPerRow;
    };
    var setChartsPerRow = function (nChartsPerRow) {
        chartsPerRow = nChartsPerRow;
    };
    var getChartIndexRow = function () {
        return chartIndexRow;
    };
    var setChartIndexRow = function (nChartIndexRow) {
        chartIndexRow = nChartIndexRow;
    };
    var reset = function () {
        maxChartIndex = -1;
        currentChartIndex = 0;
        maxRowIndex = -1;
        currentRowIndex = 0;
        chartsPerRow = 0;
    };

    return {
        getMaxChartIndex: getMaxChartIndex,
        setMaxChartIndex: setMaxChartIndex,
        getCurrentChartIndex: getCurrentChartIndex,
        setCurrentChartIndex: setCurrentChartIndex,
        getMaxRowIndex: getMaxRowIndex,
        setMaxRowIndex: setMaxRowIndex,
        getCurrentRowIndex: getCurrentRowIndex,
        setCurrentRowIndex: setCurrentRowIndex,
        getChartsPerRow: getChartsPerRow,
        setChartsPerRow: setChartsPerRow,
        getChartIndexRow: getChartIndexRow,
        setChartIndexRow: setChartIndexRow,
        reset: reset
    };
});