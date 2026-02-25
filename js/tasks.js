let tasks = [];
// внутренний массив для хранения всех задач
export const initializeTasks = (initialTasks) => { 
    tasks = [...initialTasks];
}
// инициализация массива задач при загрузке приложения
export const getTasks = () => tasks;
// возвращает текущий список задач

export const addTask = (text, priority = "medium") => {
    const task = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        priority: priority,
        createdAt: new Date().toISOString(),
    };
    tasks.push(task);
    return task;
};
// создание новой задачи с уникальным id,датой и приоритетом

export const updatePriority = (id, newPriority) => {
    const task = tasks.find(t => t.id === id);
    if (task) task.priority = newPriority;
};
// изменение приоритета задачи по айди

export const toggleTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
};
// переключение статуса выполнения задачи

export const deleteTask = (id) => {
    tasks = tasks.filter((t) => t.id !== id);
};
// удаление задачи из массива

export const clearCompleted = () => {
    tasks = tasks.filter((t) => !t.completed);
};
// удаление всех выполненных задач

export const getFilteredTasks = (filter) => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed); 
    return tasks;
};
// возвращает задачи в зависимости от выбранного фильтра
