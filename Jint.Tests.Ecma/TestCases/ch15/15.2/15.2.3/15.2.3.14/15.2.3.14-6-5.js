/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.14/15.2.3.14-6-5.js
 * @description Object.keys - the order of elements in returned array is the same with the order of properties in 'O' (any other built-in object)
 */


function testcase() {
        var obj = new Date();
        obj.prop1 = 100;
        obj.prop2 = "prop2";

        var tempArray = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }

        var returnedArray = Object.keys(obj);

        for (var index in returnedArray) {
            if (tempArray[index] !== returnedArray[index]) {
                return false;
            }
        }
        return true;
    }
runTestCase(testcase);
