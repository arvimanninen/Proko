'use strict';

app.service('DataService', function($resource, questionService) {
    console.log("dataService started!");
    var getChosenQuestions = function () {
        var cq = $resource('../api/getchosenquestions').query(function () {
            questionService.setQuestions(cq);
        });
    };

    var postSurveyAnswers = function (newAnswers) {
        var psa = $resource('../api/postsurveyanswers').save(newAnswers,
        function () {
            console.log("postSurveyAnswer done!");
            console.log("psa: " + psa);
        });
    };


    return {
        getChosenQuestions: getChosenQuestions,
        postSurveyAnswers: postSurveyAnswers
    };

});

    /*
    var getChosenQuestions = function() {
        console.log("dataService.getChosenQuestion() started");
        var chosen = ChosenQuestions.query();
        console.log("cg.length: " + chosen.length)
        for (var i = 0; i < chosen.length; i++) {
            console.log("*#*#*#*#*#");
            console.log("chosen[" + i + "].QuestionID: " + chosen[i].QuestionID);
            console.log("chosen[" + i + "].ChosenIndex: " + chosen[i].ChosenIndex);
            console.log("chosen[" + i + "].Text: " + chosen[i].Text);
            console.log("chosen[" + i + "].QuestionMethodValue: " + chosen[i].QuestionMethodValue);
        }
    
        if(cq.length > 0) {
            return ChosenQuestions;
        } else {
            console.log("Fail in get");
            alert("Fail in get!");
        }*/



