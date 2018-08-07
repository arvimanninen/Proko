app.controller('MonitoringOvCtrl', function MonitoringOvCtrl($scope, storageService) {
     var answerAverages = storageService.getAverages();
     var count = storageService.getAnswerCount();
     for (var i = 0; i <= answerAverages.length - 1; i++) {
         console.log(" MonitoringOvCtrl.answerAverages[" + i + "]: " + answerAverages[i]);
     }
     $scope.answerCount = count;
     $scope.pollData1 = answerAverages;
     $scope.pollLabels1 = ['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];
     $scope.pollSeries1 = ['Tyytyvaisyys'];
     $scope.options1 = {
         scales: {
             yAxes: [{
                 ticks: {
                     max: 5,
                     min: 0,
                     stepSize: 1
                 }
             }]
         }
     };

     $scope.pollData2 = answerAverages;
     $scope.pollLabels2 = ['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];
     $scope.pollSeries2 = ['Tyytyvaisyys'];
     $scope.options2 = {
         scales: {
             yAxes: [{
                 ticks: {
                     max: 5,
                     min: 0,
                     stepSize: 1
                 }
             }]
         }
     };

     $scope.pollData3 = answerAverages;
     $scope.pollLabels3 = ['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];
     $scope.pollSeries3 = ['Tyytyvaisyys'];
     $scope.options3 = {
         scales: {
             yAxes: [{
                 ticks: {
                     max: 5,
                     min: 0,
                     stepSize: 1
                 }
             }]
         }
     };

});

