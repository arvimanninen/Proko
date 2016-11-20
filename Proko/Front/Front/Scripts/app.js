'use strict';

var app = angular.module('app', ["ngRoute", "chart.js"]);


app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/start', {
                templateUrl: 'views/start.html',
                controller: 'StartCtrl'
            })
            .when('/answerertype', {
                templateUrl: 'views/answerertype.html',
                controller: 'AnswererTypeCtrl'
            })
            .when('/questionbuttons', {
                templateUrl: 'views/questionbuttons.html',
                controller: 'QuestionButtonsCtrl'
            })
            .when('/questionbuttonslider', {
                templateUrl: 'views/questionbuttonslider.html',
                controller: 'QuestionButtonSliderCtrl'
            })
            .when('/questiondragdrop', {
                templateUrl: 'views/questiondragdrop.html',
                controller: 'QuestionDragDropCtrl'
            })
            .when('/end', {
                templateUrl: 'views/end.html',
                controller: ''
            })
            .when('/monitoring', {
                templateUrl: 'views/monitoring.html',
                controller: 'MonitoringCtrl'
            })
            .when('/barchart', {
                templateUrl: 'views/barchart.html',
                controller: 'BarChartCtrl'
            })
            .otherwise({
                redirectTo: '/start'
            });
    }]);