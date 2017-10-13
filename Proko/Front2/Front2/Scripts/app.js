'use strict';

var app = angular.module('app', ['ngRoute', 'chart.js']);


app.config(['$routeProvider', '$locationProvider', 'ChartJsProvider',
    function ($routeProvider, $locationProvider, ChartJsProvider) {
        $routeProvider
            .when('/start', {
                templateUrl: 'Views/start.html',
                controller: 'startCtrl'
            })
            .when('/questionButtonSlider', {
                templateUrl: 'Views/questionButtonSlider.html',
                controller: 'questionButtonSliderCtrl'
            })
            .when('/questionSmileys', {
                templateUrl: 'Views/questionSmileys.html',
                controller: 'questionSmileysCtrl'
            })
            .when('/questionThumbs', {
                templateUrl: 'Views/questionThumbs.html',
                controller: 'questionThumbsCtrl'
            })
            .when('/end', {
                templateUrl: 'Views/end.html',
                controller: 'endCtrl'
            })
            .when('/results', {
                templateUrl: 'Views/results.html',
                controller: 'resultsCtrl'
            })          

            //TODO: reDirectTo: *errorpage*
            .otherwise({
                redirectTo: '/start'
            });

            // Configure all charts 
            ChartJsProvider.setOptions({
                chartColors: ['#34b754', '#b7b734', '#b73434', '#9634b7', '#3475b7'],
                responsive: false
            });
            // Configure all line charts 
            ChartJsProvider.setOptions('line', {
                showLines: true
            });
    }]);