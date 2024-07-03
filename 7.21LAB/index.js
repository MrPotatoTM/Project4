function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
   let d1 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
   let d2 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2))
   let d3 = Math.sqrt(Math.pow((x2 - x3), 2) + Math.pow((y2 - y3), 2))
   return d1+d2+d3
}

function triangleArea(x1, y1, x2, y2, x3, y3) {
    return Math.abs(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2

}

console.log("Testing trianglePerimeter()...");
let perimeter = trianglePerimeter(1, 0, 2, 4, 4, 3);
console.log("Perimeter = " + perimeter);

console.log("Testing triangleArea()...");
let area = triangleArea(1, 0, 2, 4, 4, 3);
console.log("Area = " + area);



// Do NOT remove the following line:
export { trianglePerimeter, triangleArea };
