app.controller('StartCtrl', function StartCtrl($scope, $location, answerService) {
    $scope.title = "start view";
    $scope.formatAndGo = function () {
        answerService.format();
        $location.path("/questionbuttonslider");
    };
});