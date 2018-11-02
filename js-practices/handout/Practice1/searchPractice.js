'use strict'

function search(input, target) {
  // return  input.indexOf(target);  // Remove this line and change to your own algorithm
  var a = -1;
  for (let i = 0; i < input.length; i++){
    if (target == input[i]) {
      a = i;
    } 
  }
  return a;
  
}

module.exports = search
