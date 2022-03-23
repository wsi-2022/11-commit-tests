const app = require('../app');
const assert = require('assert/strict');
const request = require('supertest');

describe('The GET /does-not-exist route', function() {
  it('should return a 404 status code', function(done) {
    request(app)
      .get('/does-not-exist')
      .expect(404, done);
  });
});
