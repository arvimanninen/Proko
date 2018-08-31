'use strict';

// ResultService
// - Client-side data storage/data service for results
app.service('ResultService', function () {

    var results = [];
    var datePoints = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
    var datePointsModified = false;

    // - Object constructor
    var Result = function (nQuestionID, nAnswerBundleDateMs, nAnswerValue, nAnswererTypeID, nAnswererTypeName) {
        this.QuestionID = nQuestionID;
        // Converts Unix time format (milliseconds since 1.1.1970) to JavaScript Date format
        this.AnswerBundleDate = new Date(nAnswerBundleDateMs);
        this.AnswerValue = nAnswerValue;
        this.AnswererTypeID = nAnswererTypeID;
        this.AnswererTypeName = nAnswererTypeName;
    };

    // getResults()
    // - Function returns all objects in ResultService.results[] as an array
    // @return {Array<Result>} results
    var getResults = function () {
        return results;
    };

    // setResults()
    // - Function gets array (resultDtos) of ResultDTO-objects (check server-side code) as an 
    //   parameter. ResultDTO:s are converted as Result-objects and added to the ResultService.results[]
    //   in the same order as they are in resultDtos[].
    // @param {Array<ResultDTO>} resultDtos
    var setResults = function (resultDtos) {
        for (var i = 0; i < resultDtos.length; i++) {
            var nr = new Result(resultDtos[i].QuestionID, resultDtos[i].AnswerBundleDateMs, 
                resultDtos[i].AnswerValue, resultDtos[i].AnswererTypeID, resultDtos[i].AnswererTypeName);
            results.push(nr);
        }
    };

    // getResultCountByAnswererTypeId()
    // - Function gets answerer type id (answererTypeId) as a parameter,
    //   calculates the number of results in ResultService.results[]
    //   where AnswererTypeID === answererTypeId, and returns the
    //   outcome of the calculation.
    // @param {Number} answererTypeId
    // @return {Number} resultCount
    var getResultCountByAnswererTypeId = function (answererTypeId) {
        var resultCount = 0;
        for (var i = 0; i < results.length; i++) {
            if (results[i].AnswererTypeID === answererTypeId) {
                resultCount++;
            }
        }
        return resultCount;
    };

    // getResultCounts()
    // - Function gets question id (questionId) and maximum value of question's answer
    //   (targetMaxValue) as parameters. Function iterates through
    //   ResultService.results[], calculates the count of each results based on
    //   questionId, and returns an array of result counts (array length = maximum value of answers).
    //   Function assumes that minimum value is always 1.
    // @param {Number} questionId
    // @param {Number} targetMaxValue
    // @return {Array<Number>} resultCounts
    var getResultCounts = function (questionId, targetMaxValue) {
        if ($.isNumeric(questionId) === false) {
            console.log("ResultService.getResultCounts.questionId is not numeric!");
            alert("ResultService.getResultCounts.questionId is not numeric!");
            return null;
        }
        if ($.isNumeric(targetMaxValue) === false) {
            console.log("ResultService.getResultCounts.targetMaxValue is not numeric!");
            alert("ResultService.getResultCounts.targetMaxValue is not numeric!");
            return null;
        }

        // getResultCounts().scaleValueToFive()
        // - Function gets value of answer (value) and maximum value of answer (maxValue)
        //   as parameters. Function returns the value scaled as if maximum value
        //   would be 5.
        // @param {Number} value
        // @param {Number} maxValue
        // @return {Number} scaledValue
        var scaleValueToFive = function (value, maxValue) {
            var scaledValue = 1.0;
            if (value !== 1) {
                scaledValue = (5 / maxValue) * value;
            }
            return scaledValue;
        };

        var referenceValues = [];
        var resultCounts = [];

        // - Reference values are created for finding right results
        //   when ResultService.results[].AnswerValue -variable has a maximum value of 5. 
        //   Reference values are added to referenceValues[].
        // - resultCounts[] is formatted with 0-values.
        for (var k = 1; k <= targetMaxValue; k++) {
            referenceValues.push(scaleValueToFive(k, targetMaxValue));
            resultCounts.push(0);
        }

        // - ResultService.results[] is iterated through. 
        //   If a ResultService.results[i].QuestionID === questionId, 
        //   referenceValues[] is iterated through for checking if 
        //   results[i].AnswerValue === referenceValues[m]. If the condition is true,
        //   resultsCounts[m] is increased by 1.
        for (var i = 0; i < results.length; i++) {
            if (results[i].QuestionID === questionId) {
                for (var m = 0; m < referenceValues.length; m++) {
                    // TODO: CHANGE == TO ===?
                    if (results[i].AnswerValue == referenceValues[m]) {
                        resultCounts[m]++;
                    }
                }
            }
        }
        return resultCounts;
    };

    // getAveragesForAll()
    // TODO: CHANGE NAME TO getFourWeekAverages()
    // - Function gets question id (questionId) as a parameter, and
    //   calculates five date points if not calculated already:
    //   today, seven days from today, 14 from today etc.
    // - Then function calculates average answer results based on questionId and
    //   calculated date points. Function returns an array with five decimal numerals:
    //   - averages[0]: Today to 7 days from today: average answer result value
    //   - averages[1]: 8 days from today - 15 days from today:average answer result value
    //     etc.
    // @param {Number} questionId
    // @return {Array<Number>} averages
    var getAveragesForAll = function (questionId) {
        var totalMass = 0.0;
        var totalCount = 0.0;
        var average = 0.0;
        var masses = [0.0, 0.0, 0.0, 0.0, 0.0];
        var counts = [0.0, 0.0, 0.0, 0.0, 0.0];
        var averages = [0.0, 0.0, 0.0, 0.0, 0.0];
        var daysSinceNow = -1;

        // - Date point calculation, if not already calculated
        if (datePointsModified === false) {
            for (var m = 0; m < datePoints.length; m++) {
                datePoints[m].setDate(datePoints[m].getDate() - daysSinceNow);
                daysSinceNow = daysSinceNow + 7;
            }
            datePointsModified = true;
        }

        // - Finding results from ResultService.results[] based on questionId.
        for (var i = 0; i < results.length; i++) {
            if (results[i].QuestionID === questionId) {
                // - When ResultService.results[i].QuestionID === questionId
                //   ResultService.datePoints[] is iterated through for checking if
                //   AnswerBundleDate of the current result is between 
                //   ResultService.datePoints[k] and ResultService.datePoints[k + 1].
                for (var k = 0; k < datePoints.length - 1; k++) {
                    if (results[i].AnswerBundleDate <= datePoints[k] &&
                       results[i].AnswerBundleDate > datePoints[k + 1]) {
                        // - If date point condition check is true, AnswerValue of
                        //   the result is added to masses[k] and counts[k] is
                        //   increased by 1. Values are later used for calculating
                        //   average result values.
                        masses[k] = masses[k] + results[i].AnswerValue;
                        counts[k]++;
                    }
                }
            }
        }

        // - Length check for exposing possible bugs. If lengths are not same,
        //   error message is showed and returned averages[] has zero values (0.0).
        if (masses.length === counts.length) {
            for (var q = 0; q < masses.length; q++) {
                if (masses[q] >= 1 && counts[q] >= 1) {
                    // - Averages are calculated
                    averages[q] = masses[q] / counts[q];
                }
                console.log("masses[" + q + "]: " + masses[q]);
                console.log("counts[" + q + "]: " + counts[q]);
                console.log("averages[" + q + "]: " + averages[q]);

            }
        } else {
            alert("Error in ResultService.getAveragesForAll()!");
            console.log("masses.length and counts.length are NOT same!");
        }
        return averages;
    };

    // getDatePoints()
    // - Function returns all dates in ResultService.datePoints[] as an array
    // @return {Array<Date>} datePoints
    var getDatePoints = function () {
        return datePoints;
    };

    // reset()
    // - Function sets ResultService to the default state
    var reset = function () {
        results.length = 0;
        datePoints.length = 0;
        datePointsModified = false;
        for (var i = 0; i < 6; i++) {
            datePoints.push(new Date());
        }
    };
    
    return {
        getResults: getResults,
        setResults: setResults,
        getAveragesForAll: getAveragesForAll,
        getDatePoints: getDatePoints,
        getResultCounts: getResultCounts,
        getResultCountByAnswererTypeId: getResultCountByAnswererTypeId,
        reset: reset
    };

});