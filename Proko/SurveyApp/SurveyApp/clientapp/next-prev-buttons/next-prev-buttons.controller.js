'use strict';

// NextPrevButtonsCtrl
// - Controller for nextPrevButtons -component
app.controller('NextPrevButtonsCtrl', function ($location, $route, $templateCache, RunService, QuestionService, AnswerService) {
    var that = this;

    // changeLocation()
    // - Function gets current location (currentLocation)
    //    , next location (nextLocation) and next question set index (index) as parameters
    // - Maximum question set index (maximumIndex) is got from RunService
    // - If next question set index is larger as maximumIndex, view is changed
    //   to text-area -view (written feedback view)
    // - Else if currentLocation is same as nextLocation,
    //   current page template (currentPageTemplate) is removed from cache
    //   and view is reloaded
    // - Else, user is moved to the view accorded by nextLocation
    // @param {String} currentLocation
    // @param {String} nextLocation
    // @param {Number} index
    var changeLocation = function (currentLocation, nextLocation, index) {
        var maximumIndex = RunService.getQuestionSetCount();
        if (index > maximumIndex) {
            $location.path("/text-area");
        } else if (currentLocation === nextLocation) {
            var currentPageTemplate = $route.current.templateUrl;
            $templateCache.remove(currentPageTemplate);
            $route.reload();
        } else {
            $location.path(nextLocation);
        }
    };

    // that.goTo()
    // - Function is executed when user clicks a button which function is binded to.
    //   Function gets needed information from Services to local variables
    // - Amounts of answers (aCount) and questions (qCount) in current question set
    //   are checked just in case.
    // - direction parameter value should be either 1 (next) or -1 (previous)
    // - If conditions pass, questionSetIndex is either increased by 1 or decreased by 1
    //   and information is updated to RunService with its functions. If the conditions
    //   won't pass, error message is shown in browser's console.
    // - Then next question method value, which defines the next view's path
    //   is got from QuestionService.
    // - Necessary variables (currentQmv, nextQmv, questionSetIndex) are passed
    //   to the changeLocation function as parameters. changeLocation() does
    //   the view change.
    // @param {Number} direction
    that.goTo = function (direction) {
        var questionSetIndex = RunService.getQuestionSetIndex();
        var maxSetIndex = RunService.getQuestionSetCount();
        var currentQmv = QuestionService.getQuestionMethodValueBySetIndex(questionSetIndex);
        var nextQmv;
        var aCount = AnswerService.getAnswerCountByQuestionSetIndex(questionSetIndex);
        var qCount = QuestionService.getQuestionCountBySetIndex(questionSetIndex);

        if (aCount === qCount) {
            if (direction === 1 || direction === -1) {
                RunService.setRouteButtonsUsed(true);
                if (direction === 1) {
                    questionSetIndex++;
                    RunService.increaseQuestionSetIndex();
                }
                if (direction === -1) {
                    questionSetIndex--;
                    RunService.decreaseQuestionSetIndex();
                }
                nextQmv = QuestionService.getQuestionMethodValueBySetIndex(questionSetIndex);
                changeLocation(currentQmv, nextQmv, questionSetIndex);
            } else {
                alert("Error at go(direction)!");
            }
        } else {
            alert("Ole hyvä ja vastaa kaikkiin kysymyksiin ensin.");
        }

    };

});