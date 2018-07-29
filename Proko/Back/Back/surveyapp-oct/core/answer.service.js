'use strict';

app.service('AnswerService', function () {
    var answers = [];
    
    // TODO: UPDATE AnswerDTO
    /*
    public class AnswerDTO
    {
        public int Value { get; set; }
        public int QuestionSetIndex { get; set; }
        public int ChosenQuestionIndex { get; set; }
        public int QuestionID { get; set; }
        public int QuestionMethodID { get; set; }
        // public string AnswererTypeName {get; set; }
        
    }
    public class AnswerBundleExtrasDTO
    {
        public int AnswererTypeID { get; set; }
        public string TextFeedback { get; set; }
    }
    public class AnswersAndBundleExtrasDTO
    {
        public List<AnswerDTO> AnswerDtos { get; set; }
        public AnswerBundleExtrasDTO AnswerBundleExtrasDto { get; set; }
    }

    */
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

    var getAnswer = function (index) {
        return answers[index];
    };

    var getAnswers = function () {
        return answers;
    };

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

    var getAnswersBySetIndex = function (setIndex) {
        var ans = [];
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].QuestionSetIndex === setIndex) {
                ans.push(answers[i]);
            }
        }
        return ans;
    };

    var setAnswer = function (nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID) {
        var sa = new AnswerDTO(nValue, nQuestionSetIndex, nChosenQuestionIndex, nQuestionID, nQuestionMethodID);
        answers.push(sa);
    };

    var replaceAnswer = function (answerIndex, nValue, questionId, questionMethodId) {
        if(answers[answerIndex].QuestionID === questionId && answers[answerIndex].QuestionMethodID === questionMethodId) {
            answers[answerIndex].Value = nValue;
        } else {
            alert("Kysymyksen korvaaminen ei onnistunut, tuntematon virhe!");
        }
    };

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