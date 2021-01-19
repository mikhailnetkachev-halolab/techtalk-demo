Techtalk: Basic Node.js application

Создание приложения Node.js (First step)

1. Создаёт новый npm-проект;
2. Внутри проекта создаёт исполнительный файл index.js;
   - Почему именно index.js? Это указано в вашем package.json;
3. В файле index.js пишем любой код и инициируем его исполнения с помощью команды node index;

Что такое Node.js?

Это программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения.

Node.js включает в себя набор стандартных библиотек-модулей. Например:

- path, позволяющий выполнять манипуляции с путями (парсить, конкатенировать, генерировать и так далее);
- fs, позволяющий взаимодействовать с файловой системой (создавать, удалять папки и файлы, считывать и изменять содержимое файлов и папок, и так далее);
- events, позволяющий создавать и отслеживать собственные события;
- http, позволяет создать и настроить сервер.

Создание базового сервера (Second step)

1. Создаёт новый сервер;
2. Запускаем сервер;
3. Пробуем перейти по адресу порта, на котором был запущен сервер:
   - Рассматриваем вопросы: почему ничего не произошло? Чего «ожидает» страница?
   - Для чего нужны объекты request и response?
   - Добавляем возможность отследить запрашиваемый url и method;
   - Добавляем ответ сервера на любой запрос;
   - Добавляем возможность перехватить ошибку.
4. Устанавливаем пакет nodemon, чтобы отслеживать изменения в файлах и автоматически перезапускать сервер.
5. Создаёт npm команды: start и dev.

Распознавание запроса и формирование корректного ответа от сервера (Third step)

1. Добавляем в ответ на GET запрос html:
   - Как отправить запрос, не используя JavaScript? Создаём форму;
   - Добавляем status и headers к ответу, позволяющие корректно распознать ответ;
   - Подключаем модули path и fs, чтобы прочесть содержимое файла index.html.
2. Добавляет в ответ на POST запрос JSON:
   - Используя методы req.on(«data», (data) => body.push(data) и req.on(«end», () => …) отвечаем JSON’ом.

Устанвливаем express и реализуем этот же код с помощью ресурсов библиотеки (Fourth step)