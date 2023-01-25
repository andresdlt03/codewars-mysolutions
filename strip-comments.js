function solution(input, markers) {
    const lines = input.split('\n');
    let result = "";
    for(let i = 0; i < lines.length; i++) {
        let found = false;
        for(let j = 0; j < markers.length; j++) {
            if(lines[i].indexOf(markers[j]) != -1) {
                found = true;
                result += `${lines[i].slice(0, lines[i].indexOf(markers[j])).trim()}\n`;
                break;
            }
        } 
        if(!found) result += lines[i] + '\n';
    }
    return result.substring(0, result.length - 1);
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));