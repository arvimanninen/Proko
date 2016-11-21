app.controller('MonitoringCtrl', function MonitoringCtrl($scope, storageService) {
    $scope.loadAnswerData = function () {
        var answerData = storageService.getAnswers();
        var answerCount = storageService.getAnswerCount();
        var answerAverage = [];
        for (var i = 0; i <= answerData.length - 1; i++) {
            answerAverage[i] = answerData[i] / answerCount;
            console.log("MonitoringCtrl.loadAnswerData().answerData[" + i + "]:" + answerData[i]);
        }
        $scope.pollData = answerAverage;
    };

    $scope.pollLabels = ['Lokakuu', 'Marraskuu', 'Joulukuu', 'Tammikuu'];
    $scope.pollSeries = ['Kuukausi'];
    $scope.pollData = [10, 15, 21, 26];
    console.log("Type of pollData: " + typeof($scope.pollData[0]));



});

