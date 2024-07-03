function calcWordFrequencies(words) {
   let numWords = new Map();
   let tokens = words.split(" ");
   for(let i = 0; i < tokens.length;i++)
   {
      if(numWords.has(tokens[i]) == true) {
         let newValue = numWords.get(tokens[i]) + 1;
         numWords.set(tokens[i],newValue);
      }
      else {
         numWords.set(tokens[i],1);
      }
   }
   for (let [w,num] of numWords) {
      console.log(w + " " + num);
   }
}

console.log("Testing calcWordFrequencies()...");
calcWordFrequencies("hey hi Mark hi mark");



// Do NOT remove the following line:
export default calcWordFrequencies;
