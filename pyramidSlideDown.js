// Solution to 4kyu Kata -> https://www.codewars.com/kata/551f23362ff852e2ab000037
// Using memoization. Up-bottom solution.

function longestSlideDown(pyramid) {
  // Function to create memo and launch findMaxSum
  const memo = [];
  for (let i = 0; i < pyramid.length; i++) {
    memo.push(new Array(pyramid[i].length).fill(-1));
  }
  return findMaxSum(0, 0, pyramid, memo);
}

function findMaxSum(row, col, pyramid, memo) {
  // base case: element is in pyramid's base
  if (row === pyramid.length - 1) {
    return pyramid[row][col];
  }
  // base case: element is in memo
  if (memo[row][col] !== -1) {
    return memo[row][col];
  }
  // general case
  const leftSum = findMaxSum(row + 1, col, pyramid, memo);
  const rightSum = findMaxSum(row + 1, col + 1, pyramid, memo);
  const maxSum = Math.max(leftSum, rightSum) + pyramid[row][col];
  memo[row][col] = maxSum;
  return maxSum;
}
