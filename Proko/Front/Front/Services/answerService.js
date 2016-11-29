app.service('answerService', function () {
    var answerList = [];

    var setAnswer = function (newAnswer) {
        answerList.push(newAnswer);
    };

    var getAnswer = function (index) {
        return answerList[index];
    };

    var getAllAnswers = function () {
        return answerList;
    };

    var format = function () {
        var ogLength = answerList.length;
        for (var i = 0; i < ogLength - 1; i++) {
            answerList[i] = null;
        }
        console.log("answerService.answerList length after formatting:" + answerList.length);
    };


    return {
        setAnswer: setAnswer,
        getAnswer: getAnswer,
        getAllAnswers: getAllAnswers,
        format: format
    };

});