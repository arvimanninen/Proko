﻿app.controller('QuestionDragDropSmileysCtrl', function QuestionDragDropSmileysCtrl($scope, $location, dragulaService) {
    dragulaService.options($scope, 'smiley-bag', {
        copy: true
    });

    $scope.setAnswers = function () {
        $location.path("/questionsafety");
    };
});