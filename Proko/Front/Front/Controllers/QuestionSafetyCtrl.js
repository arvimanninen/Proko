'use strict';
app.controller('QuestionSafetyCtrl', function QuestionSafetyCtrl($scope, $location, answerService) {
    $scope.questionOne = "Asteikolla 1-5, minkä arvosanan antaisit työmaalla toteutetuista työturvallisuusratkaisuista?";
    $scope.questionTwo = "muihin sidosryhmiin?";
    $scope.setAnswers = function () {
        if ($scope.answerOne === 1 || $scope.answerOne === 2 || $scope.answerOne === 3 || $scope.answerOne === 4 || $scope.answerOne === 5) {
            if ($scope.answerTwo === 1 || $scope.answerTwo === 2 || $scope.answerTwo === 3 || $scope.answerTwo === 4 || $scope.answerTwo === 5) {
                answerService.setAnswer($scope.answerOne);
                answerService.setAnswer($scope.answerTwo);
                console.log("Tiedot talletettu!");
                $location.path("/questionbuttonslider");
            } else {
                alert("Syötä vastaus ensimmäiseen kysymykseen!");
            }
        } else {
            alert("Syötä vastaus toiseen kysymykseen!");
        }
    };
});