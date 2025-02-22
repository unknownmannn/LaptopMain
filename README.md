# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# LapShop
LapShop - это веб-приложение для управления и отображения ноутбуков в интернет-магазине. Проект включает три основные части:

- **Пользовательский интерфейс (Frontend)** – витрина магазина с каталогом ноутбуков.
- **Панель администратора (Admin Panel)** – интерфейс управления товарами.
- **Серверная часть (Backend)** – API для работы с данными, аутентификации и хранения информации.

## Возможности

### Пользовательский интерфейс
- Каталог ноутбуков с описанием и изображениями.
- Адаптивный дизайн для удобства на разных устройствах.

### Панель администратора
- Авторизация с логином и паролем.
- Управление товарами: добавление, редактирование и удаление.
- Таблица с ноутбуками и инструментами администрирования.

### Серверная часть
- REST API для взаимодействия с базой данных.
- Авторизация и защита данных.
- Интеграция с MongoDB.
- Хранение изображений в облачном сервисе (например, AWS S3).

## Используемые технологии

### Frontend
- **React.js**
- **React Router**
- **Axios**
- **React Slider**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (аутентификация)**
- **Nodemailer (уведомления по email)**
- **AWS S3 (хранение изображений)**

## Установка и запуск

### Предварительные требования
Перед установкой убедитесь, что у вас установлены:
- **Node.js**
- **MongoDB**

### Клонирование репозитория
```sh
 git clone https://github.com/unknownmannn/LapShopMain.git
 git clone https://github.com/unknownmannn/LapShopAdmin.git
 git clone https://github.com/unknownmannn/LapShopBackend.git
```

Перейдите в корневую папку проекта:
```sh
cd lapshop
```

### Установка зависимостей
#### Для Frontend
```sh
cd frontend
npm install
```

#### Для Backend
```sh
cd backend
npm install
```

### Настройка переменных окружения
Создайте `.env` файл в папке `backend` и добавьте в него:
```env
MONGO_SRV=mongodb+srv://your_username:your_password@yourcluster.mongodb.net/laptops
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
PORT=5000
```

### Запуск проекта
#### Запуск Backend
```sh
cd backend
npm start
```

#### Запуск Frontend (витрина магазина и админ-панель)
```sh
cd frontend
npm start
```

## Использование
- Главная страница доступна по адресу: **http://localhost:5050**
- Панель администратора: **http://localhost:3000/admin**
- API работает на: **http://localhost:5000**

