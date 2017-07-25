#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var ncp = require('./ncp').ncp;
var cpy = require('cpy');

var options = {
    clobber: false,
    filter: function filter(filepath) {
        return !filepath.includes('app/node_modules');
    }
};

ncp('./node_modules/static-cms-baseline', './', options, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log(chalk.green('Done!'));
});