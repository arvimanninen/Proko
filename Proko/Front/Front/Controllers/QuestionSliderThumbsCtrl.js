'use strict';

app.controller('QuestionSliderThumbsCtrl', function QuestionSliderThumbs($scope, $location, answerService) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswers = function () {

        $location.path("/questionbuttonslinks");

        //if ($scope.answerOne === 1 || $scope.answerOne === 2 || $scope.answerOne === 3 || $scope.answerOne === 4 || $scope.answerOne === 5) {
        //    if ($scope.answerTwo === 1 || $scope.answerTwo === 2 || $scope.answerTwo === 3 || $scope.answerTwo === 4 || $scope.answerTwo === 5) {
        //        answerService.setAnswer($scope.answerOne);
        //        answerService.setAnswer($scope.answerTwo);
        //        console.log("Tiedot talletettu!");
        //        $location.path("/end");
        //    } else {
        //        alert("Syötä vastaus 2!");
        //    }
        //} else {
        //    alert("Syötä vastaus 1!");
        //}
    };
});