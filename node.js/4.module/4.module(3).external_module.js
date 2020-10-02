var nconf = require('nconf');
nconf.env();
console.log('OS env var: %s', nconf.get('OS'));