const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
 
  let maxLenght = [];
  if (arrayOfString === undefined || arrayOfString === null){
  return undefined
 }
 for (array of arrayOfString){
   if (maxLenght.length === 0){
    maxLenght = [array]
   }
   else if (array.length >= maxLenght[0].length){
    if(array.length == maxLenght[0.].length){
      maxLenght.push(array)
    }
    else{
      maxLenght = [array] 
    }
   }
 }

 return maxLenght
 } 
  

module.exports = getMaxLengthString
