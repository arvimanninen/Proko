app.controller('Monitoring2Ctrl', function Monitoring2Ctrl($scope, storageService) {
    $scope.loadAnswerData = function () {
        var answerData = storageService.getAnswers();
        var answerCount = storageService.getAnswerCount();
        for (var i = 0; i <= answerData.length; i++) {
            answerData[i] = answerData[i] / answerCount;
            console.log("MonitoringCtrl.loadAnswerData().answerData[" + i + "]:" + answerData[i]);
        }
        $scope.pollData = answerData;
    };

    $scope.pollLabels = ['Sähkömiehet', 'Putkimiehet', 'Rakennusmiehet', 'Raskaiden ajoneuvojen kuljettajat'];
    $scope.pollSeries = ['Series A'];
    $scope.pollData = [1, 2, 3, 5];
    console.log("Type of pollData: " + typeof ($scope.pollData[0]));



});

