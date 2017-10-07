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
            .when('/questionbuttonslider', {
                templateUrl: 'views/questionbuttonslider.html',
                controller: 'QuestionButtonSliderCtrl'
            })
            .when('/questionsmileys', {
                templateUrl: 'views/questionsmileys.html',
                controller: 'QuestionSmileysCtrl'
            })
            .when('/questionthumbs', {
                templateUrl: ' views/questionthumbs.html',
                controller: 'QuestionThumbsCtrl'
            })
            .when('/end', {
                templateUrl: 'views/end.html',
                controller: 'EndCtrl'
            })
            .when('/monitoring', {
                templateUrl: 'views/monitoring.html',
                controller: 'MonitoringCtrl'
            })
            .when('/monitoring-2', {
                templateUrl: 'views/monitoring-2.html',
                controller: 'Monitoring2Ctrl'
            })
            .when('/monitoringov', {
                templateUrl: 'views/monitoringov.html',
                controller: 'MonitoringOvCtrl'
            })
            .when('/monitoringbubbles', {
                templateUrl: ' views/monitoringbubbles.html',
                controller: 'MonitoringBubblesCtrl'
            })
            .when('/monitoringbubbles', {
                templateUrl: ' views/monitoringbubbles.html',
                controller: 'MonitoringBubblesCtrl'
            })
       
            //TODO: reDirectTo: *errorpage*
            .otherwise({
                redirectTo: '/start'
            });
    }]);