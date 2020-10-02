# 2. Node.js console



## console 객체

* ```console``` 모듈은 간단한 디버깅 콘솔을 제공
* global instance 이기 때문에 호출 (require('console')) 없이 사용이 가능
* ```console.log```, ```console.error()```, ```console.warn()``` 등의 메소드를 통해 스트림에 쓸 수 있도록 함



## console log, error, warn


```node.js
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
```





## console.log



### 데이터 출력

```node.js
console.log('print number (integer): %d', 10);
// print number (integer): 10

console.log('print number (float): %f', 3.14);
// print number (float): 3.14

console.log('print string: %s', 'hello world');
// print string: hello world

console.log('print JSON obj: %j', {name: 'i.jeong'});
// print JSON obj: {"name":"i.jeong"}

```



### 파일 이름, 경로 출력

* ```__filename```, ```__dirname``` 전역 변수를 이용하여 출력

```node.js
console.log(`current file name: ${__filename}`);
// current file name: DIR_PATH\FILE_NAME.js

console.log(`directory path current file placed: ${__dirname}`);
// directory path current file placed: DIR_PATH
```



## 객체 정보 출력

```node.js
// 객체 정보 출력

var Person = {name: "I.Jeong", age: 23};
console.dir(Person);
// { name: 'I.Jeong', age: 23 }

console.log(`print object: ${Person}`);
// print object: [object Object]

console.log('print object: %j', Person);
// print object: {"name":"I.Jeong","age":23}
```



* **JSON 포맷** 
  * key: value 의 쌍으로 이루어진 데이터 형식
  * 형식
    * {key1: value1, key2: value2, ...}
  * ex) {name: "I.Jeong", age: 20}

