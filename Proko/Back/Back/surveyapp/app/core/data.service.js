'use strict';

app.service('dataService', function($resource) {
    console.log("dataService started!");
    
    var getChosenQuestions = function () {
        var cq = $resource('../api/getchosenquestions').query(function () {
            for (var i = 0; i < cq.length; i++) {
                console.log("dataService.cq.length: " + cq.length);
                console.log("dataService.cq[" + i + "].QuestionID: " + cq[i].QuestionID);
                console.log("dataService.cq[" + i + "].ChosenIndex: " + cq[i].ChosenIndex);
                console.log("dataService.cq[" + i + "].Text: " + cq[i].Text);
                console.log("dataService.cq[" + i + "].QuestionMethodValue: " + cq[i].QuestionMethodValue);
            }
        });
        return cq;
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



