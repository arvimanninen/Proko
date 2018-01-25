'use strict';

// TODO: NEEDS LOT OF PERFORMANCE TWEAKING

app.service('ResultService', function () {
    var results = [];
    var datePoints = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
    var datePointsModified = false;

    var Result = function (nQuestionID, nAnswerBundleDateMs, nAnswerValue, nAnswererTypeID, nAnswererTypeName) {
        this.QuestionID = nQuestionID;
        this.AnswerBundleDate = new Date(nAnswerBundleDateMs);
        this.AnswerValue = nAnswerValue;
        this.AnswererTypeID = nAnswererTypeID;
        this.AnswererTypeName = nAnswererTypeName;
    };

    var getResults = function () {
        return results;
    };

    var setResults = function (resultDtos) {
        for (var i = 0; i < resultDtos.length; i++) {
            var nr = new Result(resultDtos[i].QuestionID, resultDtos[i].AnswerBundleDateMs, 
                resultDtos[i].AnswerValue, resultDtos[i].AnswererTypeID, resultDtos[i].AnswererTypeName);
            results.push(nr);
        }
    };
    
        /*
        public static double ScaleAnswerValue(int value, int currentMax, double absoluteMaxD) 
        {
            // PREVENTS WRONG SCALING WHEN VALUE
            if(value == 1)
            {
                return 1;
            }
            double valueD = Convert.ToDouble(value);
            double currentMaxD = Convert.ToDouble(currentMax);
            double scaledValueD = (absoluteMaxD / currentMaxD) * valueD;
            return scaledValueD;
        }
        */

    var getResultCountByAnswererTypeId = function (answererTypeId) {
        var resultCount = 0;
        for (var i = 0; i < results.length; i++) {
            if (results[i].AnswererTypeID === answererTypeId) {
                resultCount++;
            }
        }
        return resultCount;
    };

    var getResultCounts = function (questionId, targetMaxValue) {
        if ($.isNumeric(questionId) === false) {
            console.log("ResultService.getResultCounts.questionId is not numeric!");
            alert("ResultService.getResultCounts.questionId is not numeric!");
        }
        if ($.isNumeric(targetMaxValue) === false) {
            console.log("ResultService.getResultCounts.targetMaxValue is not numeric!");
            alert("ResultService.getResultCounts.targetMaxValue is not numeric!");
        }

        var scaleValueToFive = function (value, maxValue) {
            if (value === 1) {
                return 1.0;
            }
            return (5 / maxValue) * value;
        };

        var referenceValues = [];
        var resultCounts = [];
        for (var k = 1; k <= targetMaxValue; k++) {
            referenceValues.push(scaleValueToFive(k, targetMaxValue));
            resultCounts.push(0);
        }
        // console.log("referenceValues.length: " + referenceValues.length);
        // console.log("resultCounts.length: " + resultCounts.length);

        /*for (var t = 0; t < referenceValues.length; t++) {
            console.log("referenceValues[" + t + "]: " + referenceValues[t]);
            
        }*/

        for (var i = 0; i < results.length; i++) {
            if (results[i].QuestionID === questionId) {
                // console.log("results[" + i + "].QuestionID matches questionId: " + questionId);
                for (var m = 0; m < referenceValues.length; m++) {
                    // console.log("results[" + i + "].AnswerValue: " + results[i].AnswerValue)
                    // console.log("referenceValues[" + m + "]: " + referenceValues[m]);
                    // TODO: CHANGE == TO ===?
                    if (results[i].AnswerValue == referenceValues[m]) {
                        resultCounts[m]++;
                        // console.log("resultCounts[" + m + "]++!. New count: " + resultCounts[m]);
                    }
                }
            }
        }
        console.log("all result counts calculated!");
        for (var g = 0; g < resultCounts.length; g++) {
            console.log("resultCounts[" + g + "]: " + resultCounts[g]);
        }
        return resultCounts;
    };
    
    var getAveragesForAll = function (questionId) {
        var totalMass = 0.0;
        var totalCount = 0.0;
        var average = 0.0;
        var masses = [0.0, 0.0, 0.0, 0.0, 0.0];
        var counts = [0.0, 0.0, 0.0, 0.0, 0.0];
        var averages = [0.0, 0.0, 0.0, 0.0, 0.0];
        // CALCULATE RIGHT DATE POINTS
        var daysSinceNow = -1;
        if (datePointsModified === false) {
            for (var m = 0; m < datePoints.length; m++) {
                // TODO: TEST THIS!
                datePoints[m].setDate(datePoints[m].getDate() - daysSinceNow);
                daysSinceNow = daysSinceNow + 7;
                console.log("datePoints[" + m + "]:" + datePoints[m]);
            }
            datePointsModified = true;
        }
        for (var i = 0; i < results.length; i++) {
            if (results[i].QuestionID === questionId) {
                for (var k = 0; k < datePoints.length - 1; k++) {
                    if (results[i].AnswerBundleDate <= datePoints[k] &&
                        results[i].AnswerBundleDate > datePoints[k + 1]) {
                        /*
                        console.log("k: " + k);
                        console.log("Fits to current datePoints scope!");
                        console.log("results[" + i + "].AnswerBundleDate: " + results[i].AnswerBundleDate);
                        console.log("datePoints[" + k + "]: " + datePoints[k]);
                        console.log("datePoints[" + k + "+ 1]: " + datePoints[k + 1]);
                        console.log("masses[" + k + "] before: " + masses[k]);
                        console.log("counts[" + k + "] before: " + counts[k]);
                        console.log("results[" + i + "].AnswerValue: " + results[i].AnswerValue);
                        */
                        masses[k] = masses[k] + results[i].AnswerValue;
                        counts[k]++;
                        // console.log("masses[" + k + "] after: " + masses[k]);
                        // console.log("counts[" + k + "] after: " + counts[k]);*/
                    }
                }
            }
        }

        if (masses.length === counts.length) {
            // < OR <=
            for (var q = 0; q < masses.length; q++) {
                if (masses[q] >= 1 && counts[q] >= 1) {
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
        // averages.reverse();
        return averages;
    };
    /*
    var getAveragesForSingle = function (questionId, answererTypeId) {
        // TODO: CORRECT THIS!
        var now = new Date();
        var weeks = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date()]; // 6
        var daysSinceNow = 0;
        for (var m = 0; m < weeks.length; m++) {
            weeks[m].setDate(weeks[m].getDate() - daysSinceNow);
            daysSinceNow = daysSinceNow + 7;
        }
        // weeks[0].setDate(weeks[0].getDate() - 7);
        console.log("weeks.length: " + weeks.length);
        var answerMasses = [0, 0, 0, 0, 0]; // 5
        var answerCounts = [0, 0, 0, 0, 0]; // 5
        var averages = [0.0, 0.0, 0.0, 0.0, 0.0]; // 5
        var calculateSources = function () {
            var rightResults = 0;
            for (var r = 0; r < results.length; r++) {
                console.log("results.length: " + results.length);
                
                if (results[r].QuestionID === questionId && results[r].AnswererTypeID === answererTypeId) {
                    rightResults++;
                    /*
                    for (var w = 0; w < weeks.length - 1; w++) {
                        if (results[r].AnswerBundleDate <= weeks[w] 
                            && results[r].AnswerBundleDate > weeks[w + 1]) {
                            answerMasses[w] = answerMasses[w] + results[w].AnswerValue;
                            answerCounts[w]++;
                        }
                    }
                    // var usedResults = [];
                    // usedResults.push(r);
                    // RemoveUsedResults
                    
                }
            }
            console.log("rightResults: " + rightResults);
};
        
        var calculateAverages = function() {
            for (var i = 0; i < answerMasses.length; i++) {
                averages[i] = answerMasses[i] / answerCounts[i];
            }
        };
        calculateSources();
        calculateAverages();
        return averages;
    };
    */
    var getDatePoints = function () {
        return datePoints;
    };

    var reset = function () {
        results.length = 0;
        // TODO: TEST THIS
        datePoints.length = 0;
        datePointsModified = false;
        for (var i = 0; i < 6; i++) {
            datePoints.push(new Date());
        }
    };
    
    // TODO: UPDATE THIS
    return {
        getResults: getResults,
        setResults: setResults,
        getAveragesForAll: getAveragesForAll,
        getDatePoints: getDatePoints,
        getResultCounts: getResultCounts,
        getResultCountByAnswererTypeId: getResultCountByAnswererTypeId,
    //    getAveragesForSingle: getAveragesForSingle,
        reset: reset
    };
});