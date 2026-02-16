// Tasks storage
let tasks = [];
let nextId = 1;

const addTask = (title) => {
  tasks.push({
    id: nextId++,
    title,
    status: "pending",
  });
};

const getAllTasks = () => {
  console.table(tasks.map(t => ({ ...t })));
};

const completeTask = (id) => {
  const task = tasks.find(t => t.id === id);
  if (task) task.status = "completed";
};

const deleteTask = (id) => {
  tasks = tasks.filter(t => t.id !== id);
};

// ---- Function Calls ----
addTask("Learn JS");
addTask("Build Task Manager");

getAllTasks();

completeTask(1);
getAllTasks();

deleteTask(2);
getAllTasks();
