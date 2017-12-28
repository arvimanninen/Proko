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
            .when('/question1', {
                templateUrl: 'Views/question1.html',
                controller: 'question1Ctrl'
            })
            .when('/question2', {
                templateUrl: 'Views/question2.html',
                controller: 'question2Ctrl'
            })
            .when('/question3', {
                templateUrl: 'Views/question3.html',
                controller: 'question3Ctrl'
            })
            .when('/questionnaireResults', {
                templateUrl: 'Views/questionnaireResults.html',
                controller: 'questionnaireResultsCtrl'
            }) 

            //TODO: reDirectTo: *errorpage*
            .otherwise({
                redirectTo: '/start'
            });

            ChartJsProvider.setOptions({
                global: {
                    //colors: ['#8ed791', '#d7d78e', '#d78e8e', '#c58ed7', '#8eb3d7'],
                    defaultFontColor: '#333333',
                    defaultFontFamily: 'Roboto',
                    defaultFontSize: 14,
                    elements: {
                        line: {
                            fill: false
                        }
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltips: {
                        enabled: false
                    },
                    hover: {
                        mode: null
                    }
                }
            });

    }]);