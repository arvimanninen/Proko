'use strict';
// AnswerService
// - Client-side storage for answers
app.service('AnswerService', function () {
    var answers = [];

    // - Object constructors
    var AnswerDTO = function (nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID) {
        this.Value = nValue;
        this.QuestionSetIndex = nQuestionSetIndex;
        this.ChosenQuestionIndex = nChosenQuestionIndex;
        this.QuestionID = nQuestionID;
        this.QuestionMethodID = nQuestionMethodID;
    };
    var AnswerBundleExtrasDTO = function (nAnswererTypeID, nTextFeedback) {
        this.AnswererTypeID = nAnswererTypeID;
        this.TextFeedback = nTextFeedback;
    };
    var AnswersAndBundleExtrasDTO = function (nAnswerDtos, nBundleExtrasDto) {
        this.AnswerDtos = [];
        this.AnswerBundleExtrasDtos = nBundleExtrasDto;
    };

    // getAnswer()
    // - Function returns answer by index in AnswerService.answers[].
    // @param {Number} index
    // @return {AnswerDTO} answers[index]
    var getAnswer = function (index) {
        return answers[index];
    };

    // getAnswers()
    // - Function returns the whole AnswerService.answers[].
    // @return {Array<AnswerDTO>} answers
    var getAnswers = function () {
        return answers;
    };

    // getAnswerCountByQuestionSetIndex()
    // - Function returns answer count in AnswerService.answers[] by QuestionSetIndex.
    // @param {Number} index
    // @return {Number} aCount
    var getAnswerCountByQuestionSetIndex = function (index) {
        var aCount = 0;
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].QuestionSetIndex === index) {
                aCount++;
            }
        }
        console.log("answerCountByQuestionSetIndex: " + aCount);
        return aCount;
    };

    // getAnswersBySetIndex()
    // - Function finds all answers where answer.QuestionSetIndex = setIndex
    //   and returns them in an array.
    // @param {Number} setIndex
    // @return {Array<AnswerDTO>} ans
    var getAnswersBySetIndex = function (setIndex) {
        var ans = [];
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].QuestionSetIndex === setIndex) {
                ans.push(answers[i]);
            }
        }
        return ans;
    };

    // setAnswer()
    // - Function gets all variables needed for creating AnswerDTO object as parameters,
    //   creates new AnswerDTO object (sa), and adds the new AnswerDTO object to the end
    //   of AnswerService.answers[].
    // @param {Number} nValue
    // @param {Number} nQuestionSetIndex
    // @param {Number} nChosenQuestionIndex
    // @param {Number} nQuestionID
    // @param {Number} nQuestionMethodID
    var setAnswer = function (nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID) {
        var sa = new AnswerDTO(nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID);
        answers.push(sa);
    };

    // replaceAnswer()
    // - Function replaces answer in AnswerService.answers[].
    // @param {Number} answerIndex
    // @param {Number} nValue
    // @param {Number} questionId
    // @param {Number} questionMethodId
    var replaceAnswer = function (answerIndex, nValue, questionId, questionMethodId) {
        if(answers[answerIndex].QuestionID === questionId && answers[answerIndex].QuestionMethodID === questionMethodId) {
            answers[answerIndex].Value = nValue;
        } else {
            alert("Kysymyksen korvaaminen ei onnistunut, tuntematon virhe!");
        }
    };

    // getAnswerIndex
    // - Function finds answer index in AnswerService.answers[] by QuestionSetIndex and
    //   QuestionIndex. If one answer is found it is returned. 
    //   If there are more than one answers found, it means bug in the application and
    //   value -2 is returned. If no answers are found, value -1 is returned.
    // @param {Number} setIndex
    // @param {Number} questionIndex
    var getAnswerIndex = function (setIndex, questionIndex) {
        var ai = [];
        var correctIndex = [];

        for (var i = 0; i < answers.length; i++) {
            if (answers[i].QuestionSetIndex === setIndex && answers[i].ChosenQuestionIndex === questionIndex) {
                correctIndex.push(i);
            }
        }
        
        if (correctIndex.length === 1) {
            return correctIndex[0];
        }
        if (correctIndex.length > 1) {
            return -2;
        }
        return -1;
    };

    // reset()
    // - Function sets AnswerService to the default state
    var reset = function () {
        answers.length = 0;
    };

    return {
        getAnswer: getAnswer,
        setAnswer: setAnswer,
        getAnswers: getAnswers,
        getAnswerCountByQuestionSetIndex: getAnswerCountByQuestionSetIndex,
        getAnswersBySetIndex: getAnswersBySetIndex,
        getAnswerIndex: getAnswerIndex,
        replaceAnswer: replaceAnswer,
        reset: reset
    };
});