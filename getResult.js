module.exports.getResult = getResult=(n)=>{
    if (n < 1) {
        return 0;
    }
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fib = n;
    for (let i = 2; i <= n; i++) {
        fib = fibNMinus1 + fibNMinus2;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fib;
    }
    return fib;
}
