"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var transCode = require("../lib/transCode.js");


describe("Transfer Code", function(){

    it("输入1返回:::||", function(){

        var result = transCode('1');
        
        expect(result).to.equal(':::||');
    });

    it("输入2返回::|:|", function(){

        var result = transCode('2');
        
        expect(result).to.equal('::|:|');
    });

    it("输入3返回::||:", function(){

        var result = transCode('3');
        
        expect(result).to.equal('::||:');
    });

    it("输入4返回:|::|", function(){

        var result = transCode('4');
        
        expect(result).to.equal(':|::|');
    });

    it("输入5返回:|:|:", function(){

        var result = transCode('5');
        
        expect(result).to.equal(':|:|:');
    });

    it("输入6返回:||::", function(){

        var result = transCode('6');
        
        expect(result).to.equal(':||::');
    });

    it("输入7返回|:::|", function(){

        var result = transCode('7');
        
        expect(result).to.equal('|:::|');
    });

    it("输入8返回|::|:", function(){

        var result = transCode('8');
        
        expect(result).to.equal('|::|:');
    });

    it("输入9返回|:|::", function(){

        var result = transCode('9');
        
        expect(result).to.equal('|:|::');
    });

    it("输入0返回||:::", function(){

        var result = transCode('0');
        
        expect(result).to.equal('||:::');
    });

    
});