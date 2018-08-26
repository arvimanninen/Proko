'use strict';
// DataFactory
// - For interaction with REST API
app.factory('DataFactory', function ($resource) {

    return {
        // - Get questions currently chosen in server-side (HTTP GET)
        // {Array<QuestionDTO>}
        getChosenQuestions: $resource('../api/getchosenquestions'),

        // - Get results to currently chosen questions (HTTP GET)
        // {Array<AnswerResultDTO>}
        getResultsToChosenQuestions: $resource('../api/getresultstochosenquestions'),

        // - Get answerer types currently chosen in server side (HTTP GET)
        // {Array<AnswererTypeDTO>}
        getChosenAnswererTypes: $resource('../api/getchosenanswerertypes'),

        // - Post answers and bundle extras to server-side (HTTP POST)
        // {AnswersAndBundleExtrasDTO}
        postSurveyAnswers: $resource('../api/postsurveyanswers')
    };

});



