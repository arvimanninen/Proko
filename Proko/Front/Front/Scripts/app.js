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
            .when('/questionsafety', {
                templateUrl: 'views/questionsafety.html',
                controller: 'QuestionSafetyCtrl'
            })
            .when('/questionthumbs', {
                templateUrl: ' views/questionthumbs.html',
                controller: 'QuestionThumbsCtrl'
            })
            .when('/questionsliderthumbs', {
                templateUrl: ' views/questionsliderthumbs.html',
                controller: 'QuestionSliderThumbsCtrl'
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
            
            .otherwise({
                redirectTo: '/start'
            });
    }]);