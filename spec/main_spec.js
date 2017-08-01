"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试FizzBuzz", function(){
    sinon.spy(console, 'log');

    it("测试普通数字输入", function(){

        var result = main(1);
        var expect_string = '1';
        
        expect(expect_string).to.equal(result);
    });

    it("测试3的倍数输入", function(){

        var result = main(3);
        var expect_string = 'Fizz';

        expect(expect_string).to.equal(result);
    });

    it("测试5的倍数输入", function(){

        var result = main(5);
        var expect_string = 'Buzz';

        expect(expect_string).to.equal(result);
    });

    it("测试3和5的倍数输入", function(){

        var result = main(15);
        var expect_string = 'FizzBuzz';

        expect(expect_string).to.equal(result);
    });
});