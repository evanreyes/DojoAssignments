var chai = require("chai");
var expect = chai.expect;
var MathNum = require("../math_num.js");  // Make sure this is pointing to the correct file!

describe("MathNum", function () {
    xit("can be initialized with value, or with default value of 0", function() {
        var num = new MathNum(6);
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(6);
        num = new MathNum();
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(0);
    });
    describe("#val()", function () {
        it("returns the number value", function() {
            var num = new MathNum();
            expect(typeof num.val("test")).to.equal("number");
            expect(num.val(1)).to.equal(1);
        });
    });
});