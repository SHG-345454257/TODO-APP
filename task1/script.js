const resultDiv = document.getElementById("result");

async function getAllPosts() {
  resultDiv.innerHTML = 
    '<p class="text-center text-gray-500 animate-pulse">Загрузка постов...</p>';

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // делаем запрос к API 
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const posts = await res.json();
    // проверяем статус ответа и преобразуем JSON в объект 
    
    let html = `<h3 class="text-xl font-bold mb-4">Получено ${posts.length} постов (показываем первые 10)</h3>`;

    posts.slice(0, 10).forEach((post) => {
        // показываем первые 10 постов с помощью обрезки. каждый пост отображается следующим образом 
      html += 
        `<div class="mb-6 p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/30">
          <h4 class="text-lg font-semibold mb-2">${post.title}</h4>
          <p class="text-gray-700 dark:text-gray-300">${post.body}</p>
          <div class="mt-3 text-sm text-gray-500 dark:text-gray-400">
            userId: ${post.userId} • postId: ${post.id}
          </div>
        </div>`;
    });

    resultDiv.innerHTML = html;
  } catch (err) {
    resultDiv.innerHTML = 
      `<p class="text-red-600 font-medium">Ошибка: ${err.message}</p>
      <p class="text-sm text-gray-500 mt-2">Проверьте консоль (F12) для деталей</p>`;
    console.error(err);
  }
//   если запрос не удался выскочит сообщение об ошибке
}

async function getPost5() {
  resultDiv.innerHTML = '<p class="text-center text-gray-500 animate-pulse">Загрузка поста №5...</p>';

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
    // асинхронный запрос к API для получения данных поста 5
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    // проверяем статус ответа

    const post = await res.json();

    resultDiv.innerHTML = `
      <h3 class="text-xl font-bold mb-4">Пост №5</h3>
      <div class="p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/30">
        <h4 class="text-lg font-semibold mb-2">${post.title}</h4>
        <p class="text-gray-700 dark:text-gray-300">${post.body}</p>
        <div class="mt-3 text-sm text-gray-500 dark:text-gray-400">
            userId: ${post.userId} • postId: ${post.id}
        </div>
      </div>
    `;
    // настройка внешнего вида
  } catch (err) {
    resultDiv.innerHTML = `<p class="text-red-600 font-medium">Ошибка: ${err.message}</p>`;
    console.error(err);
  }
//   если не ок, генерируем ошибку
}

async function createPost() {
  const titleEl = document.getElementById("title");
  const bodyEl = document.getElementById("body");

  const title = titleEl.value.trim() || "Тестовый заголовок";
  const body = bodyEl.value.trim() || "Тестовый текст поста";

  resultDiv.innerHTML = 
    '<p class="text-center text-gray-500 animate-pulse">Отправка POST-запроса...</p>';

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, userId: 777 }),
    });
    // отправляем запрос с указанными данными

    const data = await res.json();
    // преобразование в json
    
    // результат отображается в таком виде:
    resultDiv.innerHTML = `
        <h3 class="text-xl font-bold mb-4 text-green-600">POST-запрос успешен!</h3>
        <div class="p-5 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/20">
            <p><strong>Статус:</strong> ${res.status} ${res.ok ? "(OK)" : ""}</p>
            <p><strong>Новый id (симуляция):</strong> ${data.id}</p>
            <p><strong>Заголовок:</strong> ${data.title}</p>
            <p class="mt-3 text-sm text-gray-500">Тело: ${data.body.substring(0, 120)}${data.body.length > 120 ? "..." : ""}</p>
        </div>
    `;
    // заголовок и первые 120 символов текста
  } catch (err) {
    resultDiv.innerHTML = `<p class="text-red-600 font-medium">Ошибка при создании поста: ${err.message}</p>`;
    console.error(err);
  }
//   если запрос не удался выводится сообщение об ошибке
}
