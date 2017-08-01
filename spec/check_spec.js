"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var checkCode = require("../lib/getCheckCode.js");


describe("Split ZipCode", function(){

    it("95713输入返回5", function(){

        var result = checkCode('95713');
        
        expect(result).to.equal('5');
    });
});