'use strict';

app.service('storageService', function () {
    // localStorageKeys save average answers of each question
    var localStorageKeys = ["p-answerOne", "p-answerTwo", "p-answerThree", "p-answerFour"];
    var answerCountKey = "p-count";
    
    // PRIVATE FUNCTIONS

    var calculateNewAverage = function (oldAverage, newAnswer) {
        console.log("storageService.calculateNewAverage().oldAverage: " + oldAverage);
        console.log("storageService.calculateNewAverage().newAnswer: " + newAnswer);
        var oldAnswerCount = getAnswerCount();
        var newAnswerCount = oldAnswerCount + 1;
        var oldData = oldAverage * oldAnswerCount;
        var newData = oldData + newAnswer;
        var newAverage = newData / newAnswerCount;
        console.log("storageService.calculateNewAverage().newAverage: " + newAverage);
        return newAverage;
    };

    // PUBLIC FUNCTIONS

    // Takes set of answers as an Array, calculate and set new averages to localStorage

    var setAverages = function (answerArray) {
        console.log("storageService.setAverages() started!");
        var na = 0;
        // Array length check
        if (answerArray.length === localStorageKeys.length) {
            for (var i = 0; i <= answerArray.length - 1; i++) {
                na = calculateNewAverage(localStorage.getItem(localStorageKeys[i]), answerArray[i]);
                localStorage.setItem(localStorageKeys[i], na);
            }
            // If NOT first run (answerCountKey already added to localStorage), add 1 to answerCountKey
            if (localStorage.getItem(answerCountKey)) {
                console.log("storageService.setAverages().answerCountKey available!");
                var ack = Number(localStorage.getItem(answerCountKey));
                ack++;
                localStorage.setItem(answerCountKey, ack);
            // If first run, set answerCountKey to 1
            } else {
                console.log("storageService.setAverages().answerCountKey NOT available!");
                localStorage.setItem(answerCountKey, 1);
            }
        } else {
            console.log("answerArray length and reference doesn't match!");
            alert("answerArray length and reference doesn't match!");
        }
    };

    // Returns averages from localStorage as Array, formatted to one-decimal Numbers

    var getAverages = function () {
        var averages = [];
        var unedited = 0;
        var edited = 0;
        for (var i = 0; i <= localStorageKeys.length - 1; i++) {
            unedited = Number(localStorage.getItem(localStorageKeys[i]));
            // converts unedited as String with one decimal format and then (back) to Number
            edited = Number(unedited.toFixed(1));
            averages.push(edited);
            console.log("storageService.getAverages().averages[" + i + "]: " + averages[i]);
        }
        return averages;
    };

    var getAnswerCount = function () {
        var ac = Number(localStorage.getItem(answerCountKey));
        console.log("storageService.getAnswerCount.ac " + ac);
        return ac;
    };

    return {
        setAverages: setAverages,
        getAverages: getAverages,
        getAnswerCount: getAnswerCount
    };

});