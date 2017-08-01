"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var splitCode = require("../lib/splitZipCode.js");
var splitZipCode = splitCode.splitCode;

describe("Split ZipCode", function(){

    it("空字符输入返回空数组", function(){

        var result = splitZipCode('');
        
        expect(result).to.be.an('array').have.length(0);
    });

    it("非正常邮编输入返回空数组", function(){

        var result = splitZipCode('12345--903');
        
        expect(result).to.be.an('array').have.length(0);
    });

    it("正常邮编输入返回数组", function(){

        var result = splitZipCode('12345');
        
        expect(result).to.be.an('array')
        .have.length(5)
        .contain('1')
        .contain('2')
        .contain('3')
        .contain('4')
        .contain('5');
    });
});