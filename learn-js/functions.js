function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

var result1 = sum(10, 20);
var result2 = multiply(10, 20);
console.log(result1, result2);

//----------------------------------------------------------------------

function isValidDenominator(num) {
    return num != 0;
}

function divide(a, b) {
    if(isValidDenominator(b)) {
        return a/b;
    }
    return 0;
}
var divResult = divide(20,2);
console.log(divResult);