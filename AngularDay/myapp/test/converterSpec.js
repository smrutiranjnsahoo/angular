var expect = require('chai').expect;
var  request = require('request');
var converter = require('../app/converter');

//AAA(Asemble Action Assert)
describe("testing converter module",function(){

    // test functionality

    it("should convert rgb to hex",() =>{

        var r = 255;
        var g = 0;
        var b = 255;
        var result  = converter.rgbToHex(r,g,b);
        expect(result).to.be.equal("ff00ff")

    });

    it("should convert hex to rgb",() =>{

        
        var hex = "ff00ff";
        var result  = converter.hexToRgb(hex);
        expect(result).to.be.deep.equal([255,0,255])

    });

});