// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves) {
    let pairs = 0, uniques = new Set(gloves); // create a set to have each element only once
    uniques.forEach( (u) => {
        let cont = 0;
        gloves.forEach( (g) => { if(u == g) { cont++; } } ); // count how many times each element appears in the original array
        if((cont-1) % 2 == 0) { pairs += ((cont-1) / 2); } // odd cont
        else if(cont % 2 == 0) { pairs += (cont / 2) } // even cont
    } );
    return pairs;
}