/**
 * Created by Arvi on 1/9/2017.
 */
'use strict';

app.service('aboutService', function() {
    var aboutInfo = {
        "name": "Working Memory Quiz",
        "version": "0.1",
        "madeBy": "Arvi Manninen",
        "year": "2015-2017",
        "license": "GPL General Public License v3"
    };
    var getInfo = function() {
        return aboutInfo;
    };
    return {
        getInfo: getInfo
    };
})