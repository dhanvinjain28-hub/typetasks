// model.ts
let nextId = 1;
// 3. addTask: Appends a new task with status "todo" and a unique id
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
// 4. completeTask: Updates status of task matching id to "done"
export function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
// 5. filterByStatus: Filters tasks by TaskStatus
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// 6. Custom Operation: deleteTask
export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
//# sourceMappingURL=model.js.map