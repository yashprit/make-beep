'use strict';
var assert = require('assert');
var beeper = require('./');
var BEEP_CHAR = '\u0007';

it('beep', function(done) {
  var _ = process.stdout.write;

  process.stdout.write = function(str) {
    if (str === BEEP_CHAR) {
      assert(true);
    }
  };

  beeper();
  process.stdout.write = _;
  done();
});
