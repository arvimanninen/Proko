'use strict';

app.service('ResultService', function () {
    var results = [];

    Date.prototype.removeDays = function (days) {
        var d = new Date(this.valueOf());
        d.setDate(d.getDate() - days);
        return d;
    };

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
        var datePoints = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
        // CALCULATE RIGHT DATE POINTS
        var daysSinceNow = 0;
        for (var m = 0; m < weeks.length; m++) {
            datePoints[m].setDate(datePoints[m].getDate() - daysSinceNow);
            daysSinceNow = daysSinceNow + 7;
        }

        for (var i = 0; i < results.length; i++) {
            if (results[i].QuestionID === questionId) {
                // datePoints.length or datePoints.length - 1 ????
                for (var k = 0; k < datePoints.length; k++) {
                    // TODO: CHECK ARE THESE STATEMENTS RIGHT!
                    if(results[i].AnswerBundleDate <= datePoints[m] &&
                        results[i].AnswerBundleDate < datePoints[m + 1]) {
                        
                    }
                }
                totalmass = mass + results[i].AnswerValue;
                count++;
            }
        }
        
        console.log("mass: " + mass);
        console.log("count: " + count);
        average = mass / count;
        return average;
    };

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
                    }*/
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

    var reset = function () {
        results.length = 0;
    };
    // TODO: UPDATE THIS
    return {
        getResults: getResults,
        setResults: setResults,
        getAverage: getAverage,
        getAverages: getAverages,
        reset: reset
    };
});