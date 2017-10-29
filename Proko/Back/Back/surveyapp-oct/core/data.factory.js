'use strict';

app.factory('DataFactory', function ($resource) {
    console.log("dataFactory started!");

    return {
        getChosenQuestions: $resource('../api/getchosenquestions'),
        postSurveyAnswers: $resource('../api/postsurveyanswers'),
        postTextFeedback: $resource('../api/posttextfeedback')
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



