app.controller('EndCtrl', function EndCtrl($scope, answerService, storageService) {
    $scope.allAnswersToStorage = function () {
        storageService.setAnswers(answerService.getAllAnswers());
    }
});