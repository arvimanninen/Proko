﻿'use strict';

app.service('ResultService', function () {
    var results = [];
    var datePoints = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];

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

    // TODO: TEST THIS!
    var getAveragesForAll = function (questionId) {
        var totalMass = 0.0;
        var totalCount = 0.0;
        var average = 0.0;
        var masses = [0.0, 0.0, 0.0, 0.0, 0.0];
        var counts = [0.0, 0.0, 0.0, 0.0, 0.0];
        var averages = [0.0, 0.0, 0.0, 0.0, 0.0];
        // CALCULATE RIGHT DATE POINTS
        var daysSinceNow = 0;
        for (var m = 0; m < datePoints.length; m++) {
            datePoints[m].setDate(datePoints[m].getDate() - daysSinceNow);
            daysSinceNow = daysSinceNow + 7;
        }

        for (var i = 0; i < results.length; i++) {
            if (results[i].QuestionID === questionId) {
                // datePoints.length or datePoints.length - 1 ????
                for (var k = 0; k < datePoints.length - 1; k++) {
                    // TODO: CHECK ARE THESE STATEMENTS RIGHT!
                    if (results[i].AnswerBundleDate <= datePoints[k] &&
                        results[i].AnswerBundleDate > datePoints[k + 1]) {
                        console.log("Fits to current datePoints scope!");
                        console.log("results[" + i + "].AnswerBundleDate: " + results[i].AnswerBundleDate);
                        console.log("datePoints[" + k + "]: " + datePoints[k]);
                        console.log("datePoints[" + k + "+ 1]: " + datePoints[k + 1]);
                        console.log("masses[" + k + "] before: " + masses[k]);
                        console.log("counts[" + k + "] before: " + counts[k]);
                        console.log("results[" + i + "].AnswerValue: " + results[i].AnswerValue);
                        masses[k] = masses[k] + results[i].AnswerValue;
                        counts[k]++;
                        console.log("masses[" + k + "] after: " + masses[k]);
                        console.log("counts[" + k + "] after: " + counts[k]);
                    }
                }
            }
        }

        if (masses.length === counts.length) {
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
    };
    
    // TODO: UPDATE THIS
    return {
        getResults: getResults,
        setResults: setResults,
        getAveragesForAll: getAveragesForAll,
        getDatePoints: getDatePoints,
    //    getAveragesForSingle: getAveragesForSingle,
        reset: reset
    };
});