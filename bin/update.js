#!/usr/bin/env node
'use strict';
const chalk = require('chalk');
const ncp = require('./ncp').ncp;
const cpy = require('cpy');
const fs = require('fs');
const whitelist = require('./whitelist').list;

var showDiffs = true;
if(process.env.npm_config_overwrite) {
	showDiffs = false;
}
else {
	console.log(chalk.yellow("Pass --overwrite to ignore diff warnings and overwrite files"));
}

const options = {
    clobber: true,
    filter: (filepath) => {
        var pathValid = whitelist.some((whitepath, index, whitelist) => {
		      return filepath.includes(whitepath);
        })
        var stats = fs.lstatSync(filepath);
        return !filepath.includes('app/node_modules') && (stats.isDirectory() || (stats.isFile() && pathValid))
    },
    showDiffs: showDiffs
}

ncp('./node_modules/static-cms-baseline/src', './', options, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(chalk.green('~~~Done!'));
});
