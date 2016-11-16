app.controller('QuestionButtonsCtrl', function QuestionButtonsCtrl($scope, answerService) {
    $scope.question = "Miten kommunikaatio on mielestäsi toiminut suhteessa -";
    $scope.subQuestionOne = "tilaajaan?";
    $scope.subQuestionTwo = "muihin sidosryhmiin?";
    $scope.firstAnswer = function () { return answerService.getAnswer(0) };
    $scope.secondAnswer = function () { return answerService.getAnswer(1) };
});