var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/start', {
                templateUrl: 'views/start.html',
                controller: 'StartCtrl'
            })
            .when('/questionbuttons', {
                templateUrl: 'views/questionbuttons.html',
                controller: 'QuestionButtonsCtrl'
            })
            .when('/questionslider', {
                templateUrl: 'views/questionslider.html',
                controller: 'QuestionSliderCtrl'
            })
            .when('/bubblecharttest', {
                templateUrl: 'views/bubblecharttest.html',
                controller: 'QuestionSliderCtrl'
            })
            .otherwise({
                redirectTo: '/start'
            });
    }]);