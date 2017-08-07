'use strict';

app.controller('TestCtrl', function TestCtrl(dataService) {
    var chosenQuestions = dataService.getChosenQuestions();
    for (var i = 0; i < chosenQuestions.length; i++) {
        console.log("*#*#*#*#*#");
        console.log("chosenQuestions[" + i + "].QuestionID: " + chosenQuestions[i].QuestionID);
        console.log("chosenQuestions[" + i + "].ChosenIndex: " + chosenQuestions[i].ChosenIndex);
        console.log("chosenQuestions[" + i + "].Text: " + chosenQuestions[i].Text);
        console.log("chosenQuestions[" + i + "].QuestionMethodValue: " + data[i].QuestionMethodValue);
    }
});