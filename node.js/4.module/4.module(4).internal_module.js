var os = require('os');


console.log(`system hostname: ${os.homename}`);

console.log(`system memory: ${os.freemem()} / ${os.totalmem}`);

console.log(`system CPU info:`);
console.dir(os.cpus());

console.log(`system network interface info:`);
console.dir(os.networkInterfaces());




var path = require('path');

var directories = ["users", "ijeong", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('docs dir: %s', docsDirectory);

var curPath = path.join('/User/ijoeng', 'notepad.exe');
console.log('filepath: %s', curPath);

var filename = 'C:\\Users\\ijeong\\notepad.exe';
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log(`directory: ${dirname}', fliename: ${basename}', 확장자: ${extname}`);