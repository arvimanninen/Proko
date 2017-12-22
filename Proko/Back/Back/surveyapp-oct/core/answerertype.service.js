'use strict';
app.service('AnswererTypeService', function () {
    var answererTypes = [];
    var getAnswererTypes = function () {
        return answererTypes;
    };
    var setAnswererTypes = function (answererTypeDtos) {
        for (var i = 0; i < answererTypeDtos.length; i++) {
            answererTypes.push(answererTypeDtos[i]);
        }
    };
    var reset = function () {
        answererTypes.length = 0;
    };
    return {
        getAnswererTypes: getAnswererTypes,
        setAnswererTypes: setAnswererTypes,
        reset: reset
    }
});