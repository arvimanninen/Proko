app.controller('startCtrl', function StartCtrl($scope, $location) {
    $scope.title = "start view";
    $scope.formatAndGo = function () {
        //answerService.format();
        $location.path("/questionButtonSlider");
    };
});