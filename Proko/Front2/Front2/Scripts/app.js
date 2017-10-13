'use strict';

var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
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
            //TODO: reDirectTo: *errorpage*
            .otherwise({
                redirectTo: '/start'
            });
    }]);