'use strict';

app.controller('TestCtrl', function TestCtrl(DataFactory, QuestionService, AnswerService) {
    console.log("TestCtrl started");
    // GET CHOSEN QUESTIONS FROM DATABASE AND SET THEM TO QUESTIONSERVICE
    var gcq = DataFactory.getChosenQuestions;
    console.log("DataFactory.getChosenQuestions (gcq)" + gcq);
    
    var rawQs = DataFactory.getChosenQuestions.query(function () {
        console.log("All get!");
        console.log("rawQs.length" + rawQs.length);
        for (var i = 0; i < rawQs.length; i++) {
            console.log("rawQs[" + i + "].QuestionID: " + rawQs[i].QuestionID);
            console.log("rawQs[" + i + "].ChosenIndex: " + rawQs[i].ChosenIndex);
            console.log("rawQs[" + i + "].Text: " + rawQs[i].Text);
            console.log("rawQs[" + i + "].QuestionMethodValue: " + rawQs[i].QuestionMethodValue);
        }
        QuestionService.setQuestions(rawQs);
        var qs = QuestionService.getQuestions();
        for (var q = 0; q < qs.length; q++) {
            console.log("qs[" + q + "].QuestionID: " + qs[q].QuestionID);
            console.log("qs[" + q + "].ChosenIndex: " + qs[q].ChosenIndex);
            console.log("qs[" + q + "].Text: " + qs[q].Text);
            console.log("qs[" + q + "].QuestionMethodValue: " + qs[q].QuestionMethodValue);
            AnswerService.setAnswer(qs[q].QuestionID, 3);
        }
        var ans = AnswerService.getAnswers();
        for (var c = 0; c < ans.length; c++) {
            console.log("ans[" + c + "].QuestionID: " + ans[c].QuestionID);
            console.log("ans[" + c + "].Value: " + ans[c].Value);
        }
        var postAnswers = DataFactory.postSurveyAnswers.save(ans, function () {
            console.log("Survey answers posted to API");
        });

    });
    


    /*var rawQs = DataFactory.getChosenQuestions.query(function () {
        console.log("All get!");
        console.log("rawQs.length" + rawQs.length);
        for(var i = 0; i < rawQs.length; i ++) {
            console.log("rawQs[" + i + "].QuestionID: " + rawQs[i].QuestionID);
            console.log("rawQs[" + i + "].ChosenIndex: " + rawQs[i].ChosenIndex);
            console.log("rawQs[" + i + "].Text: " + rawQs[i].Text);
            console.log("rawQs[" + i + "].QuestionMethodValue: " + rawQs[i].QuestionMethodValue)
        }
        

    });*/

    



    
    

    
    // var qs = questionService.getQuestions();
    /*
    for (var i = 0; i < qs.length; i++) {
        console.log("qs[" + i + "].QuestionID: " + qs[i].QuestionID);
        console.log("qs[" + i + "].Value: " + qs[i].Value);
        // SET ANSWERS TO ALL QUESTIONS IN questionService, VALUE = 3
        //answerService.setAnswer(qs[i].QuestionID, 3);   
    }
    */
    /*
    var ans = answerService.getAnswers();
    console.log("ans.length: " + ans.length);
    for (var ii = 0; ii < ans.length; ii++) {
        console.log("ans[" + ii + "].QuestionID: " + ans[ii].QuestionID);
        console.log("ans[" + ii + "].Value: " + ans[ii].Value);
    }
   */

    

    
    //DAADAA
    

    // console.log("chosenQuestions type: " + typeof chosenQuestions);
    /*for (var i = 0; i < chosenQuestions.length; i++) {
        console.log("*#*#*#*#*#");
        console.log("chosenQuestions[" + i + "].QuestionID: " + chosenQuestions[i].QuestionID);
        console.log("chosenQuestions[" + i + "].ChosenIndex: " + chosenQuestions[i].ChosenIndex);
        console.log("chosenQuestions[" + i + "].Text: " + chosenQuestions[i].Text);
        console.log("chosenQuestions[" + i + "].QuestionMethodValue: " + chosenQuestion[i].QuestionMethodValue);
    }*/
    
});