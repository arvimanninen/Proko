'use strict';

app.service('safetyAnswerService', function () {
    // localStorage keys for each answer
    var safetyAnswerOneKeys = ["sa1-1","sa1-2","sa1-3","sa1-4","sa1-5"];
    var safetyAnswerTwoKeys = ["sa2-1","sa2-2","sa2-3","sa2-4","sa2-5"];
    
    function setAnswers(answerNumber, answerArray) {
        var currentKeys = [];
        if (answerNumber === 1) {
            currentKeys = safetyAnswerOneKeys;
        } else if (answerNumber === 2) {
            currentKeys = safetyAnswerTwoKeys;
        } else {
            alert("Failure in safetyAnswerService.setSafetyAnswers().currentKeys!");
            console.log("Failure in safetyAnswerService.setSafetyAnswers().currentKeys!");
        }

        if (answerArray.length === currentKeys.length) {
            for (var i = 0; i <= answerArray.length - 1; i++) {
                localStorage.setItem(currentKeys[i], answerArray[i]);
            }
        } else {
            console.log("safetyAnswerService.setAnswers().answerArray length and reference doesn't match!");
            alert("safetyAnswerService.setAnswers().answerArray length and reference doesn't match!");
        }
    }

    function getAnswers(answerNumber) {
        if (answerNumber === 1) {
            return safetyAnswerOneKeys;
        } else if (answerNumber === 2) {
            return safetyAnswerTwoKeys;
        } else {
            alert("Failure in safetyAnswerService.getAnswers().answerNumber!");
            console.log("Failure in safetyAnswerService.getAnswers().answerNumber!");
        }
    }

    return {
        setAnswers: setAnswers,
        getAnswers: getAnswers
    };
});