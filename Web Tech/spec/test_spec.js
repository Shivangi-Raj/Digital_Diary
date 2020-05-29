var request = require("request");

var base_url = "http://localhost:3001/"

describe("Digital Diary Server", function() {
  describe("GET /", function() {
     // PASSED API to get all the contains of a perticular mood(happy sad nutral)
    it("Get all the diary pages with a perticular mood", function(done) {
      request.get("http://localhost:3001/home/mood/happy", function(error, response, body) {
        // console.log(response.statusCode)
        // console.log(response.body)
        // console.log(body.length)
        console.log(body[0,2])
        expect(body.length).toBeGreaterThan(2);
        expect(response.statusCode).toBe(200);

        done();
      });
    });
    // FAILED test we are calling "angry" which is not defined in our mood predictor
    it("returns status code 200", function(done) {
      request.get("http://localhost:3001/home/mood/angry", function(error, response, body) {
        // console.log(body)
        expect(body).toBe("given mood is not valid");
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    // PASSED TESTCASE get all the diary pages available
    it("returns status code 200", function(done) {
      request.get("http://localhost:3001/home/content", function(error, response, body) {
        // console.log(body)
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    // PASSED TESTCASE get the diary page based on the title
    it("returns status code 200", function(done) {
      request.get("http://localhost:3001/home/content/happy wala day", function(error, response, body) {
        // console.log(body)
        expect(body.length).toBeGreaterThan(2);
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    //FAILED TESTCASE when the title does not exits
    it("returns status code 200", function(done) {
      request.get("http://localhost:3001/home/content/sad wala day", function(error, response, body) {
        // console.log(body)
        expect(body).toBe('title does not exits');
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    // PASSED TESTCASE post a diary page containg all the details
    // it("returns status code 200", function(done) {
    //    request.post("http://localhost:3001/newpage/content",{json: true, body: {"title":"xyz","details":"hdsjhgisojjjgv","mood":"happy","image":"4.jpg"}}, function(error, response, body) {
    //     console.log('a')
    //     console.log(body)
    //     expect(body.length).toBeGreaterThan(2);
    //     expect(response.statusCode).toBe(200);
    //     expect(body).toEqual('item stored in database');
    //     done();
    //   });
    // });
    // FAILED TESTCASE post the diary page (title id duplicated)
    it("returns status code 200", function(done) {
      request.post("http://localhost:3001/newpage/content",{json: true, body: {"title":"ok greate","details":"hdsjhgisojjjgv","mood":"happy","image":"4.jpg"}}, function(error, response, body) {
        expect(response).not.toBeNull();
        expect(body.length).toBeGreaterThan(2);
        expect(response.statusCode).toBe(200);
        expect(body).toEqual('title should be unique');
        done();
      });
    });
  });
});