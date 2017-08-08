'use strict';

app.controller('TestCtrl', function TestCtrl($location, dataService) {
    console.log("TestCtrl started");
    var chosenQuestions = dataService.getChosenQuestions();


    var AnswerDTO = function (nQuestionID, nValue) {
        this.QuestionID = nQuestionID;
        this.Value = nValue;
    };
    //DAADAA
    var na = [new AnswerDTO(2, 4), new AnswerDTO(1, 5)];

    dataService.postSurveyAnswers(na);

    // console.log("chosenQuestions type: " + typeof chosenQuestions);
    /*for (var i = 0; i < chosenQuestions.length; i++) {
        console.log("*#*#*#*#*#");
        console.log("chosenQuestions[" + i + "].QuestionID: " + chosenQuestions[i].QuestionID);
        console.log("chosenQuestions[" + i + "].ChosenIndex: " + chosenQuestions[i].ChosenIndex);
        console.log("chosenQuestions[" + i + "].Text: " + chosenQuestions[i].Text);
        console.log("chosenQuestions[" + i + "].QuestionMethodValue: " + chosenQuestion[i].QuestionMethodValue);
    }*/
    
});