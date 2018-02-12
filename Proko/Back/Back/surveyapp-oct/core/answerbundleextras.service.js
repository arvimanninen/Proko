'use strict';
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
    var AnswerBundleExtrasDTO = function (nAnswererTypeId, nTextFeedback) {
        this.AnswererTypeID = nAnswererTypeId;
        this.TextFeedback = nTextFeedback;
    };

    var getTextFeedback = function () {
        return textFeedback;
    };
    var setTextFeedback = function (feedback) {
        textFeedback = feedback.toString();
    };
    var getAnswererTypeId = function () {
        return answererTypeId;
    };
    var setAnswererTypeId = function (atId) {
        answererTypeId = atId;
        console.log("AnswerBundleExtrasService.answererTypeId changed!. New answererTypeId: " + answererTypeId);
    };
    var getAnswerBundleExtras = function () {
        var abe = new AnswerBundleExtrasDTO(answererTypeId, textFeedback);
        return abe;
    };
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