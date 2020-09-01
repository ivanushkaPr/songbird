Ссылка на деплой - https://friendly-golick-469ad4.netlify.app/

- **Вёрстка, дизайн, UI: (+30)**
  - минимальная ширина страницы, при которой приложение отображается корректно – 320 рх -[x]
  - внешний вид приложения полностью повторяет демо или является его улучшенной версией -[x]
  
- **Аудиоплеер: (+30)**
  - стандартный: (+10)
  - кастомный, такой же, как в демо приложения, может отличаться по цвету: (+10) 
  - у кастомного аудиоплеера есть регулятор громкости звука: (+10)    
    Для кастомизации аудиоплеера можно использовать библиотеки

- **Контент: (+20)**
  - использование заранее подготовленных данных [birds data](./songbird/birds.js): ( 0 )
  - создание и использование собственной коллекции данных, либо использование подходящего API: (+20)

- **Header: (+20)**
  - правильное отображение текущего счета игры: (+10)
  - индикация текущего вопроса: (+10)
  
- **Блок с вопросом: (+20)**
  - подстановка дефолтного изображения и замена названия птицы на символы (\*\*\*), пока игрок не выберет правильный ответ: (+10)
  - при выборе правильного ответа появляется изображение и название птицы: (+10)

- **Блок с вариантами ответов (названия птиц): (+30)**
  - цветовая индикация правильного/неправильного ответа в виде индикаторов разного цвета рядом с названием птицы: (+20)
  - при клике по названию птицы в блоке с описанием птицы отображается информацию о ней: (+10)   
  Если правильный ответ уже дан, возможность просматривать описания птиц при клике по названию остаётся, цвет индикаторов при этом не изменяется.

- **Блок с описанием птицы: (+30)**
  - пока игрок не кликнул по названию птицы из списка, в блоке выводится короткий текст с предложением послушать плеер и выбрать название птицы, чей голос прозвучал: (+10)
  - при клике по названию птицы из списка, в блоке с описанием птицы появляется актуальная информация о ней: (+20)  
  Информация о птице включает:
    - изображение
    - название (на русском и на латыни)
    - аудиоплеер с записью голоса
    - дополнительное описание птицы.
    
- **Кнопка перехода к следующему вопросу: (+30)**
  - пока не выбран правильный ответ, кнопка не активна, нет возможности перейти к следующему заданию. Активное и неактивное состояние кнопки визуально отличаются, например, активная кнопка имеет зеленый, не активная - серый цвет: (+10)
  - после правильного ответа на последний вопрос, клик по кнопке скрывает блок с вопросом, блок с вариантами ответов и блок с описанием птицы. Появляется сообщение с поздравлением об окончании игры: (+20)  
  Сообщение содержит количество набранных баллов из максимально возможных и кнопку с предложение сыграть ещё раз. 
  
- **Extra scope: (+30)**
  - звуковая индикация правильного/неправильного ответа: (+20)  
    - при выборе правильного или неправильного ответа издаются разные звуковые сигналы
    - при выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться
    - при выборе правильно ответа проигрывание аудиоплеера должно остановиться
  - Поздравление с абсолютной победой, если набрано максимально возможное количество баллов: (+10)  


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts[x]

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
