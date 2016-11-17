'use strict';

var app = angular.module('app', ["ngRoute"]);

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
            .when('/questionbuttonslider', {
                templateUrl: 'views/questionbuttonslider.html',
                controller: 'QuestionButtonSliderCtrl'
            })
            .when('/end', {
                templateUrl: 'views/end.html',
                controller: ''
            })
            .when('/barchart', {
                templateUrl: 'views/barchart.html',
                controller: 'BarChartCtrl'
            })
            .otherwise({
                redirectTo: '/start'
            });
    }]);