'use strict';

app.service('safetyAnswerService', function () {
    // localStorage keys for each answer
    var safetyAnswerOneKeys = ["sa1-1", "sa1-2", "sa1-3", "sa1-4", "sa1-5"];
    var safetyAnswerTwoKeys = ["sa2-1", "sa2-2", "sa2-3", "sa2-4", "sa2-5"];
    
    function setAnswer(answerNumber, answer) {
        var currentKeys = [];
        var answerNumberValid = false;
        var currentStorageItem = 0;
        // TODO: Enable type check!
        //if (typeof answer === Number) {
            var answerIndex = answer - 1;
        //} else {
        //    alert("safetyAnswerService.setAnswer().answer type not valid!");
        //    console.log("safetyAnswerService.setAnswer().answer type not valid!");
        //}

        // Checks that answerNumber is valid
        if (answerNumber === 1) {
            currentKeys = safetyAnswerOneKeys;
            answerNumberValid = true;
        } else if (answerNumber === 2) {
            currentKeys = safetyAnswerTwoKeys;
            answerNumberValid = true;
        } else {
            console.log("Failure in safetyAnswerService.setSafetyAnswers().currentKeys!");
            alert("Failure in safetyAnswerService.setSafetyAnswers().currentKeys!");
        }

        if (answerNumberValid === true) {
            if (localStorage.getItem(currentKeys[answerIndex])) {
                currentStorageItem = Number(localStorage.getItem(currentKeys[answerIndex]));
                currentStorageItem++;
                localStorage.setItem(currentKeys[answerIndex], currentStorageItem);
            } else {
                localStorage.setItem(currentKeys[answerIndex], 1);
            }
            console.log("localStorage." + currentKeys[answerIndex] + ": " + localStorage.getItem(currentKeys[answerIndex]));
        }
    }

    function getAnswerCounts(answerNumber) {
        var answerCounts = [];
        var currentKeys = [];
        if (answerNumber === 1) {
            currentKeys = safetyAnswerOneKeys;
        } else if (answerNumber === 2) {
            currentKeys = safetyAnswerTwoKeys;
        } else {
            alert("Failure in safetyAnswerService.getAnswers().answerNumber!");
            console.log("Failure in safetyAnswerService.getAnswers().answerNumber!");
            return null;
        }
        for (var i = 0; i <= currentKeys.length - 1; i++) {
            answerCounts[i] = Number(localStorage.getItem(currentKeys[i]));
        }
        return answerCounts;
    }

    return {
        setAnswer: setAnswer,
        getAnswerCounts: getAnswerCounts
    };
});