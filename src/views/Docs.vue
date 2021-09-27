<template>
    <div>
        <HuiHeader />
        <HuiSearch />
        <div class="hui-aside">
            <p class="hui-aside-link">Примеры</p>
            <p class="hui-aside-link">Кнопки</p>
            <p class="hui-aside-link">Хедеры</p>
            <p class="hui-aside-link">Стили</p>
        </div>
        <div class="hui-main">
            <p class="hui-header-of-block">
                Введение
            </p>
            <p class="hui-sup-header">
                Начните работу с HuiCSS, самой популярной в мире платформой для создания адаптивных сайтов, ориентированных на мобильные устройства, с jsDelivr и начальной страницей шаблона.
            </p>
            <p class="hui-header-of-block">
                Быстрое начало
            </p>
            <p class="hui-supHeader">
                Хотите быстро добавить HuiCSS в свой проект? Используйте jsDelivr, бесплатную CDN с открытым исходным кодом. Используете менеджер пакетов или вам нужно скачать исходные файлы? Перейдите на страницу загрузок.
            </p>
            <p class="hui-header-of-block">
                CSS
            </p>
            <p class="hui-sup-header">
                Скопируйте и вставьте таблицу стилей в свой перед всеми другими таблицами стилей, чтобы загрузить наш CSS.
            </p>
            <div class="hui-editor" style="height: 115px;">
                <p class="hui-editor-string">
                    link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"><br/>
                </p>
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
            </div>
            <p class="hui-header-of-block">
                JS
            </p>
            <p class="hui-supHeader">
                Многие из наших компонентов требуют использования JavaScript для работы. В частности, для них требуются наши собственные плагины JavaScript и Popper. Поместите один из следующих тегов script> в конце ваших страниц, прямо перед закрывающим тегом /body>, чтобы включить их.
            </p>
            <p class="hui-header-of-block">
                пакет
            </p>
            <p class="hui-sup-header">
                Включите каждый плагин и зависимости Bootstrap JavaScript в один из двух наших пакетов. Оба bootstrap.bundle.js и bootstrap.bundle.min.js включают Popper для наших всплывающих подсказок и всплывающих окон. Для получения дополнительной информации о том, что включено в Bootstrap, см. Раздел нашего содержания.
            </p>
            <div class="hui-editor" style="height: 215px;">
                <p class="hui-editor-string">
                    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">/script><br />
                </p>
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
            </div>
            <p class="hui-header-of-block">
                Отдельный
            </p>
            <p class="hui-sup-header">
                Если вы решите использовать отдельные скрипты, сначала должен появиться Popper (если вы используете всплывающие подсказки или всплывающие подсказки), а затем наши плагины JavaScript.
            </p>
            <div class="hui-editor" style="height: 215px;">
                <p class="hui-editor-string">
                    script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous">/script><br />
                    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous">/script><br />
                </p>
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
            </div>
            <p class="hui-header-of-block">
                Модули
            </p>
            <p class="hui-sup-header">
                Если вы используете script type = "module">, обратитесь к разделу, посвященному использованию Bootstrap в качестве модуля.
            </p>
            <p class="hui-header-of-block">
                Компоненты
            </p>
            <p class="hui-sup-header">
                Интересно, какие компоненты явно требуют нашего JavaScript и Popper? Щелкните ссылку "Показать компоненты" ниже. Если вы совсем не уверены в общей структуре страницы, продолжайте читать, чтобы найти образец шаблона страницы.
            </p>
            <p class="hui-sup-header">
                Показать компоненты, требующие JavaScript
            </p>
            <p class="hui-header-of-block">
                Стартовый шаблон
            </p>
            <p class="hui-sup-header">
                Убедитесь, что ваши страницы настроены в соответствии с последними стандартами дизайна и разработки. Это означает использование документа HTML5 и включение метатега области просмотра для правильного реагирования. Соберите все это вместе, и ваши страницы должны выглядеть так:
            </p>
            <div class="hui-editor" style="height: 575px;">
                <p class="hui-editor-string">
                    !doctype html><br />
                    html lang="en"><br />
                    head><br />
                        !-- Required meta tags --><br />
                        meta charset="utf-8"><br />
                        meta name="viewport" content="width=device-width, initial-scale=1"><br />
                    <br />
                        !-- HuiCSS CSS --><br />
                        link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"><br />
                    <br />
                        title>Hello, world!/title><br />
                    /head><br />
                    body><br />
                        h1>Hello, world!/h1><br />
                    <br />
                        <!-- Optional JavaScript; choose one of the two! --><br />
                    <br />
                        <!-- Option 1: HuiCSS Bundle with Popper --><br />
                        script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">/script><br />
                        <!-- Option 2: Separate Popper and HuiCSS JS --><br />
                        <!--<br />
                        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script><br />
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script><br />
                        --><br />
                    /body><br />
                    /html><br />
                </p>
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
            </div>
            <p class="hui-sup-header">
                Чтобы узнать о дальнейших шагах, посетите документацию по макету или наши официальные примеры, чтобы начать макет содержания и компонентов вашего сайта.
            </p>
            <p class="hui-header-of-block">
                Важные глобалы
            </p>
            <p class="hui-sup-header">
                HuiCSS использует несколько важных глобальных стилей и настроек, о которых вам нужно знать при его использовании, и все они почти исключительно нацелены на нормализацию кроссбраузерных стилей. Давайте погрузимся.
            </p>
            <p class="hui-header-of-block">
                HTML5 doctype
            </p>
            <p class="hui-supHeader">
                HuiCSS требует использования документа типа HTML5. Без него вы увидите несколько забавных незавершенных стилей, но его включение не должно вызывать каких-либо серьезных сбоев.
            </p>
            <div class="hui-editor" style="height: 125px;">
                <p class="hui-editor-string">
                    !doctype html><br />
                    html lang="en"><br />
                    ...<br />
                    /html><br />
                </p>
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
            </div>
            <p class="hui-header-of-block">
                Адаптивный метатег
            </p>
            <p class="hui-sup-header">
                HuiCSS разрабатывается в первую очередь для мобильных устройств. Это стратегия, при которой мы сначала оптимизируем код для мобильных устройств, а затем масштабируем компоненты по мере необходимости с помощью медиа-запросов CSS. Чтобы обеспечить правильный рендеринг и сенсорное масштабирование для всех устройств, добавьте метатег адаптивного окна просмотра в свой.
            </p>
            <div class="hui-editor" style="height: 125px;">
                <p class="hui-editor-string">
                    meta name="viewport" content="width=device-width, initial-scale=1">
                </p>
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
            </div>
            <p class="hui-sup-header">
                Вы можете увидеть пример этого в действии в стартовом шаблоне.
            </p>
            <p class="hui-header-of-block">
                Размер коробки
            </p>
            <p class="hui-sup-header">
                Для более простого изменения размера в CSS мы переключаем значение глобального размера блока с поля содержимого на поле границы. Это гарантирует, что заполнение не влияет на окончательную вычисленную ширину элемента, но может вызвать проблемы с некоторым сторонним программным обеспечением, таким как Карты Google и Система пользовательского поиска Google.
            </p>
            <p class="hui-sup-header">
                В редких случаях, когда вам нужно переопределить его, используйте что-то вроде следующего:
            </p>
            <div class="hui-editor" style="height: 125px;">
                <p class="hui-editor-string">
                    .selector-for-some-widget {<br/>
                        box-sizing: content-box;<br/>
                    }<br/>
                </p>
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                
            </div>
            <p class="hui-sup-header">
                В приведенном выше фрагменте все вложенные элементы, включая сгенерированный контент с помощью :: before и :: after, унаследуют указанный размер блока для этого .selector-for-some-widget.
            </p>
            <p class="hui-sup-header">
                Узнайте больше о блочной модели и ее размерах на сайте CSS Tricks.
            </p>
            <p class="hui-header-of-block">
                Перезагрузить
            </p>
            <p class="hui-sup-header">
                Для улучшенного кроссбраузерного рендеринга мы используем Reboot, чтобы исправить несоответствия между браузерами и устройствами, обеспечивая при этом несколько более самоуверенный сброс общих элементов HTML.
            </p>
            <p class="hui-header-of-block">
                Сообщество
            </p>
            <p class="hui-sup-header">
                Будьте в курсе разработки Bootstrap и обращайтесь к сообществу с помощью этих полезных ресурсов.
            </p>
            <ul>
                <li>
                    Прочтите официальный блог HuiCSS и подпишитесь на него.
                </li>
                <li>
                    Присоединяйтесь к официальной комнате Slack.
                </li>
                <li>
                    Общайтесь с другими людьми в IRC. На сервере irc.libera.chat в канале #bootstrap.
                </li>
                <li>
                    Справку по реализации можно найти на сайте Stack Overflow (помечено как bootstrap-5).
                </li>
                <li>
                    Разработчикам следует использовать ключевое слово HuiCSS в пакетах, которые изменяют или расширяют функциональность Bootstrap при распространении через npm или аналогичные механизмы доставки для максимальной обнаруживаемости.
                </li>
            </ul>
            <p class="hui-sup=header">
                Вы также можете подписаться на @getbootstrap в Твиттере, чтобы следить за последними сплетнями и потрясающими музыкальными клипами.
            </p>
        </div>
        <HuiFooter />
    </div>
</template>

<script>
import HuiHeader from "@/components/HuiHeader.vue"
import HuiSearch from "@/components/HuiSearch.vue"
import HuiFooter from "@/components/HuiFooter.vue"

export default {
    name: 'Docs',
    components: {
        HuiHeader,
        HuiSearch,
        HuiFooter
    }
}
</script>

<style>

</style>