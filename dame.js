(function () {
    "use strict";

    var Dame = {
        VERSION: "0.0.1"
    };

    if (typeof exports !== "undefined") {
        module.exports = Dame; // jshint ignore:line
    }
    else {
        window.Dame = Dame;
    }

}());

