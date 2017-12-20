'use strict';
console.log("app.config started!");
app.config(['$routeProvider', '$locationProvider', 'ChartJsProvider',
    function ($routeProvider, $locationProvider, ChartJsProvider) {
        $routeProvider
            .when('/', {
                template: '<start></start>'
            })
            .when('/start', {
                template: '<start></start>'
            })
            .when('/buttons-slider', {
                template: '<buttons-slider></buttons-slider>'
            })
            .when('/buttons-smileys', {
                template: '<buttons-smileys></buttons-smileys>'
            })
            .when('/buttons-thumbs', {
                template: '<buttons-thumbs></buttons-thumbs>'
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
            .otherwise({
                template: '<error></error>'
            });

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
                    display: true,
                    position: 'bottom'
                },
                tooltips: {
                    enabled: true
                },
                hover: {
                    mode: null
                }
            }
        });  
    }
]);