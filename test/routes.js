const app = require('../app');
const assert = require('assert/strict');
const request = require('supertest');


describe('The GET / route', function() {
  it('should return a 200 status code', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
