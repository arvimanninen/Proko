' use strict';
app.controller('BarChartCtrl', function BarChartCtrl($scope, $location, answerService) {
    $scope.testLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.testSeries = ['Series A', 'Series B'];
    $scope.testData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
});