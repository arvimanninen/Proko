app.controller('QuestionDragDropSmileysCtrl', function QuestionDragDropSmileysCtrl($scope, $location, answerService, dragulaService) {
    dragulaService.options($scope, 'smiley-bag', {
        copy: true
    });

});