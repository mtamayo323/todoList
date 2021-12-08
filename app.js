document.addEventListener("DOMContentLoaded", function () {
  let toDo = document.querySelector("#newTodoForm");
  let list = document.querySelector("#todoList");

  toDo.addEventListener("submit", function (e) {
    e.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.querySelector("#task").value;

    list.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    toDo.reset();
  });

  list.addEventListener("click", function (e) {
    const targetTag = e.target.tagName.toLowerCase();
    if (targetTag === "li") {
      e.target.style.textDecoration = "line-thorugh";
    } else if (targetTag === "button") {
      e.target.parentNode.remove();
    }
  });
});
