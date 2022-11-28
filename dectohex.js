// function rgb(r, g, b) {
//     const rgb = [r,g,b];
//     let res = "";
//     for(i = 0; i < rgb.length; i++) {
//         (rgb[i] < 0) ? res += "00" :
//         (rgb[i] > 255) ? res += "FF" :
//         (rgb[i].toString(16).length != 2) ? res += "0" + rgb[i].toString(16) :
//         res += rgb[i].toString(16);
//     }
//     return res;
// }

// Mejor solución usando forEach

function rgb(r, g, b) {
    const rgb = [r, g, b];
    let res = "";
    rgb.forEach( elem => {
        (elem < 0) ? res += "00" :
        (elem > 255) ? res += "FF" :
        (elem.toString(16).length != 2) ? res += "0" + elem.toString(16).toUpperCase() :
        res += elem.toString(16).toUpperCase();
    } ) 
    return res;
}

console.log(rgb(245,10,277));
console.log(rgb(25,178,235));
console.log(rgb(255,78,0));
console.log(rgb(133,199,203));