// 모듈 분리 전의 함수 사용 코드


var calc = {};
calc.add = function(a, b){
    return a+b;
}
console.log('모듈 분리 전 calc.add 호출 결과: %d', calc.add(10, 10));
// 모듈 분리 전 calc.add 호출 결과: 20


/*모듈 파일: calc.js
exports.add = function(a, b{
    return a+b;
}

// module.exports = calc;
*/


// 모듈 파일을 불러들인 후 add 함수 호출
var calc = require('./calc');   // require 함수를 이용해 모듈 파일 불러들임
                                // 불러들인 결과 객체는 exports 객체로 간주할 수 있음
                                // 파일이 아닌 폴더를 지정하면 그 폴더 안에 들어있는 index.js 파일을 불러들임

console.log('모듈 분리 후 calc.add 호출 결과: %d', calc.add(10, 10));
// 모듈 분리 후 calc.add 호출 결과: 20