'use strict'

function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm

  if (input.length == 0) {
      return [];
  } else {
    var sortedInput = [input[0]];
    for (let i = 1; i < input.length; i++) {
        if (input[i] >= sortedInput[sortedInput.length-1]) {
            sortedInput.push(input[i]);
        } 
        else if (input[i] <= sortedInput[0]) {
            sortedInput.unshift(input[i]);
        } 
        else {
            for (let j = sortedInput.length - 1; j > 0; j--) {
                if (input[i] >= sortedInput[j-1] && input[i] <= sortedInput[j]) {
                    sortedInput.splice(j, 0, input[i]);
                    break;
                }
            }
        }
    }
    return sortedInput;
    }
}

module.exports = sort

