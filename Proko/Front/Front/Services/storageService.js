app.service('storageService', function () {

    // localStorageKeys save average answers of each question
    var localStorageKeys = ["p-answerOne", "p-answerTwo", "p-answerThree", "p-answerFour"];
    var answerCountKey = "p-count";
    
    // Private functions

    var calculateNewAverage = function (oldAverage, newAnswer) {
        var oldAnswerCount = getAnswerCount();
        var newAnswerCount = oldAnswerCount + 1;
        var oldData = oldAverage * oldAnswerCount;
        var newData = oldData + newAnswer;
        var newAverage = newData / newAnswerCount;
        return newAverage;
    };

    // Public functions

    var setAverages = function (answerArray) {
        console.log("storageService.setAverages() started!");
        if (answerArray.length === localStorageKeys.length) {
            for (var i = 0; i <= answerArray.length - 1; i++) {
                var na = calculateNewAverage(localStorage.getItem(localStorageKeys[i]), answerArray[i]);
                localStorage.setItem(localStorageKeys[i], na);
            }
            if (localStorage.getItem(answerCountKey)) {
                console.log("storageService.setAverages().answerCountKey available!");
                var ack = Number(localStorage.getItem(answerCountKey));
                ack++;
                localStorage.setItem(answerCountKey, ack);
            } else {
                console.log("storageService.setAverages().answerCountKey NOT available!");
                localStorage.setItem(answerCountKey, 1);
            }
        } else {
            console.log("answerArray length and reference doesn't match!");
            alert("answerArray length and reference doesn't match!");
        }
    };

    var getAverages = function () {
        var averages = [];
        for (var i = 0; i <= localStorageKeys.length - 1; i++) {

            averages.push(Number(localStorage.getItem(localStorageKeys[i])));
            console.log("storageService.getAverages.averages[" + i + "]: " + averages[i]);
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