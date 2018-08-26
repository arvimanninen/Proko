'use strict';
// DataFactory
// - For interaction with REST API
app.factory('DataFactory', function ($resource) {

    return {
        // get questions currently chosen in server-side (HTTP GET)
        // {Array<QuestionDTO>}
        getChosenQuestions: $resource('../api/getchosenquestions'),

        // get results to currently chosen questions (HTTP GET)
        // {Array<AnswerResultDTO>}
        getResultsToChosenQuestions: $resource('../api/getresultstochosenquestions'),

        // get answerer types currently chosen in server side (HTTP GET)
        // {Array<AnswererTypeDTO>}
        getChosenAnswererTypes: $resource('../api/getchosenanswerertypes'),

        // post answers and bundle extras to server-side (HTTP POST)
        // {AnswersAndBundleExtrasDTO}
        postSurveyAnswers: $resource('../api/postsurveyanswers')
    };

});



