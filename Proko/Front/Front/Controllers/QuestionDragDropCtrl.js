'use strict';
app.controller('QuestionDragDropCtrl', function QuestionDragDropCtrl($scope, $location, answerService) {
    $scope.setAnswers = function () {
        $location.path("/end");
    }        
});