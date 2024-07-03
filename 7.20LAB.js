function printSum(x, y) {
   if(isNaN(x) && !isNaN(y)) {
      console.log("'" + x + "' is not a number.")
   }
   else if (!isNaN(x) && isNaN(y)) {
      console.log("'" + y + "' is not a number.")
   }
   else if (isNaN(x) && isNaN(y)) {
      console.log("'" + x + "' and '" + y + "' are not numbers.")
   }
   else {
      let sum = x+y;
      console.log("Sum is " + sum + ".")
   }
}

console.log("Testing printSum()...");

printSum(3, 6);            // 9
printSum(3.5, 6.1);        // 9.6
printSum("hello", 6);      // 'hello' is not a number
printSum(10, "hi");        // 'hi' is not a number
printSum("hello", "hi");   // 'hello' and 'hi' are not numbers


// Do NOT remove the following line
export default printSum;
