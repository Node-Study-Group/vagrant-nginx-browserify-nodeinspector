var request = require('supertest');
var app = require('../../server/server.js');

describe('server.js', function() {
  describe('GET /', function() {
    it('should contain the string "mymessagediv" and have status 200', function(done) {
      request(app)
        .get('/')
        .expect(/mymessagediv/)
        .expect(200)
        .end(done);
    });
  });
});
