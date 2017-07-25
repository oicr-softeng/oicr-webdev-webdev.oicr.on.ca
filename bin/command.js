#!/usr/bin/env node
'use strict';

var ncp = require('./ncp').ncp;
var cpy = require('cpy');

var options = {
    clobber: true,
    filter: function filter(filepath) {
        return !filepath.includes('/node_modules');
    },
    transform: function transform(read, write) {
        console.log(write);
        read.pipe(write);
    }
};

ncp('./node_modules/static-cms-baseline/src/', './', options, function (err) {
    if (err) {
        return console.error(err);
    }
});