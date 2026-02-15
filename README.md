# Boost Auto Landing Page

Сучасний лендинг для сервісу продажу автомобілів з повним супроводом по всій Україні.

## Технології

- **React** - UI бібліотека
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Анімації
- **Lucide React** - Іконки

## Локальна розробка

```bash
# Встановити залежності
npm install

# Запустити dev сервер
npm run dev

# Збілдити для продакшену
npm run build

# Прев'ю продакшен білду
npm run preview
```

## Деплой на GitHub Pages

1. Створіть репозиторій на GitHub
2. Запушить код:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/BoostAuto.git
   git push -u origin main
   ```

3. У налаштуваннях репозиторію:
   - Перейдіть до **Settings** → **Pages**
   - У **Source** оберіть **GitHub Actions**
   - Workflow автоматично запуститься після push

4. Після деплою сайт буде доступний за адресою:
   `https://YOUR_USERNAME.github.io/BoostAuto/`

## Важливо

Якщо ваш репозиторій називається не `BoostAuto`, оновіть `base` в `vite.config.js`:

```js
base: '/YOUR_REPO_NAME/',
```

## Структура проекту

```
BoostAuto/
├── public/          # Статичні файли
├── src/
│   ├── components/  # React компоненти
│   ├── sections/    # Секції лендингу
│   ├── data/        # Дані контенту
│   └── utils/       # Утиліти
└── index.html       # Точка входу
```

## SEO

Проект включає:
- Мета-теги для SEO
- Structured Data (JSON-LD)
- Sitemap.xml
- Robots.txt

## Ліцензія

Private project
