const inputEl = document.getElementById("todo-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

addBtn.addEventListener("click", () => {
  const task = inputEl.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    inputEl.value = "";
  }
});
