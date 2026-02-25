export const STORAGE_KEY = "todo_tasks";
export const FILTER_KEY = "todo_filter";
// ключи для хранения задач и фильтра в браузере

export const loadTasks = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON. parse(data) : [];
};
// загрузка задач из localStorage

export const saveTasks = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON. stringify(tasks));
};
// сохранение массива задач в localStorage

export const loadFilter = () => sessionStorage.getItem(FILTER_KEY) || "all";
export const saveFilter = (filter) =>
    sessionStorage.setItem(FILTER_KEY, filter);
// загрузка и сохранение выбранного фильтра в sessionStorage