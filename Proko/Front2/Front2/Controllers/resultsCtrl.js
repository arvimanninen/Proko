'use strict';

app.controller('resultsCtrl', function resultsCtrl($scope, $location) {

    //modal
    $(function () {
        var counterUsed = false;

        var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
        $("a[data-modal-id]").click(function (e) {

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
                $(".js-open-modal").html("Kuponki käytetty")
                    .removeClass("button-tertiary").addClass("disabled");

                counterUsed = true;
                console.log("counter asetettu");

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

    // data 1
    $scope.pollData1 = [
        [5, 8, 12, 14, 9]
    ];
    $scope.pollLabels1 = ['Eri mieltä', '', '', '', 'Samaa mieltä'];
    //$scope.pollSeries = ['Tyytyvaisyys'];

    // data 2
    $scope.pollData2 = [
        [5, 10, 12, 9, 8]
    ];
    $scope.pollLabels2 = ['Eri mieltä', '', '', '', 'Samaa mieltä'];

    $scope.pollLabels3 = ['thumb down', 'neutral', 'thumb up'];

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