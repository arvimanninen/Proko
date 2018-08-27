'use strict';
// AnswerBundleExtrasService
// - Client-side storage for written feedback (textFeedback) and answerer type (answererTypeId)
app.service('AnswerBundleExtrasService', function () {
    var textFeedback = "";
    // TODO: CHANGE THIS!!!!
    var answererTypeId = -1;
    /*
    public class AnswerBundleExtrasDTO
    {
        public int AnswererTypeID { get; set; }
        public string TextFeedback { get; set; }
    }
    */
    // Object constructor for exporting data from AnswerBundleExtrasService.
    var AnswerBundleExtrasDTO = function (nAnswererTypeId, nTextFeedback) {
        this.AnswererTypeID = nAnswererTypeId;
        this.TextFeedback = nTextFeedback;
    };

    // getTextFeedback()
    // - Function returns written feedback (AnswerBundleExtrasService.textFeedback).
    // @return {String} textFeedback
    var getTextFeedback = function () {
        return textFeedback;
    };

    // setTextFeedback()
    // - Function gets written feedback as parameter, convert it as a string
    //   and sets converted value to AnswerBundleExtrasService.textFeedback -variable.
    // @param {=} feedback 
    var setTextFeedback = function (feedback) {
        textFeedback = feedback.toString();
    };

    // getAnswererTypeId()
    // - Function returns AnswerBundleExtrasService.answererTypeId -variable.
    // @return {Number} answererTypeId
    var getAnswererTypeId = function () {
        return answererTypeId;
    };

    // setAnswererTypeId()
    // - Function gets new answerer type id as a parameter and
    //   sets it value to AnswerBundleExtrasService.answererTypeId -variable.
    // @param {Number} atId
    var setAnswererTypeId = function (atId) {
        answererTypeId = atId;
        console.log("AnswerBundleExtrasService.answererTypeId changed!. New answererTypeId: " + answererTypeId);
    };

    // getAnswerBundleExtras()
    // - Function creates new AnswerBundleExtrasDTO object (abe) using
    //   AnswerBundleExtrasService.answererTypeId and
    //   AnswerBundleExtrasService.textFeedback -variables as parameters,
    //   and returns abe.
    // @return {AnswerBundleExtrasDTO} abe
    var getAnswerBundleExtras = function () {
        var abe = new AnswerBundleExtrasDTO(answererTypeId, textFeedback);
        return abe;
    };

    // reset()
    // - Function will set AnswerBundleExtrasService to its default state
    var reset = function () {
        textFeedback = "";
        answererTypeId = -1;
    };

    return {
        getTextFeedback: getTextFeedback,
        setTextFeedback: setTextFeedback,
        getAnswererTypeId: getAnswererTypeId,
        setAnswererTypeId: setAnswererTypeId,
        getAnswerBundleExtras: getAnswerBundleExtras,
        reset: reset
    };
});