var os = require('os');


console.log(`system hostname: ${os.homename}`);

console.log(`system memory: ${os.freemem()} / ${os.totalmem}`);

console.log(`system CPU info:`);
console.dir(os.cpus());

console.log(`system network interface info:`);
console.dir(os.networkInterfaces());