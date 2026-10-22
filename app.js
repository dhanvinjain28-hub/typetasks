import { addTask, completeTask, filterByStatus, deleteTask } from "./model.js";
let tasks = [];
let currentFilter = "all";
// DOM Elements with explicit TypeScript casting
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
const filterBtns = document.querySelectorAll(".filter-btn");
// Render UI Function
function render() {
    listEl.innerHTML = "";
    const filteredTasks = currentFilter === "all"
        ? tasks
        : filterByStatus(tasks, currentFilter);
    filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task";
        const info = document.createElement("span");
        info.textContent = task.title;
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = task.status;
        info.appendChild(badge);
        const actions = document.createElement("div");
        // Complete / Advance Action
        if (task.status !== "done") {
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Done ✓";
            completeBtn.onclick = () => {
                tasks = completeTask(tasks, task.id);
                render();
            };
            actions.appendChild(completeBtn);
        }
        // Delete Action
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✕";
        deleteBtn.onclick = () => {
            tasks = deleteTask(tasks, task.id);
            render();
        };
        actions.appendChild(deleteBtn);
        li.appendChild(info);
        li.appendChild(actions);
        listEl.appendChild(li);
    });
}
// Add Task Handler
addBtn.onclick = () => {
    const title = titleInput.value.trim();
    if (!title)
        return;
    tasks = addTask(tasks, title);
    titleInput.value = "";
    render();
};
// Filter Handler
filterBtns.forEach((btn) => {
    btn.onclick = () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        render();
    };
});
render();
//# sourceMappingURL=app.js.map