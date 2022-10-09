const todoinput = document.getElementById("to-do-input");
const allToDoContainer = document.getElementsByClassName("all-todo-container");
const doneContainer = document.getElementsByClassName("done-todos")[0];
function addToDo() {
  if (todoinput.value === "") {
    alert("Please Enter your task");
    return;
  }
  let toDoText = todoinput.value;
  let tododiv = document.createElement("div");
  tododiv.className = "to-do";
  tododiv.innerHTML = `
    ${toDoText} <button class="to-do-remove" >Done</button>
    `;
  allToDoContainer[0].append(tododiv);
  todoinput.value = "";

  let tasks = document.querySelectorAll(".to-do-remove");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      let doneToDo = this.parentNode.firstChild;
      let div = document.createElement("div");
      div.className = "to-do";
      div.innerHTML = `
      ${doneToDo.textContent} <button class="to-do-remove" >Undone</button> `;
      doneContainer.append(div);
      this.parentNode.remove();
    };
  }
}
