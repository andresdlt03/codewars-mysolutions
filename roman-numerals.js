function solution (rom) {
    let roman = { 'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 }
    let result = 0;
    const romArr = rom.split("");
    for(i = 0; i < romArr.length; i++) {
        if(roman[romArr[i]] < roman[romArr[i+1]]) {
            result += roman[romArr[i+1]] - roman[romArr[i]];
            i+=1;
        } else {
            result += roman[romArr[i]]
        }
    }
    return result;
}

console.log(solution('MCMXC')) /* 1990 */
console.log(solution('MMVIII')) /* 2008 */