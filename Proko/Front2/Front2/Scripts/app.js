﻿'use strict';

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
                chartColors: ['#FF5252', '#FF8A80'],
                responsive: false
            });
            // Configure all line charts 
            ChartJsProvider.setOptions('line', {
                showLines: true
            });
    }]);