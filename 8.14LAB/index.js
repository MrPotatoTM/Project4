function parseScores(scoresString) {
   return scoresString.split(" ")

}

function buildDistributionArray(scoresArray) {
   let gradeArray = [0,0,0,0,0]
   for (let i = 0; i < scoresArray.length; i++) {
      if(scoresArray[i] >= 90)
      {
         gradeArray[0]++
      }
      else if (scoresArray[i] >= 80) {
         gradeArray[1]++
      }
      else if (scoresArray[i] >= 70) {
         gradeArray[2]++
      }
      else if (scoresArray[i] >= 60) {
         gradeArray[3]++
      }
      else {
         gradeArray[4]++
      }
   }
   return gradeArray
}

function setTableContent(userInput) {
   let scores = parseScores(userInput)
   let scoresArray = buildDistributionArray(scores)
   let firstRow = document.getElementById("first-row")
   let thirdRow = document.getElementById("third-row")

   for(let i = 0; i < scoresArray.length; i++) {
      let firstRowTD = document.createElement("td")
      let barHeight = scoresArray[i] * 10
      firstRowTD.innerHTML = "<div style=\"height:" + barHeight + "px\" class = \"bar" + (i) + "\"></div>"
      firstRow.appendChild(firstRowTD)

      let thirdRowTD = document.createElement("td")
      thirdRowTD.innerText = scoresArray[i]
      thirdRow.appendChild(thirdRowTD)
   }
}

// TODO: Change the arguments for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
