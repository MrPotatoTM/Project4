function drawTriangle(triangleSize) {
   for(let i=1;i<=triangleSize;i++) {
      let line = ""
      for (let j = 1; j <= i; j++) {
            line += "*"
      }
      console.log(line)
   }
   
   
}

console.log("Testing drawTriangle()...");

drawTriangle(8);
drawTriangle(4);
drawTriangle(12);


// Do NOT remove the following line
export default drawTriangle;
