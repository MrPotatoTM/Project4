window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let cin = document.getElementById("cInput")
   let fin = document.getElementById("fInput")
   let convert = document.getElementById("convertButton")
   let error = document.getElementById("errorMessage")
   let img = document.getElementById("weatherImage")

   convert.addEventListener("click",function(){
      let cvalue = cin.value.trim()
      let fvalue = fin.value.trim()
      let celsius = parseFloat(cvalue)
      let fahrenheit = parseFloat(fvalue)
      
      if (cvalue !== "" && fvalue === "") {
         if (isNaN(celsius)) {
            error.textContent = cvalue + " is not a number"
         }
         else {
            error.textContent = ""
            f = convertCtoF(celsius)
            fin.value = f
            if (f < 32) {
               img.src = "images/cold.png"
            }
            else if (f <= 50) {
               img.src = "images/cool.png"
            }
            else {
               img.src = "images/warm.png"
            }
         }
      }
      else if (fvalue !== "" && cvalue === "") {
         if (isNaN(fahrenheit)) {
            error.textContent = fvalue + " is not a number"
         }
         else {
            error.textContent = ""
            let c = convertFtoC(fahrenheit)
            cin.value = c
            if (convertCtoF(c) < 32) {
               img.src = "images/cold.png"
            }
            else if (convertCtoF(c) <= 50) {
               img.src = "images/cool.png"
            }
            else {
               img.src = "images/warm.png"
            }
         }
      }
      else {
         console.log("hi")
      }
   })

   cin.addEventListener("input", function(){
      fin.value = ""
   })

   fin.addEventListener("input", function () {
      cin.value = ""
   })
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9
}
