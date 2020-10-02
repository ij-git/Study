// exports vs. module.exports


// exports
exports.add = function(a, b){
    return a+b;
};

exports.multiply = function(a, b){
    return a*b;
};


// module.exports
var calc = {};

calc_add = function(a, b){
    return a+b;
};

calc.multiply = function(a, b){
    return a*b;
}

module.exports = calc;