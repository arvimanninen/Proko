'use strict';

app.controller('questionnaireEndCtrl', function questionnaireEndCtrl($scope, $location) {

    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();
        var navbtnHeight = wrapperHeight - containerHeight;
        if (navbtnHeight < 64) {
            navbtnHeight = 52;
        } else {
            navbtnHeight = navbtnHeight - 12;
        }
        console.log(navbtnHeight);
        $(".nav-btn-div").css("margin-top", navbtnHeight);
    });

    $scope.end = function () {
        $location.path("/questionnaireResults");
    };

});