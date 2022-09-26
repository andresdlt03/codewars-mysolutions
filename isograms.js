// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    if(isNaN(str)) {
        let arr = str.toLowerCase().split(""); // create array to split chars
        for(let i = 0; i < arr.length; i++) {
            if(!isNaN(arr[i])) { return false; } // check if the array contains a number
        }
        if (new Set([...arr]).size == arr.length) { return true; } // check for repeated letters with a new Set
    } else if (str.length == 0) { return true; } // empty string is an isogram too
    return false;
}