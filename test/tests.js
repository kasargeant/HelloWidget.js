
/*global Connector:false */
/*global assert:false */
/*global describe:false */
/*global it:false */

"use strict";

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
describe("HelloWidget.js", function() {

    var widget;

    ///////////////////////////////////////////////////////////////////////////
    before(function() {
        widget = new HelloWidget(10, 20);

    });

    ///////////////////////////////////////////////////////////////////////////
    describe("Widgeting", function() {
        this.slow(10);      // Defines the timeout limit before test warning.
        this.timeout(30);   // Defines the timeout limit before test failure.

        it("should be able widget well.", function() {
            assert.equal(200, widget.getArea());
        });

    });

});