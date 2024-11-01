document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");

    // Function to add a new task
    function addTask() {
        const taskText = todoInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;

            // Add a click event to toggle task completion
            taskSpan.addEventListener("click", () => {
                taskSpan.classList.toggle("completed");
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                todoList.removeChild(li);
            });

            li.appendChild(taskSpan);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = ""; // Clear input
        }
    }

    // Add task on button click
    addButton.addEventListener("click", addTask);

    // Add task on pressing Enter key
    todoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
