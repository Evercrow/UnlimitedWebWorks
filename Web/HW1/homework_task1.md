**Задача**: на основе сайта yandex.ru:

Определите, на каком протоколе работает сайт.
Проанализируйте структуру страницы сайта.
Внесите не менее 10 изменений на страницу с помощью инструмента разработчика и представьте скриншоты было/стало.
Создайте прототип низкой детализации (дополнительное задание, если на семинаре дошли до задания №8).

1. Смотрим протокол по адресной строке - отображен только сокращенный адрес, просто yandex.ru c замочком, пишет , что "соединение безопасно". Проверим точно, для этого скопируем адрес любой ссылки на внутренний элемент или поддомен сайта(как https://passport.yandex.ru/), например https://yandex.ru/images/ (вкладка "Картинки" под поиском).
видим HTTPS - используется защищенный протокол HTTP.

2. Определим шапку(header). на скрине ниже все, что попадает в разметку \<head>, это и есть шапка.
![шапка до](/Web/HW1/header_yandex_before.jpg)
Изменим несколько элементов:
    1. Цвет текста на красный
    2. Кнопка "Видео" убрана
    3. Поменяем текст кнопки "найти".
    4. Изменен URI иконки корзины на иконку колокольчика.
![шапка после](/Web/HW1/header_yandex_after.jpg)
3. Теперь поле content , или media- ленты у Яндекса. На главной странице это поле подгружается бесконечно.Если судить по тэгам, лента подгружается из Дзэна , все внутри тэга \<zen-app> и infinity-zen__container(намек, сколько можно скроллить). В начале content также расположены виджеты погоды и курсов валют.
![content до](/Web/HW1/yandex_content_before.jpg)
    1. Изменим цвет background на голубой. Изменения не видно.
    2. Поменяем параметр opacity на fill_opacity. Готово,теперь фон голубой.
    3. Сделаем уже боковую панель
    4. Ограничим высоту поля с 99999 до 3000 пикселей. Теперь можем быстро доскроллить до конца поля, и видим, как виджет ленты Дзена начинает вылезать за пределы фона.Обычно мы это даже не заметим, потому-что в браузере автоматом подгружается белый фон(пустая html-страница)
![content после](/Web/HW1/yandex_content_after.jpg)
Пока скроллим, также можно заметить включившийся слева виджет Дзена для управления лентой, и sidebar с рекомендованными каналами Дзена справа. Что примечательно, sidebar справа прикреплен именно к основной media-grid, и после 3000 пикселей перестает отображаться.
4. Подвал (footer) закреплен внизу окна, и всегда отображается.В нем стандартные ссылки на страницы с информацией о сайте/компании.Тэг для него называется media-infinite-footer.
![footer до](/Web/HW1/yandex_footer_before.jpg)
В качестве изменений:   
    1. открепим его от низа окна, чтобы он был привязан к разметке страницы, через параметр position = fixed =>absolute. Видим, что footer переместился в конец content.
    2. Выделим жирным шрифтом "Компания". Если просто редактировать текст ссылки, то тэг будет подменяться другой кодировкой, чтобы не читалось как тэг html.Видно, что тэг не вопринимается языком, а отображается как часть текста.
    Редактировать нужно именно код html.
![footer после](/Web/HW1/yandex_footer_after.jpg)


PS:  Вот [попытка](https://wireframe.cc/SzwFd6) набросать прототип. 
