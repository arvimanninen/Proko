app.controller('MonitoringOvCtrl', function MonitoringOvCtrl($scope, storageService) {
     var answerAverages = storageService.getAverages();
     var count = storageService.getAnswerCount();
     for (var i = 0; i <= answerAverages.length - 1; i++) {
         console.log(" MonitoringOvCtrl.answerAverages[" + i + "]: " + answerAverages[i]);
     }
     $scope.answerCount = count;
     $scope.pollData = answerAverages;
     $scope.pollLabels = ['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];

     $scope.pollSeries = ['Tyytyvaisyys'];
     $scope.options = {
         scales: {
             yAxes: [{
                 ticks: {
                     max: 5,
                     min: 0.8,
                     stepSize: 1
                 }
             }]
         }
     };

});

