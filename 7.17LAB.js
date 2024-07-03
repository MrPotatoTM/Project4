function sortEvens(numArray) {
   let evenArray = [];
   for(let i = 0;i<numArray.length;i++) {
         if (numArray[i] % 2 == 0) {
            evenArray.push(numArray[i])
         }
    }
      evenArray.sort(function(a,b){return a-b})
   return evenArray
}

console.log("Testing sortEvens()...");
let nums = [4, 2, 9, 1, 8];
let evenNums = sortEvens(nums);
console.log(evenNums);


// Do NOT remove the following line:
export default sortEvens;
