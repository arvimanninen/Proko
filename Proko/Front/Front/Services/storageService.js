app.service('storageService', function () {
    var localStorageKeys = ["p-answerOne", "p-answerTwo", "p-answerThree", "p-answerFour"];
    var answerCountKey = "p-count";
    
    var setAnswers = function (answerArray) {
        console.log("storageService.setAnswers() started!");
        if (answerArray.length === localStorageKeys.length) {
            for (var i = 0; i <= answerArray.length - 1; i++) {
                console.log("current i:" + i);
                console.log("current localStorageKey:" + localStorageKeys[i]);
                console.log("current answerArray:" + answerArray[i]);
                localStorage.setItem(localStorageKeys[i], answerArray[i]);
            }
            if (localStorage.getItem(answerCountKey)) {
                console.log("storageService.setAnswers().answerCountKey available!");
                var ack = Number(localStorage.getItem(answerCountKey));
                ack++;
                localStorage.setItem(answerCountKey, ack);
            } else {
                console.log("storageService.setAnswers().answerCountKey NOT available!");
                localStorage.setItem(answerCountKey, 1);
            }
        } else {
            alert("Answer array's length and reference doesn't match!");
        }
    };
    var getAnswers = function () {
        var answers = [];
        for (var i = 0; i <= localStorageKeys.length - 1; i++) {

            answers.push(Number(localStorage.getItem(localStorageKeys[i])));
            console.log("storageService.getAnswers.answers[" + i + "]: " + answers[i]);
        }
        return answers;
    };

    var getAnswerCount = function () {
        var ac = Number(localStorage.getItem(answerCountKey));
        console.log("storageService.getAnswerCount.ac " + ac);
        return ac;
    }


    return {
        setAnswers: setAnswers,
        getAnswers: getAnswers,
        getAnswerCount: getAnswerCount
    };

});