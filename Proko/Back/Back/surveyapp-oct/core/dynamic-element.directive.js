// 'use strict';

// SOURCE: https://stackoverflow.com/questions/27574333/dynamic-tag-generation-in-angular
app.directive('dynamicElement', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            components: '&components'
        },
        link: function ($scope, $element) {
            var components = angular.isFunction($scope.components) ? $scope.components() : [];
            var domElements = [];
            angular.forEach(components, function (c) {
                var domElement = document.createElement(c);
                $compile(domElement)($scope);
                domElements.push(domElement);
            });
            $element.replaceWith(domElements);
        }
    };
});