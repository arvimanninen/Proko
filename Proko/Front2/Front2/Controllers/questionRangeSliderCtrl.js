'use strict';

app.controller('questionRangeSliderCtrl', function questionRangeSliderCtrl($scope, $location) {

    $(document).ready(function () {
        var wrapperHeight = $("#wrapper").height();
        var containerHeight = $(".container").height();
        var navbtnHeight = wrapperHeight - containerHeight;
        console.log(navbtnHeight);
        if (navbtnHeight < 64) {
            navbtnHeight = 52;
        } else {
            navbtnHeight = navbtnHeight - 12;
        }
        console.log(navbtnHeight);
        $(".nav-btn-div").css("margin-top", navbtnHeight);
    });

    //$(window).resize(function () {
    //    var wrapperHeight = $("#wrapper").height();
    //    var containerHeight = $(".container").height();
    //    var navbtnHeight = wrapperHeight - containerHeight;
    //    console.log(navbtnHeight);
    //    $(".nav-btn-div").css("margin-top", navbtnHeight);
    //});

    // slider 1
    $("#rangeslider1 input[type='range']").rangeslider({
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        verticalClass: 'rangeslider--vertical',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',

        // Callback function
        onInit: function () {},

        // Callback function
        onSlide: function (position, value) {
            const color = "hsl(" + value + ", 48%, 60%)";
            $("#rangeslider1 input[type='range'] ~ .rangeslider")
                .css("background-color", color);
        },

        // Callback function
        onSlideEnd: function (position, value) { }
    });

    // slide 2
    $("#rangeslider2 input[type='range']").rangeslider({
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        verticalClass: 'rangeslider--vertical',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',

        // Callback function
        onInit: function () {},

        // Callback function
        onSlide: function (position, value) {
            const color = "hsl(" + value + ", 48%, 60%)";
            $("#rangeslider2 input[type='range'] ~ .rangeslider")
                .css("background-color", color);
        },

        // Callback function
        onSlideEnd: function (position, value) { }
    });





    $scope.previousView = function () {
        $location.path("/questionCheckbox");
    };

    $scope.setAnswers = function () {
        $location.path("/questionButtonSlider");
    };
});