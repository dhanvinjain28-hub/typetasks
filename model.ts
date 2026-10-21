// model.ts

// 1. TaskStatus literal union type
export type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task interface
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// 3. addTask: Appends a new task with status "todo" and a unique id
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

// 4. completeTask: Updates status of task matching id to "done"
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 5. filterByStatus: Filters tasks by TaskStatus
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 6. Custom Operation: deleteTask
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}
