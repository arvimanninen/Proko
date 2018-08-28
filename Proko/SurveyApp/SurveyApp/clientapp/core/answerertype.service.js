'use strict';
// AnswererTypeService
// - Client-side storage for answerer types
app.service('AnswererTypeService', function () {
    var answererTypes = [];
    /*
    public class AnswererTypeDTO
    {
        public int AnswererTypeID { get; set; }
        public string Name { get; set; }
    }
    */
    // getAnswererTypes()
    // - Function returns array of all answerer types (AnswererTypeDTO, check server-side code)
    //   in AnswererTypeService.answererTypes[].
    // @return {Array<AnswererTypeDTO>} answererTypes
    var getAnswererTypes = function () {
        return answererTypes;
    };
    /*
    public class AnswererTypeDTO
    {
        public int AnswererTypeID { get; set; }
        public string Name { get; set; }
    }

    */
    // setAnswererTypes()
    // - Function gets array (answererTypeDtos) of answerer types (AnswererTypeDTO) as a parameter,
    //   and adds them to the end of AnswererTypeService.answererTypes[] in the same order
    //   how they are arranged in answererTypeDtos[]. Currently there is no client-side
    //   constructor used, so function assumes that answerer types are in correct format.
    // @param {Array<AnswererTypeDTO>} answererTypeDtos
    var setAnswererTypes = function (answererTypeDtos) {
        for (var i = 0; i < answererTypeDtos.length; i++) {
            answererTypes.push(answererTypeDtos[i]);
        }
    };
    // reset()
    // - Function sets AnswererTypeService to the default state.
    var reset = function () {
        answererTypes.length = 0;
    };

    return {
        getAnswererTypes: getAnswererTypes,
        setAnswererTypes: setAnswererTypes,
        reset: reset
    }
});