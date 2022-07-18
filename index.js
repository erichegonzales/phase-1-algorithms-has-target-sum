// First attempt
// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   console.log(target)
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i === j) continue
//       sum = array[i] + array[j]
//       if (sum === target) return true
//     }
//   }
//   return false
// }

// Solution
function hasTargetSum(array, target) {
  // create an object to store all the numbers already iterated through
  const seenNumbers = {}
  // iterate through all the numbers of the array
  for (const currNumber of array) {
    // finding the complement number of the current number to add up to the target
    const complement = target - currNumber
    // if the complement number is a number we have iterated through before, return true
    if (seenNumbers[complement]) return true
    // if the number is not in there, save the current number in the object
    // to check if it will be a complement for future numbers in the array
    seenNumbers[currNumber] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  First attempt: O(n^2)
  Solution: O
*/

/* 
  Add your pseudocode here
  nested loop through length of the array
  if the indices i and j are the same, go to the next iteration
    sum the i element and the j element and check if its equal to the target
      return true if sum =
       target
  iterate through all the elements
  return false if no sum is equal to the target
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 6, 9, 1, 2], 12));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 0, 8, 10, 5], 7));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([7, 8, 2, 5, 5, 9], 3));
}

module.exports = hasTargetSum;
