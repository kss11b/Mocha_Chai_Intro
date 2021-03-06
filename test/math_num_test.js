var chai = require("chai");
var expect = chai.expect;
var MathNum = require("../math_num.js");  // Make sure this is pointing to the correct file!
describe("MathNum", function () {
    it("can be initialized with value, with default value of 0", function () {
        var num = new MathNum(6);
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(6);
        num = new MathNum();
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(0);

        describe("#add(num)", function () {
    it("accepts a number and adds it to the original value", function () {
        var num = new MathNum();
        num.add(3);
        expect(num.val()).to.equal(3);
        num.add(4);
        expect(num.val()).to.equal(7);
        num.add(1);
        expect(num.val()).to.equal(8);
    });
    context("when passed negative numbers or zero", function () {
        it("adds them as expected", function () {
            var num = new MathNum();
            num.add(-4);
            expect(num.val()).to.equal(-4);
            num.add(0);
            expect(num.val()).to.equal(-4);
        });
    });
    context("when passed non-numbers", function () {
        it("does nothing", function () {
            var num = new MathNum(5);
            num.add("2");
            expect(num.val()).to.equal(5);
            num.add(false);
            expect(num.val()).to.equal(5);
            num.add({});
            expect(num.val()).to.equal(5);
        });
    });
    context("when passed an array", function () {
        it("adds every value in the array", function () {
            var num = new MathNum(4);
            num.add([2, 2]);
            expect(num.val()).to.equal(8);
            num.add([-3, -3]);
            expect(num.val()).to.equal(2);
            num.add(["Hello", 2]);
            expect(num.val()).to.equal(4);
        });
    });
    });

    describe("#multiply(num)", function () {
    it("multiplies the original value by it passed number", function () {
      var num = new MathNum(5);
      num.multiply(2);
      expect(num.val()).to.equal(10);
    });
    context("when given negative numbers or zero", function () {
        it("multiplies them as expected", function () {
          var num = new MathNum(5);
          num.multiply(-2);
          expect(num.val()).to.equal(-10);

          var num = new MathNum(5);
          num.multiply(0);
          expect(num.val()).to.equal(0);
        });
    });
    context("when given non-numbers", function () {
        it("does nothing", function () {
          var num = new MathNum(5);
          num.multiply("hello");
          expect(num.val()).to.equal(5);
        });
    });
    context("when passed an array", function () {
        it("multiplies the value by every value in the array", function () {
          var num = new MathNum(4);
          num.multiply([2, 2]);
          expect(num.val()).to.equal(16);
          num.multiply([-1, -2]);
          expect(num.val()).to.equal(32);
          num.multiply(["Hello", 2]);
          expect(num.val()).to.equal(64);
        });
    });

    describe("#pow(input)", function () {
      it("increases to the power of input", function(){
        var num = new MathNum(5);
        num.pow(2);
        expect(num.val()).to.equal(25);
      })
    })
});

});
    });
    describe("#val()", function () {
        it("returns the number value", function () {
            var num = new MathNum();
            expect(typeof num.val()).to.equal("number");
            expect(num.val()).to.equal(0);
        });
    });
