'use strict';
// config
// - Configuration for "app" Angular application module
app.config(['$routeProvider', '$locationProvider', 'ChartJsProvider',
    function ($routeProvider, $locationProvider, ChartJsProvider) {
        // - Routing
        $routeProvider
            .when('/', {
                template: '<start></start>'
            })
            .when('/start', {
                template: '<start></start>'
            })
            .when('/buttons-slider', {
                template: '<qm-buttons-slider></qm-buttons-slider>'
            })
            .when('/buttons-smileys', {
                template: '<qm-buttons-smileys></qm-buttons-smileys>'
            })
            .when('/buttons-thumbs', {
                template: '<qm-buttons-thumbs></qm-buttons-thumbs>'
            })
            .when('/text-area', {
                template: '<text-area></text-area>'
            })
            .when('/end', {
                template: '<end></end>'
            })
            .when('/results', {
                template: '<results></results>'
            })
            .when('/answerer-buttons-radio', {
                template: '<answerer-buttons-radio></answerer-buttons-radio>'
            })
            .otherwise({
                template: '<error></error>'
            });

        // Angular-Chart.js/Chart.js options
        // - Global options for charts used in application  
        ChartJsProvider.setOptions({
            global: {
                colors: ['#8ed791', '#d7d78e', '#d78e8e', '#c58ed7', '#8eb3d7'],
                defaultFontColor: '#333333',
                defaultFontFamily: 'Roboto',
                defaultFontSize: 14,
                elements: {
                    line: {
                        fill: false
                    }
                },
                legend: {
                    display: false,
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
    }
]);