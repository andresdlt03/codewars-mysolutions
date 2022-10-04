// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    let odd = 0, even = 0;
    integers.slice(0,3).forEach( n => (n % 2 == 0) ? even++ : odd++ ) // check if array has more even or more odd by checking the 3 first elements
    if (odd < even) { // if array is interily comprised of even numbers, find the odd
        return integers.find( n => n % 2 != 0 );
    } else { // the opposite case
        return integers.find( n => n % 2 == 0 )
    }
}