#!/usr/bin/env node
const chalk = require('chalk');
const ncp = require('./ncp').ncp;
const cpy = require('cpy');

const options = {
    clobber: false,
    filter: (filepath) => {
        return !filepath.includes('app/node_modules') 
    },
}

ncp('./node_modules/static-cms-baseline/src', './', options, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(chalk.green('Done!'));
});