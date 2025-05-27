🚀 Space Defender

Интерактивная мини-игра с анимированным звездным фоном, созданная на React. Игрок начинает с главного меню и может запустить игру, перейти к настройкам или выйти.

📦 Стек технологий

    React

    React Hooks (useState, useCallback)

    tsparticles / react-tsparticles — для звездного анимированного фона

    SCSS — стилизация интерфейса

📂 Структура проекта

/src
  /components
    GameMenu.jsx
    GameCanvas.jsx
    StarfieldBackground.jsx
  /styles
    GameMenu.scss
    GameCanvas.scss
    Starfield.scss
  App.jsx
  index.scss

🔧 Установка и запуск

    Клонируй репозиторий:

git clone https://github.com/your-username/space-defender.git
cd space-defender

Установи зависимости:

npm install

Запусти проект:

    npm run dev

    Используется Vite для быстрого запуска и сборки (предполагается, что vite уже настроен).

✨ Функции

    Анимированный звёздный фон (на основе tsparticles)

    Главное меню с кнопками:

        «Начать игру»

        «Настройки»

        «Выход»

    Переключение экранов без перезагрузки

🔮 Планы на будущее

    Реализация логики игры на экране GameCanvas

    Добавление счётчиков, уровней и врагов

    Поддержка звуков и музыки

🛠️ Установка tsparticles (если не установлено) (test)

npm install react-tsparticles tsparticles
