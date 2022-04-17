let addToDo = document.querySelector(".add");
let inputField = document.getElementById("todo");
let toDoContainer = document.querySelector(".todo-container");

addToDo.addEventListener("click", function () {
  const value = inputField.value;
  if (value) {
    const element = document.createElement("article");
    element.classList.add("todo-list");
    element.innerHTML = `<p class="title">${value}</p>
        <i class="fas fa-ban delete"></i>`;
    toDoContainer.appendChild(element);

    inputField.value = "";

    const del = element.querySelector(".delete");
    del.addEventListener("click", function () {
      toDoContainer.removeChild(element);
    });

    element.addEventListener("click", function () {
      const title = element.querySelector(".title");
      if (!title.innerText.includes(" (complete)")) {
        title.innerText += " (complete)";
        element.classList.add("todo-list-complete");
      } else {
        element.classList.remove("todo-list-complete");
        title.innerText = title.innerText.replace(" (complete)", "");
      }
    });
  }
});

inputField.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addToDo.click();
  }
});
