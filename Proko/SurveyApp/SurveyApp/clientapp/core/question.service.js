'use strict';
// QuestionService
// - Client-side storage for questions used in app.
app.service('QuestionService', function () {
    var questions = [];
    /*
    QuestionDTO - updated 2018-02-11
                          {
                              QuestionID = chosenquestion.QuestionID,
                              QuestionMethodID = questionmethod.QuestionMethodID,
                              QuestionSetIndex = chosenquestion.QuestionSet.ChosenIndex,
                              QuestionSetTitle = chosenquestion.QuestionSet.Title,
                              ChosenQuestionIndex = chosenquestion.ChosenIndex,
                              QuestionText = chosenquestion.Question.Text,
                              QuestionMethodValue = questionmethod.Value
                          };
    */

    // getQuestion()
    // - Function returns question from QuestionService.questions[],
    //   based on question's index in array. If index-parameter is larger than
    //   QuestionService.questions[] length, function returns -1.
    // @param {Number} index
    // @return {QuestionDTO} questions[index] OR @return {Number} -1
    var getQuestion = function (index) {
        if (index < questions.length) {
            return questions[index];
        } else {
            return -1;
        }
    };

    // getQuestions()
    // - Function returns array with all questions in QuestionService.questions[]
    // @return {Array<QuestionDTO>} questions
    var getQuestions = function () {
        return questions;
    };

    // getQuestionsBySetIndex()
    // - Function gets question set index as a parameter, and returns
    //   array with all questions that have the same question set index.
    // @param {Number} index
    // @return {Array<QuestionDTO>} qs  
    var getQuestionsBySetIndex = function (index) {
        var qs = [];
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex === index) {
                qs.push(questions[i]);
            }
        }
        return qs;
    };

    // getQuestionMethodValueBySetIndex()
    // - Function gets question set index as a parameter, finds first question
    //   that has the same question set index, and returns its question method value.
    // @param {Number} index
    // @return {Number} questions[i].QuestionMethodValue
    var getQuestionMethodValueBySetIndex = function (index) {
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex === index) {
                return questions[i].QuestionMethodValue;
            }
        }
    };

    // getQuestionCountBySetIndex()
    // - Function gets question set index (index) as a parameter, calculates
    //   the number of questions which QuestionSetIndex === index,
    //   and returns the value of the calculation.
    // @param {Number} index
    // @return {Number} qCount
    var getQuestionCountBySetIndex = function (index) {
        var qCount = 0;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex === index) {
                qCount++;
            }
        }
        return qCount;
    };

    // getQuestionSetCount()
    // - Function calculates how many different question set indexes
    //   (questions[].QuestionSetIndex) there are in questions[],
    //   and returns the value of the calculation.
    //   @return {Number} sc
    var getQuestionSetCount = function () {
        var sc = 0;
        var qsi;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].QuestionSetIndex !== qsi) {
                qsi = questions[i].QuestionSetIndex;
                sc++;
            }
        }
        return sc;
    };

    // setQuestions()
    // - Function gets array of QuestionDTO-objects as a parameter,
    //   and adds them to QuestionService.questions[] in the same
    //   order where they are in the qs- parameter array.
    // - No client-side object constructor is used at the moment,
    //   so function assumes that the objects are in correct format.
    // @param {Array<QuestionDTO>} qs
    var setQuestions = function (qs) {
        //TODO: CHECKUPS
        console.log("questionService.setQuestions started");
        for (var i = 0; i < qs.length; i++) {
            questions.push(qs[i]);
            console.log("questionService.questions.length: " + questions.length);
        } 
    };

    // reset()
    // - Function sets QuestionService to the default state.
    var reset = function () {
        questions.length = 0;
    };

    return {
        getQuestion: getQuestion,
        getQuestions: getQuestions,
        getQuestionCountBySetIndex: getQuestionCountBySetIndex,
        getQuestionsBySetIndex: getQuestionsBySetIndex,
        getQuestionMethodValueBySetIndex: getQuestionMethodValueBySetIndex,
        getQuestionSetCount: getQuestionSetCount,
        setQuestions: setQuestions,
        reset: reset
    };

});