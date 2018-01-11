' use strict';
app.service('RunResultsService', function () {
    var resultCount = 0;
    var currentResultCount = 0;

    var getResultCount = function () {
        return resultCount;
    };
    var setResultCount = function (nResultCount) {
        resultCount = nResultCount;
    };
    var getCurrentResultCount = function () {
        return currentResultCount;
    };
    var setCurrentResultCount = function (nCurrentResultCount) {
        currentResultCount = nCurrentResultCount;
    };

    return {
        getResultCount: getResultCount,
        setResultCount: setResultCount,
        getCurrentResultCount: getCurrentResultCount,
        setCurrentResultCount: setCurrentResultCount
    };
});