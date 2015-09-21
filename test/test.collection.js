/* global require */
(function () {
    "use strict";

    var test = require("tape");
    var Dame = require("../dame.js");

    require("../dame/collection.js");

    test("Dame.collection: default", function (t) {
        var collection = Dame.collection();

        t.ok( typeof collection.create === "function" );
        t.ok( typeof collection.parse === "function" );

        t.equal( collection.length, 1 );

        t.end();
    });

    test("Dame.collection: #create", function (t) {
        var collection = Dame.collection();
            collection.foo = function () { return "bar"; };

        var newCollection = collection.create();

        t.equal( typeof newCollection.create, "function" );
        t.equal( newCollection.foo, collection.foo );
        t.notEqual( newCollection[0], collection[0] );

        t.end();
    });

    test("Dame.collection: #toString", function (t) {
        var collection = Dame.collection();

        t.ok( /^\(;/.test(collection.toString()) );
        t.ok( /^\(;/.test(""+collection) );

        t.end();
    });

    test("Dame.collection: #slice", function (t) {
        var gameTree1 = Dame.collection.gameTree(),
            gameTree2 = Dame.collection.gameTree();

        var collection1 = Dame.collection([ gameTree1, gameTree2 ]),
            collection2 = collection1.slice( 0, 1 );

        t.equal( typeof collection2.create, "function" );
        t.equal( collection2.length, 1 );
        t.equal( collection2[0], gameTree1 );

        t.end();
    });

    test("Dame.collection: #concat", function (t) {
        var gameTree1 = Dame.collection.gameTree(),
            gameTree2 = Dame.collection.gameTree(),
            gameTree3 = Dame.collection.gameTree();

        var collection1 = Dame.collection([ gameTree1 ]),
            collection2 = Dame.collection([ gameTree2 ]),
            collection3 = collection1.concat( collection2, gameTree3 );

        t.equal( typeof collection3.create, "function" );
        t.equal( collection3.length, 3 );
        t.equal( collection3[0], gameTree1 );
        t.equal( collection3[1], gameTree2 );
        t.equal( collection3[2], gameTree3 );

        t.end();
    });

}());
