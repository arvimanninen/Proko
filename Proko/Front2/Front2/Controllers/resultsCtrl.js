'use strict';

app.controller('resultsCtrl', function resultsCtrl($scope, $location) {

    //modal
    $(function () {
        var counterUsed = false;

        var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
        $('a[data-modal-id]').click(function (e) {

            if (counterUsed === false) {

                e.preventDefault();
                $("body").append(appendthis);
                $(".modal-overlay").fadeTo(500, 0.7);
                //$(".js-modalbox").fadeIn(500);
                var modalBox = $(this).attr('data-modal-id');
                $('#' + modalBox).fadeIn($(this).data());
            }
        });

        $(".js-modal-close, .modal-overlay").click(function () {
            $(".modal-box, .modal-overlay").fadeOut(500, function () {
                $(".modal-overlay").remove();
            });
        });

        $(".js-modal-use, .modal-overlay").click(function () {
            $(".modal-box, .modal-overlay").fadeOut(500, function () {
                $(".modal-overlay").remove();
                $(".popup-div a").html("Kuponki lunastettu")
                    .removeClass("btn-success").addClass("disabled");

                counterUsed = true;
                console.log(counterUsed);

                $("#popup").remove();
            });
        });

        $(window).resize(function () {
            $(".modal-box").css({
                top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
                left: ($(window).width() - $(".modal-box").outerWidth()) / 2
            });
        });

        $(window).resize();

    }); //modal ends


    $scope.toStart = function () {
        $location.path("/end");
    };

    $scope.toStart = function () {
        $location.path("/start");
    };

    $scope.answerCount = 20;
    $scope.pollData = [
        [65, 59, 80],
        [28, 48, 40]
    ];
    $scope.pollLabels = ['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];
    $scope.pollSeries = ['Tyytyvaisyys', 'Toinen title'];
    $scope.options1 = {
        scales: {
            yAxes: [{
                ticks: {
                    max: 5,
                    min: 0,
                    stepSize: 1
                }
            }]
        }
    };

});