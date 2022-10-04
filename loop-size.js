// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next
// Notes:

// do NOT mutate the nodes!
// in some cases there may be only a loop, with no dangling piece
// Thanks to shadchnev, I broke all of the methods from the Hash class.

// Don't miss dmitry's article in the discussion after you pass the Kata !! 

function loop_size(node){
    let arr = []; // array to register the nodes

    do {
        arr.push(node); // register the node
        node = node.getNext(); // node = node.next, go through all the nodes
    } while( !arr.includes(node) ) // stop the iteration if the current node is in the array

    const i = arr.findIndex( n => n === node ); // find the index of the node which starts the loop

    return arr.slice(i).length; // Loop length (from the node which starts the loop to the end of the array)
}