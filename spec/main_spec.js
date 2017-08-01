"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("Trans ZipCode", function(){
    sinon.spy(console, 'log');

    it('Trans 95713 to ||:|:::|:|:|:::|:::||::||::|:|:|', function() {
    	var result = main('95713');
        
        expect(result).to.equal('||:|:::|:|:|:::|:::||::||::|:|:|');
    });

    it('Trans ||:|:::|:|:|:::|:::||::||::|:|:| to 95713', function() {
    	var result = main('||:|:::|:|:|:::|:::||::||::|:|:|');
        
        expect(result).to.equal('95713');
    });
});