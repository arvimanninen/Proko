'use strict';
app.controller('QuestionDragDropCtrl', function QuestionDragDropCtrl($scope, $location, answerService, dragulaService) {
    $scope.setAnswers = function () {

        //var parent_1 = $("#dr-1").parent().attr("id").val();
        //console.log(parent_1);

        var loc_1 = document.getElementById("dr-1").parentNode.id;
        var loc_2 = document.getElementById("dr-2").parentNode.id;
        var loc_3 = document.getElementById("dr-3").parentNode.id;
        var loc_4 = document.getElementById("dr-4").parentNode.id;
        var loc_5 = document.getElementById("dr-5").parentNode.id;
        var loc_6 = document.getElementById("dr-6").parentNode.id;

        //console.log(loc_1, loc_2, loc_3, loc_4, loc_5, loc_6);

        if(loc_1 !== "start-bag" && loc_2 !== "start-bag" && loc_3 !== "start-bag" && loc_4 !== "start-bag" && loc_5 !== "start-bag" && loc_6 !== "start-bag") {
            console.log("mikään väittämä ei ole enää aloituspussissa!");

            $location.path("/questiondragdropsmileys");
        } else {
            alert("kaikki väittämiä ei ole sijoitettu vastauslaatikoihin! Ole hyvä ja sijoita kaikki väittämät johonkin vastauslaatikkoon.");
        }

        

    };
    
});