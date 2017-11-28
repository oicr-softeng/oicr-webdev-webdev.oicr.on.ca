#!/usr/bin/env node
const chalk = require('chalk');
const ncp = require('./ncp').ncp;
const cpy = require('cpy');
const fs = require('fs');

const options = {
    clobber: true,
    filter: (filepath) => {
        var stats = fs.lstatSync(filepath);
        return !filepath.includes('app/node_modules') && (stats.isDirectory() || (stats.isFile() && filepath.includes('/core/')))
    },
}

ncp('./node_modules/static-cms-baseline/src', './', options, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(chalk.green('Done!'));
});
