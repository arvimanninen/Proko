app.controller('MonitoringCtrl', function MonitoringCtrl($scope) {
    $scope.pollLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.pollSeries = ['Series A', 'Series B'];
    $scope.pollData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
});