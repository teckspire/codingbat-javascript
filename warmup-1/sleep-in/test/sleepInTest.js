var assert = require('assert');
var { sleepIn } = require('../sleepIn');

describe('sleepIn', function() {
  describe('when weekday is false and vacation is false', function() {
    it('returns true', function() {
      assert.equal(true, sleepIn(false, false));
    });
  });

  describe('when weekday is true and vacation is false', function() {
    it('returns true', function() {
      assert.equal(false, sleepIn(true, false));
    });
  });

  describe('when weekday is false and vacation is true', function() {
    it('returns true', function() {
      assert.equal(true, sleepIn(false, true));
    });
  });
});
