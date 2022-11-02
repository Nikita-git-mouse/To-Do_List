  # TO DO on Node js with Express and pSQL 
This project about internet check-list on express without front-end...or..who knows

In Terminal "**cd server**" -//- "**npm run dev**" - **START SERVER** 


#### Описание проекта:
Возможность составление пользователем списков событий и добавления к ним необходимое количество задач
Присутствует следующий функционал:
+ Авторизация/регистрация по JWT токену(имеется refresh token).
+ CRUD для Событий и Задач к ним.


В ходе разработки было использован **Express**, фреймворк web-приложений для Node.js.В качестве базы данных была использована объектно-реляционная система управления базами данных **PostgreSQL**. Все **secret-значения** были вынесены в файл **.env**.В качестве ORM использован **Sequelize**. В ходе разработки был использован язык **JavaScript**. Тестирование приложения происходило в приложении **Postman**.

Стартовым файлом являеться index.ts в папке src.

**Маршрутизация**
1. **User/...**
   Запросы, которые были реализованы:
+ /registration - добавление нового пользователя - Post запрос
+ /login - авторизация пользователя - Post запрос
+ /auth - проверка авторизованность пользователя, есть он в нашей базе или нет(проверка по токену) - Get запрос
  Использованные схемы:
+ **User:**
     ```ts
       email: { required: true, type: String, unique: true }
       password: { required: true, type: String }
     ```
+ **Token:**
   ```ts
     refreshToken: { required: true, type: String }
     userId: { required: true, type: Types.ObjectId }
   ```
2. **Note/...(событие):**
   Запросы, которые были реализованы:
    + / - добавление события - Post запрос, userId - body параметр
    + / - Получение всех событий пользователя - Get запрос, userId - query параметр
    + /id - получение опредленного события - Get запрос
      **Memo/...(задача)**
      Запросы, которые были реализованы:
    + / - добавление залачи - Post запрос, noteId - body параметр
    + / - Получение всех задач события - Get запрос, noteId - query параметр
      Использованные схемы:

  **Memo && Note:**
  ```ts
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
  ```

**Зависимости**
 ```ts
        User.hasMany(Событие)
        Событие.belongsTo(User)
        
        Событие.hasMany(Задача)
        Задача.belongsTo(Событие)
 ```
