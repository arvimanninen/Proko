'use strict';

var app = angular.module('app', ["ngRoute", "chart.js", angularDragula(angular)]);


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
            .when('/questiondragdropsmileys', {
                templateUrl: 'views/questiondragdropsmileys.html',
                controller: 'QuestionDragDropSmileysCtrl'
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
            .otherwise({
                redirectTo: '/start'
            });
    }]);