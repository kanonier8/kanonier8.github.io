# Тестовоый проект для SkyPro

Мини SPA с реализацией функционала интернет-магазина "Интерьеры".
Проект состоит из двух основных разделов:

- Главная страница (каталог)
- Страница корзины

Навигация по сайту в шапке сайта. Макет с дизайном проекта можно посмотреть [здесь](https://www.figma.com/file/NBdyWNYPzd2cOvWsiNyjSD/Untitled?node-id=0%3A1).

### Главная страница

Представляет собой список товаров с изображением самого товара, краткой информацией о товаре и цене. Каждый товар можно добавить в __"избранное"__ или в корзину при клике на соответствующую иконку в карточке товара. При добавление товара в корзину всплывает окно, в правом верхнем углу шапки сайта, которое скрывается через 5 секунд.
Каталог товаров можно отсортировать с помощью выпадающего списка в правом верхнем углу под шапкой сайта.


### Страница корзины

В этом разделе отображается список добавленных в корзину товаров со страницы каталога __(главная страница)__. Товары из корзины можно удалить или добавить в избранное. Справа от каждой карточки товара в корзине расположен счетчик с помощью которого можно управлять количеством добавленного товара в корзине. Для оформления заказа реализованная соответствующая форма "Оформления заказа".

## Стек технологий

- Проект собран с помощью [Create React App](https://github.com/facebook/create-react-app).
- React Context для управления состоянием приложения
- Typescript для строгой типизации кода
- SCSS для комфортного написания CSS кода (миксины, вложенные селекторы, переменные, расширения/наследование, фрагментирование/импорты)
- Google Fonts для добавления кастомных шрифтов.

### Что не сделано?

- Не реализован backend для демонстрации работы с сервером и REST API
- Не реализованы тесты

### Резюме

При реализации проекта я отталкивался от идеи использовать как можно меньше сторонних библиотек, так как для реализации функционала описанного в ТЗ вполне достаточно функционала поставляемого в библиотеке React из коробки. Разумеется можно было использовать [Redux](https://redux.js.org/) для управления состоянием и любой из доступных UI фреймворков, но как было сказано выше функционал third party libraries только увеличивают конечный объем бандла и в каких-то случаях усложняют понимание кода. 


## Доступные команды

Ниже приведен список доступных команд поставлямые инструментом *Create React App:*

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
