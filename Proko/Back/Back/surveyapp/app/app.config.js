'use strict';
console.log("app.config started!");
app.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<start></start>'
            })
            .when('/start', {
                template: '<start></start>'
            })
            .when('/test', {
                template: '<test></test>'
            })
            .when('/buttons-horizontal-num-5', {
                template: '<buttons-horizontal-num-5></buttons-horizontal-num-5>'
            })
            .when('/buttons-horizontal-short-blank-5', {
                template: '<buttons-horizontal-short-blank-5></buttons-horizontal-short-blank-5>'
            })
            .when('/buttons-horizontal-text-3', {
                template: '<buttons-horizontal-text-3></buttons-horizontal-text-3>'
            })
            .when('/buttons-vertical-short-text-5', {
                template: '<buttons-vertical-short-text-5></buttons-vertical-short-text-5>'
            })
            .when('/end', {
                template: '<end></end>'
            })
            /* TODO: MAKE ERROR PAGE */
            .otherwise({
                template: ''
            })
    }
]);