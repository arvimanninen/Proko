app.controller('QuestionButtonSliderCtrl', function QuestionButtonSliderCtrl($scope, answerService) {
    $scope.answerOne = "Not answered";
    $scope.answerTwo = "Not answered";
    $scope.setAnswers = function () {
        answerService.setAnswer($scope.answerOne);
        answerService.setAnswer($scope.answerTwo);
    };
});