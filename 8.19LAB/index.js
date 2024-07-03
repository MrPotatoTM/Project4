window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let addButton = document.getElementById("add-btn")
   addButton.addEventListener("click", addBtnClick)
   
   let newTask = document.getElementById("new-task")
   newTask.addEventListener("keyup", keyupHandler)
}

function keyupHandler(event) {
   if (event.key == "Enter") {
      addBtnClick()
   }
}

function addBtnClick() {
   let newTask = document.getElementById("new-task")
   if(newTask.value.trim() === "") {
      //do nothing
   }
   else {
      addTask(newTask.value)
   }
   newTask.value = ""
   newTask.focus()
}

function addTask(task) {
   let li = document.createElement("li")
   li.innerHTML = "<span class=\"task-text\">" + task + "</span><button class=\"done-btn\">&#10006;</button>"
   let ol = document.querySelector("ol")
   ol.appendChild(li)

   let doneButton = document.querySelectorAll(".done-btn")
   let lastButton = doneButton.length - 1
   doneButton[lastButton].addEventListener("click", removeTask)
}

function removeTask(event) {
   let liParent = event.target.parentNode
   let olParent = liParent.parentNode
   olParent.removeChild(liParent)
}
