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

    // chart 1
    $scope.labels1 = ["Viikko 40", "Viikko 41", "Viikko 42", "Viikko 43", "Viikko 43"];
    $scope.series1 = ['Series A'];
    $scope.data1 = [
        [2.2, 2.8, 2.5, 3.3, 3.6]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride1 = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options1 = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        min: 0,
                        max: 5,
                        beginAtZero: true,
                        stepSize: 1
                    }
                }
            ]
        }
    };

    // chart 2
    $scope.labels2 = ["Viikko 40", "Viikko 41", "Viikko 42", "Viikko 43", "Viikko 43"];
    $scope.series2 = ['Rakennusmiehet', 'Pomot', '3. Ryhmä'];
    $scope.data2 = [
        [2.2, 2.8, 3.5, 2.3, 3.0],
        [1.2, 3.8, 2.5, 3.3, 3.7],
        [2, 1.7, 2, 2, 1]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride2 = [{ yAxisID: 'y-axis-1' }];
    $scope.options2 = {
        legend: {
            display: true,
            position: 'bottom'
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    display: true,
                    type: 'linear',                   
                    position: 'left',
                    ticks: {
                        min: 0,
                        max: 5,
                        beginAtZero: true,
                        stepSize: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Label tähän'
                    }
                }
            ]
        }
    };
});