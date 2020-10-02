// console.log examples

console.log('hello world');
// print (stdout): hello world

console.log('hello %s', 'world');
// print (stdout): hello world

const str = 'world';
console.log(`hello ${str}`);
// print (stdout): hello world



// console error examle
console.error(new Error('something bad happend'));
// print (stderr): Error: something bad happend



// console warn examle
console.warn('Danger! Danger!');
// print (stderr): Danger! Danger!