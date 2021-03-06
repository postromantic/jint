/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-2-19.js
 * @description Array.prototype.some applied to Function object which implements its own property get method
 */


function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var fun = function (a, b) {
            return a + b;
        };
        fun[0] = 9;
        fun[1] = 11;
        fun[2] = 12;

        return Array.prototype.some.call(fun, callbackfn1) &&
            !Array.prototype.some.call(fun, callbackfn2);
    }
runTestCase(testcase);
