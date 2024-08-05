const textArea = document.getElementById("textArea"),
  taskList = document.getElementById("task-list"),
  task = document.querySelectorAll("#task"),
  taskNote = document.getElementById("taskNote");
checkBox = document.getElementById("checkBox");

taskList.style.display = "none";

function addTask() {
  if (textArea.value == "") {
    return false;
  } else {
    taskList.innerHTML += `
     <div id="task">
        <input type="checkbox" id="checkBox" onclick="taskComp()" >
        <label for="checkBox" id="taskNote">
            ${textArea.value.trim()}
        </label>
        <i class="uil uil-trash-alt" id="delBtn" onclick="delTask()"></i>
    </div>`;
    taskList.style.display = "flex";
    textArea.value = "";
  }
}

function delTask() {
  task.innerHTML=""
}
