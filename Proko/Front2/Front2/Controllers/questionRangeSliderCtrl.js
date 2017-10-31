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


    $('input[type="range"]').rangeslider({

        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        verticalClass: 'rangeslider--vertical',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',

        // Callback function
        onInit: function () {
            
        },

        // Callback function
        onSlide: function (position, value) {
            var color = "hsl(" + value + ", 48%, 60%)";
            //console.log(color);
            $(".rangeslider__fill").css("background-color", color);
        },

        // Callback function
        onSlideEnd: function (position, value) { }
    });





    $scope.previousView = function () {
        $location.path("/questionThumbs");
    };

    $scope.setAnswers = function () {
        $location.path("/questionTextarea");
    };
});