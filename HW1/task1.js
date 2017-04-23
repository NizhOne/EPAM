

function myExponent(x) {
    let res = 1,
        lengthOfRow = 50;
    for (let i = 1; i <= lengthOfRow; i++) {
        /*console.log(Math.pow(x, i));
        console.log(factorial(i));*/
        res += Math.pow(x, i)/ factorial(i);
    }
    return Math.round(res * 10000) / 10000;
}

function factorial(x) {
    let res = 1;
    for (let i = 1; i<=x; i++) {
        res *= i;
    }
    return res;
}

console.log(myExponent(5));
console.log(Math.exp(5));

