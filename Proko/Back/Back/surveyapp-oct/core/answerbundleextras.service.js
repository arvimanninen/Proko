'use strict';
app.service('AnswerBundleExtrasService', function () {
    var textFeedback = "";
    var answererTypeId = 0;
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
    };
    var getAnswerBundleExtras = function () {
        var abe = new AnswerBundleExtrasDTO(answererTypeId, textFeedback);
        return abe;
    };
});