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
            .when('/questionRadioButton', {
                templateUrl: 'Views/questionRadioButton.html',
                controller: 'questionRadioButtonCtrl'
            })
            .when('/questionCheckbox', {
                templateUrl: 'Views/questionCheckbox.html',
                controller: 'questionCheckboxCtrl'
            })
            .when('/questionSmileys', {
                templateUrl: 'Views/questionSmileys.html',
                controller: 'questionSmileysCtrl'
            })
            .when('/questionThumbs', {
                templateUrl: 'Views/questionThumbs.html',
                controller: 'questionThumbsCtrl'
            })
            .when('/questionTextarea', {
                templateUrl: 'Views/questionTextarea.html',
                controller: 'questionTextareaCtrl'
            })
            .when('/questionRangeSlider', {
                templateUrl: 'Views/questionRangeSlider.html',
                controller: 'questionRangeSliderCtrl'
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
                chartColors: ['#8ed791', '#d7d78e', '#d78e8e', '#c58ed7', '#8eb3d7'],
                responsive: false
            });
            // Configure all line charts 
            //ChartJsProvider.setOptions('bar', {
            //    showLines: true
            //});
    }]);