window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let addButton = document.getElementById("add-btn")
   addButton.addEventListener("click", addBtnClick)
   
}

function addBtnClick() {
   let newTask = document.getElementById("new-task")
   addTask(newTask.value)
}

function addTask(task) {
   let li = document.createElement("li")
   li.innerHTML = "<span class=\"task-text\">" + task + "</span><button class=\"done-btn\">&#10006;</button>"
   let ol = document.querySelector("ol")
   ol.appendChild(li)
}

function removeTask(event) {
   // TODO: Complete the function
    
}
