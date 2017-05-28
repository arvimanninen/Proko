'use strict';
app.controller('QuestionThumbsCtrl', function QuestionThumbsCtrl($scope, $location, answerService, safetyAnswerService) {
    $scope.questionOne = "Asteikolla 1-5, minkä arvosanan antaisit työmaalla toteutetuista työturvallisuusratkaisuista?";
    $scope.questionTwo = "muihin sidosryhmiin?";
    $scope.setAnswers = function () {

        $location.path("/questionsliderthumbs");

        //if ($scope.answerOne === 1 || $scope.answerOne === 2 || $scope.answerOne === 3 || $scope.answerOne === 4 || $scope.answerOne === 5) {
        //    if ($scope.answerTwo === 1 || $scope.answerTwo === 2 || $scope.answerTwo === 3 || $scope.answerTwo === 4 || $scope.answerTwo === 5) {
        //        safetyAnswerService.setAnswer(1, $scope.answerOne);
        //        safetyAnswerService.setAnswer(2, $scope.answerTwo);
        //        answerService.setAnswer($scope.answerOne);
        //        answerService.setAnswer($scope.answerTwo);
        //        console.log("Tiedot talletettu!");
        //        $location.path("/questionthumbs");
        //    } else {
        //        alert("Syötä vastaus toiseen kysymykseen!");
        //    }
        //} else {
        //    alert("Syötä vastaus ensimmäiseen kysymykseen!");
        //}

    };
});