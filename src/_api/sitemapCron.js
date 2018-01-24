var local = false;
var sitemap = 'sitemap.xml';

for (var i = 2; i < process.argv.length; i++) {
  if (process.argv[i] == '-s') {
    var url = process.argv[++i];
  }
  if (process.argv[i] == '-l') {
    local = true;
  }
  if (process.argv[i] == '-o') {
    sitemap = process.argv[++i];
  }
}

if (url == undefined) {
  throw new Error("Use -s url to provide a url, and -l to indicate it as a local site");
}

var PSG = require("phantomjs-sitemap");
console.log("URL passed : ", url);
var p = new PSG( url, { verbose: true, ignoreSSLErrors: local, sitemap: sitemap } );
p.crawl();
