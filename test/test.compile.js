/* global require */
(function () {
    "use strict";

    var test = require("tape");

    test("compile", function (t) {
        t.doesNotThrow(
            function () {
                require("../dame.js");
            },
            Error
        );
        t.end();
    });

}());

