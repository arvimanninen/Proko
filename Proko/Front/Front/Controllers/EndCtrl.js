app.controller('EndCtrl', function EndCtrl($scope, $location, answerService, storageService) {
    $scope.setNewAveragesAndGo = function () {
        storageService.setAverages(answerService.getAllAnswers());
        $location.path("/monitoringov");
    };
});