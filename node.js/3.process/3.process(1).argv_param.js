console.log(`argv attribute's param number: ${process.argv.length}`);
// argv attribute's param number: 2

console.dir(process.argv);
/*
[
  'C:\\install_program\\Nodejs\\node.exe',
  'c:\\Users\\I.Jeong\\Dropbox\\Git\\Study\\node.js\\3_process\\3.process(1).argv_param.js'
]
*/

process.argv.forEach((item, index)=>{
	console.log(`${index}: ${item}`);
})
// 0: C:\install_program\Nodejs\node.exe
// 1: c:\Users\I.Jeong\Dropbox\Git\Study\node.js\3_process\3.process(1).argv_param.js

/*
process.argv.forEach(function(item, index){
    console.log(index, ':', item);
})
process.argv.forEach(function(item, index){
    console.log(index + ':' + item);
})
*/