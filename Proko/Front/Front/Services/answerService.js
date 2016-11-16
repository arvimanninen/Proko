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
    }

    return {
        setAnswer: setAnswer,
        getAnswer: getAnswer,
        getAllAnswers: getAllAnswers
    };

});