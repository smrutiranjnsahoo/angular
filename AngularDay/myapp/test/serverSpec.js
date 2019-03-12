var expect = require('chai').expect;
var request = require('request');
var converter = require('../app/converter');

//AAA Assemble Action Assert
describe("testing server module", function() {

    //test functionality
    it("should convert rgb to hex", (done) => {
        request('http://localhost:3000/rgbtohex?r=255&g=0&b=255',function(err,res,body){
            expect(body).to.equal("ff00ff");
            done();
        });
  
    });
 });
