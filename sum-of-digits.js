function digitalRoot(n) {
    let res = sumDigits(n);
    while(res > 9) { res = sumDigits(res) }
    return res;
}

function sumDigits(n) {
    if (n < 10) {
        return n;
    } else {
        return (n % 10) + digitalRoot(Math.floor(n / 10));
    }
}

console.log(digitalRoot(555));