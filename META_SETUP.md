# Meta Pixel Setup Guide

## Крок 1: Отримайте ваш Pixel ID

1. Перейдіть до [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Створіть новий Pixel або використайте існуючий
3. Скопіюйте ваш Pixel ID (виглядає як `123456789012345`)

## Крок 2: Замініть Pixel ID у коді

### У файлі `index.html`:
Знайдіть рядки:
```javascript
fbq('init', 'YOUR_PIXEL_ID'); // Замініть на ваш Pixel ID
```
та
```html
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
```

Замініть `YOUR_PIXEL_ID` на ваш реальний Pixel ID.

## Крок 3: Перевірка роботи

1. Встановіть розширення [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) для Chrome
2. Відкрийте сайт та перевірте, чи Pixel відстежує події
3. Перевірте в Events Manager, чи події надходять

## Відстежувані події

Сайт автоматично відстежує наступні події:

### Стандартні події Meta:
- **PageView** - при завантаженні сторінки
- **ViewContent** - при перегляді Hero секції
- **Lead** - при кліку на будь-яку кнопку Telegram
- **InitiateCheckout** - при кліку на головну CTA кнопку
- **Contact** - при контакті з сервісом

### Кастомні події:
- **TelegramClick** - клік на Telegram кнопку (з локацією: navbar, hero_primary, hero_secondary, floating_cta, cta_section)
- **CalculatorInteraction** - взаємодія з калькулятором прибутку
- **CustomButtonClick** - клік на кастомні кнопки

## Налаштування конверсій у Meta Ads Manager

1. Перейдіть до [Meta Ads Manager](https://business.facebook.com/adsmanager)
2. Створіть кампанію з оптимізацією на подію **Lead**
3. Оберіть Pixel та подію **Lead** як цільову метрику
4. Meta автоматично оптимізуватиме кампанію для отримання лідів

## Додаткові налаштування

### Відстеження конверсій за значенням
Якщо хочете відстежувати вартість конверсій, оновіть функції в `src/utils/metaPixel.js`:

```javascript
trackLead("Lead Form", 100); // де 100 - вартість ліда в USD
```

### Додавання кастомних подій
Додайте нові події у файл `src/utils/metaPixel.js` та використовуйте їх у компонентах.

## Troubleshooting

- **Pixel не відстежує події**: Перевірте, чи правильно встановлений Pixel ID
- **Події не з'являються в Events Manager**: Зачекайте 10-20 хвилин, події можуть затримуватися
- **Помилки в консолі**: Перевірте, чи правильно підключений скрипт Meta Pixel у `index.html`
