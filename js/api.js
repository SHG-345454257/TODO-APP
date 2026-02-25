const API_URL = " https://jsonplaceholder.typicode.com/todos";
// базовый URL для работы с серверным API

export async function fetchSampleTasks() { 
    const res = await fetch(`${API_URL}?_limit=10`); 
    if (!res.ok) throw new Error("Ошибка сервера"); 
    return await res.json();
}
// получение 10 задач с сервера с ропверкой ответа

export async function createTaskOnServer(text) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: text, completed: false, userId: 1 }),
    });
    return await res.json();
}
// отправка запроса для создания новой задачи на сервере

export async function updateTaskOnServer(id, completed) {
    await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
    });
}
// обновление статуса выполнения задачи через патч-запрос

export async function deleteTaskOnServer(id) { 
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });

}
// удаление задачи на сервере