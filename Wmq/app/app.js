'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/about', {
                template: '<about></about>'
            })
            .otherwise({
                redirectTo: '/about'
            });
    }
]);


