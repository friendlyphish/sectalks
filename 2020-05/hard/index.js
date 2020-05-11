const process = require('process');
const chalk = require('chalk');
const fs = require('fs');

// Encrypt the flag
var CryptoJS = require("crypto-js");

var one = CryptoJS.AES.encrypt("try_harder", process.env.SECRET).toString();
var two = CryptoJS.AES.encrypt(process.env.FLAG, process.env.SECRET).toString();
var three = CryptoJS.AES.encrypt("its_not_that_easy", process.env.SECRET).toString();

fs.writeFile('/workdir/html/flag/submit', one, console.log);
fs.writeFile('/workdir/html/flag/get', two, console.log);
fs.writeFile('/workdir/html/flag/sectalks', three, console.log);

// Run our webserver
process.on('SIGINT', function() {
  process.exit();
});

var StaticServer = require('./server');

var server = new StaticServer({
  rootPath: './html',            // required, the root of the server file tree
  port: 9080,               // required, the port to listen
  name: 'SecTalks HTTP server',   // optional, will set "X-Powered-by" HTTP header
  //host: '10.0.0.100',       // optional, defaults to any interface
  //cors: '*',                // optional, defaults to undefined
  //followSymlink: true,      // optional, defaults to a 404 error
  templates: {
    index: 'index.html',      // optional, defaults to 'index.html'
    notFound: 'index.html'    // optional, defaults to undefined
  }
});
 
server.start(function () {
  console.log('Server listening to', server.port);
});
 
server.on('request', function (req, res) {
  console.log(chalk.gray('<--'), chalk.blue('[' + req.method + ']'), req.path);
});
 
server.on('response', function (req, res, err, file, stat) {
  if (res.status >= 400) {
    console.log(chalk.gray('-->'), chalk.red(res.status), req.path, '(' + req.elapsedTime + ')');
  } else {
    console.log(chalk.gray('-->'), chalk.green(res.status), req.path, '(' + req.elapsedTime + ')');
  }
})