'use strict'

function sort(input) {
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

function generate(testLengthArray){
  var result = [];
  var k = testLengthArray.length;
  for( var i = 0 ; i < k ; i++){
    var area = [];
    var target ;
    var output;
    for(var j = 0 ; j < testLengthArray[i] ; j++){
      area[j] =  Math.floor(Math.random()*-2001) + 1000;
    }
    sort(area);
    var temp =  Math.floor(Math.random()*testLengthArray[i]);
    var key =Math.floor(Math.random()*4);
    if(key === 0 ){
      target = area[temp];
    } else if(key === 1){
      target = 12345;
    } else if(key === 3){
      target = area[0];
    } else if(key === 2){
      target = area[testLengthArray[i]-1];
    }
    
    result.push({"input":area , "target":target , "output":area.indexOf(target)});
  }
  return result;
}

module.exports = generate
