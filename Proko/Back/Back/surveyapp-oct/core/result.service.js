'use strict';

app.service('ResultService', function () {
    var results = [];

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

    var getAverages = function (questionId, answererTypeId) {
        var now = new Date();
        var weeks = [now, now, now, now, now, now]; // 6
        var answerMasses = [0, 0, 0, 0, 0]; // 5
        var answerCounts = [0, 0, 0, 0, 0]; // 5
        var averages = [0.0, 0.0, 0.0, 0.0, 0.0]; // 5
        var calculateWeeks = function() {
            var daysSinceNow = 0;
            var daysInWeek = 7;
            for (var i = 0; i < weeks.length; i++) {
                if (daysSinceNow >= daysInWeek) {
                    weeks[i].setDate(weeks[i].getDate() - daysSinceNow);
                }
                daysSinceNow = daysSinceNow + daysInWeek;
            }
        };
        var calculateSources = function() {
            for (var r = 0; r < results.length; r++) {
                if (results[r].QuestionID === questionId && results[r].AnswererTypeID === answererTypeId) {
                    for (var w = 0; w < weeks.length - 1; w++) {
                        if (results[r].AnswerBundleDate <= weeks[w] 
                            && results[r].AnswerBundleDate > weeks[w + 1]) {
                            answerMasses[w] = answerMasses[w] + results[w].AnswerValue;
                            answerCounts[w]++;
                        }
                    }
                }
            }
        };
        var calculateAverages = function() {
            for (var i = 0; i < answerMasses.length; i++) {
                averages[i] = answerMasses[i] / answerCounts[i];
            }
        };
        calculateWeeks();
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
        getAverages: getAverages,
        reset: reset
    };
});