var request = require("request");
console.log("reached")

describe("Digital Diary Server", function() {
    describe("GET /", function() {
       // PASSED API mood predicting with happy details
      it("Getting review for happy", function(done) {
        request.post("http://localhost:3006/api/mood/s-analyzer",{json: true, body: {"review":"it was happy because its my birthday"}}, function(error, response, body) {
          // console.log(response.statusCode)
          // console.log(response.body)
          // console.log(body.length)
        //   console.log(body[0,2])
          expect(body.length).toBeGreaterThan(0);
          expect(response.statusCode).toBe(200);
            done();
        });
      });
      //PASSED API mood prediction for sad details
      it("Getting review for happy", function(done) {
        request.post("http://localhost:3006/api/mood/s-analyzer",{json: true, body: {"review":"it was a sad day"}}, function(error, response, body) {
          // console.log(response.statusCode)
          // console.log(response.body)
          // console.log(body.length)
        //   console.log(body[0,2])
          expect(body.length).toBeLessThan(0);
          expect(response.statusCode).toBe(200);
            done();
        });
      });
    //PASSED API mood prediction for sad details
    it("Getting review for happy", function(done) {
        request.post("http://localhost:3006/api/mood/s-analyzer",{json: true, body: {"review":"it was a sad day"}}, function(error, response, body) {
            // console.log(response.statusCode)
            // console.log(response.body)
            // console.log(body.length)
        //   console.log(body[0,2])
            expect(body.length).toBeLessThan(0);
            expect(response.statusCode).toBe(200);
            done();
        });
        });
      
    });
});