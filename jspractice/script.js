document.querySelector("button").addEventListener("click", addTask);

function addTask() {
  //getting input from input box
  const taskInput = document.querySelector("input");

  if (taskInput.value.length != 0) {
    //appending li to ul
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    //appending li to ul and del btn to li
    const todo = document.querySelector("ul").appendChild(li);

    //appending del btn to li
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    todo.appendChild(delBtn);

    //appending update btn on li
    const updatebtn = document.createElement("button");
    updatebtn.textContent = "Update";
    todo.appendChild(updatebtn);

    //deleting the todo on click
    delBtn.addEventListener("click", deleteTodo);

    //updating the todo on click
    updatebtn.addEventListener("click", updateTodo);

    taskInput.value = "";
  }
}

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  li.remove();
};

const updateTodo = (e) => {
  const btn = e.target;
  const li = e.target.parentElement;

  if (btn.textContent === "Update") {
    btn.textContent = "Save";

    // Create an input field with the current task text
    var tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.value = li.childNodes[0].textContent;

    //replace that li with input field
    li.replaceChild(tempInput, li.childNodes[0]);
  } else {
    btn.textContent = "Update";

    //create a text node with the current updated text to update li
    const textNode = document.createTextNode(li.childNodes[0].value);

    //replace that input field with updatedLi
    li.replaceChild(textNode, li.childNodes[0]);
  }
};
