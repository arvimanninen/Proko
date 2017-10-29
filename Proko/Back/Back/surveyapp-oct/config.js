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
            })
    }
]);