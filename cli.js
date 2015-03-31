#!/usr/bin/env node

'use strict';
var args = require('minimist')(process.argv.slice(2))
var makeBeep = require('./');

var number = args.num;


makeBeep(number);
