#!/usr/bin/env node
const ncp = require('./ncp').ncp;
const cpy = require('cpy');

const options = {
    clobber: true,
    filter: (filepath) => {
        return !filepath.includes('/node_modules') 
    },
    transform: (read, write) => {
        console.log(write);
        read.pipe(write);
    }
}

ncp('./node_modules/static-cms-baseline/src/', './', options, (err) => {
 if (err) {
   return console.error(err);
 }
});