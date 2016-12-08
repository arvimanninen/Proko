app.controller('MonitoringBubblesCtrl', function MonitoringBubblesCtrl($scope, storageService, safetyAnswerService) {
    var safetyFirstAnswers = safetyAnswerService.getAnswerCounts(1);
    var safetySecondAnswers = safetyAnswerService.getAnswerCounts(2);
    var averages = storageService.getAverages();
    $scope.answerCount = storageService.getAnswerCount();
    // kolme palloa
    $scope.pollData = [
      [{
          x: safetyFirstAnswers[0] + 10,
          y: safetySecondAnswers[0] + 18,
          r: 15
      }],
      [{
          x: safetyFirstAnswers[1] + 12,
          y: safetySecondAnswers[1] + 12,
          r: 32
      }],
      [{
          x: safetyFirstAnswers[2] + 14,
          y: safetySecondAnswers[2] + 14,
          r: 31
      }],
      [{
          x: safetyFirstAnswers[3]  + 16,
          y: safetySecondAnswers[3] + 16,
          r: 56
      }],
      [{
          x: safetyFirstAnswers[4] + 18,
          y: safetySecondAnswers[4] + 18,
          r: 40
      }]
    ];
        // safetyFirstAnswers, safetySecondAnswers]
        
    $scope.pollLabels = ['Työturvallisuussäädöksien noudattaminen', 'Aikataulutus (muut)'];

});

