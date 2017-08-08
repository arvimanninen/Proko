'use strict';
app.controller('StartCtrl', function StartCtrl($location) {
    console.log("StartCtrl started");
    this.routeToTest = function(){
        $location.path("/test");
    }
});