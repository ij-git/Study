// 객체 정보 출력

var Person = {name: "I.Jeong", age: 23};
console.dir(Person);
// { name: 'I.Jeong', age: 23 }

console.log(`print object: ${Person}`);
// print object: [object Object]

console.log('print object: %j', Person);
// print object: {"name":"I.Jeong","age":23}