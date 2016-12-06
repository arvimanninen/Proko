'use strict';
app.controller('QuestionDragDropCtrl', function QuestionDragDropCtrl($scope, $location, answerService, dragulaService) {
    $scope.setAnswers = function () {

        //var parent_1 = $("#dr-1").parent().attr("id").val();
        //console.log(parent_1);

        $location.path("/questiondragdropsmileys");

    };
    
});