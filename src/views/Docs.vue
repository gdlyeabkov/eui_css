<template>
    <div>
        <eui_cssHeader />
        <eui_cssSearch />
        <eui_cssAside />
        <div class="eui_css-main">
            <p class="eui_css-header-of-block">
                Введение
            </p>
            <p class="eui_css-sup-header">
                Начните работу с eui_cssCSS, самой популярной в мире платформой для создания адаптивных сайтов, ориентированных на мобильные устройства, с jsDelivr и начальной страницей шаблона.
            </p>
            <p class="eui_css-header-of-block">
                Быстрое начало
            </p>
            <p class="eui_css-supHeader">
                Хотите быстро добавить eui_cssCSS в свой проект? Используйте jsDelivr, бесплатную CDN с открытым исходным кодом. Используете менеджер пакетов или вам нужно скачать исходные файлы? Перейдите на страницу загрузок.
            </p>
            <p class="eui_css-header-of-block">
                CSS
            </p>
            <p class="eui_css-sup-header">
                Скопируйте и вставьте таблицу стилей в свой перед всеми другими таблицами стилей, чтобы загрузить наш CSS.
            </p>
            <div class="eui_css-editor" style="height: 115px;">
                <!-- link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"><br /> -->
                <p class="eui_css-editor-string">
                    {{ '<\link href="https://eui_csscss.herokuapp.com/api/cdn/eui_css.min.css" rel="stylesheet"' }} />
                    <!-- {{ '<\link href="http://localhost:4000/api/cdn/eui_css.min.css" rel="stylesheet"' }} /> -->
                </p>
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
            </div>
            <p class="eui_css-header-of-block">
                JS
            </p>
            <p class="eui_css-supHeader">
                Многие из наших компонентов требуют использования JavaScript для работы. В частности, для них требуются наши собственные плагины JavaScript и Popper. Поместите один из следующих тегов script> в конце ваших страниц, прямо перед закрывающим тегом /body>, чтобы включить их.
            </p>
            <p class="eui_css-header-of-block">
                пакет
            </p>
            <p class="eui_css-sup-header">
                Включите каждый плагин и зависимости eui_cssCSS JavaScript в один из двух наших пакетов. Оба eui_cssCSS.bundle.js и bootstrap.bundle.min.js включают Popper для наших всплывающих подсказок и всплывающих окон. Для получения дополнительной информации о том, что включено в Bootstrap, см. Раздел нашего содержания.
            </p>
            <div class="eui_css-editor" style="height: 215px;">
                <p class="eui_css-editor-string">
                    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">/script><br />
                </p>
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
            </div>
            <p class="eui_css-header-of-block">
                Отдельный
            </p>
            <p class="eui_css-sup-header">
                Если вы решите использовать отдельные скрипты, сначала должен появиться Popper (если вы используете всплывающие подсказки или всплывающие подсказки), а затем наши плагины JavaScript.
            </p>
            <div class="eui_css-editor" style="height: 215px;">
                <p class="eui_css-editor-string">
                    script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous">/script><br />
                    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous">/script><br />
                </p>
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
            </div>
            <p class="eui_css-header-of-block">
                Модули
            </p>
            <p class="eui_css-sup-header">
                Если вы используете script type = "module">, обратитесь к разделу, посвященному использованию Bootstrap в качестве модуля.
            </p>
            <p class="eui_css-header-of-block">
                Компоненты
            </p>
            <p class="eui_css-sup-header">
                Интересно, какие компоненты явно требуют нашего JavaScript и Popper? Щелкните ссылку "Показать компоненты" ниже. Если вы совсем не уверены в общей структуре страницы, продолжайте читать, чтобы найти образец шаблона страницы.
            </p>
            <p class="eui_css-sup-header">
                Показать компоненты, требующие JavaScript
            </p>
            <p class="eui_css-header-of-block">
                Стартовый шаблон
            </p>
            <p class="eui_css-sup-header">
                Убедитесь, что ваши страницы настроены в соответствии с последними стандартами дизайна и разработки. Это означает использование документа HTML5 и включение метатега области просмотра для правильного реагирования. Соберите все это вместе, и ваши страницы должны выглядеть так:
            </p>
            <div class="eui_css-editor" style="height: 575px;">
                <p class="eui_css-editor-string">
                    !doctype html><br />
                    html lang="en"><br />
                    head><br />
                        !-- Required meta tags --><br />
                        meta charset="utf-8"><br />
                        meta name="viewport" content="width=device-width, initial-scale=1"><br />
                    <br />
                        !-- eui_cssCSS CSS --><br />
                        link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"><br />
                    <br />
                        title>Hello, world!/title><br />
                    /head><br />
                    body><br />
                        h1>Hello, world!/h1><br />
                    <br />
                        <!-- Optional JavaScript; choose one of the two! --><br />
                    <br />
                        <!-- Option 1: eui_cssCSS Bundle with Popper --><br />
                        script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">/script><br />
                        <!-- Option 2: Separate Popper and eui_cssCSS JS --><br />
                        <!--<br />
                        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script><br />
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script><br />
                        --><br />
                    /body><br />
                    /html><br />
                </p>
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
            </div>
            <p class="eui_css-sup-header">
                Чтобы узнать о дальнейших шагах, посетите документацию по макету или наши официальные примеры, чтобы начать макет содержания и компонентов вашего сайта.
            </p>
            <p class="eui_css-header-of-block">
                Важные глобалы
            </p>
            <p class="eui_css-sup-header">
                eui_cssCSS использует несколько важных глобальных стилей и настроек, о которых вам нужно знать при его использовании, и все они почти исключительно нацелены на нормализацию кроссбраузерных стилей. Давайте погрузимся.
            </p>
            <p class="eui_css-header-of-block">
                HTML5 doctype
            </p>
            <p class="eui_css-supHeader">
                eui_cssCSS требует использования документа типа HTML5. Без него вы увидите несколько забавных незавершенных стилей, но его включение не должно вызывать каких-либо серьезных сбоев.
            </p>
            <div class="eui_css-editor" style="height: 125px;">
                <p class="eui_css-editor-string">
                    !doctype html><br />
                    html lang="en"><br />
                    ...<br />
                    /html><br />
                </p>
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
            </div>
            <p class="eui_css-header-of-block">
                Адаптивный метатег
            </p>
            <p class="eui_css-sup-header">
                eui_cssCSS разрабатывается в первую очередь для мобильных устройств. Это стратегия, при которой мы сначала оптимизируем код для мобильных устройств, а затем масштабируем компоненты по мере необходимости с помощью медиа-запросов CSS. Чтобы обеспечить правильный рендеринг и сенсорное масштабирование для всех устройств, добавьте метатег адаптивного окна просмотра в свой.
            </p>
            <div class="eui_css-editor" style="height: 125px;">
                <p class="eui_css-editor-string">
                    meta name="viewport" content="width=device-width, initial-scale=1">
                </p>
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
            </div>
            <p class="eui_css-sup-header">
                Вы можете увидеть пример этого в действии в стартовом шаблоне.
            </p>
            <p class="eui_css-header-of-block">
                Размер коробки
            </p>
            <p class="eui_css-sup-header">
                Для более простого изменения размера в CSS мы переключаем значение глобального размера блока с поля содержимого на поле границы. Это гарантирует, что заполнение не влияет на окончательную вычисленную ширину элемента, но может вызвать проблемы с некоторым сторонним программным обеспечением, таким как Карты Google и Система пользовательского поиска Google.
            </p>
            <p class="eui_css-sup-header">
                В редких случаях, когда вам нужно переопределить его, используйте что-то вроде следующего:
            </p>
            <div class="eui_css-editor" style="height: 125px;">
                <p class="eui_css-editor-string">
                    .selector-for-some-widget {<br/>
                        box-sizing: content-box;<br/>
                    }<br/>
                </p>
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                
            </div>
            <p class="eui_css-sup-header">
                В приведенном выше фрагменте все вложенные элементы, включая сгенерированный контент с помощью :: before и :: after, унаследуют указанный размер блока для этого .selector-for-some-widget.
            </p>
            <p class="eui_css-sup-header">
                Узнайте больше о блочной модели и ее размерах на сайте CSS Tricks.
            </p>
            <p class="eui_css-header-of-block">
                Перезагрузить
            </p>
            <p class="eui_css-sup-header">
                Для улучшенного кроссбраузерного рендеринга мы используем Reboot, чтобы исправить несоответствия между браузерами и устройствами, обеспечивая при этом несколько более самоуверенный сброс общих элементов HTML.
            </p>
            <p class="eui_css-header-of-block">
                Сообщество
            </p>
            <p class="eui_css-sup-header">
                Будьте в курсе разработки Bootstrap и обращайтесь к сообществу с помощью этих полезных ресурсов.
            </p>
            <ul>
                <li>
                    Прочтите официальный блог eui_cssCSS и подпишитесь на него.
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
                    Разработчикам следует использовать ключевое слово eui_cssCSS в пакетах, которые изменяют или расширяют функциональность Bootstrap при распространении через npm или аналогичные механизмы доставки для максимальной обнаруживаемости.
                </li>
            </ul>
            <p class="eui_css-sup=header">
                Вы также можете подписаться на @getbootstrap в Твиттере, чтобы следить за последними сплетнями и потрясающими музыкальными клипами.
            </p>
        </div>
        <eui_cssFooter />
    </div>
</template>

<script>
import eui_cssHeader from "@/components/eui_cssHeader.vue"
import eui_cssSearch from "@/components/eui_cssSearch.vue"
import eui_cssAside from "@/components/eui_cssAside.vue"
import eui_cssFooter from "@/components/eui_cssFooter.vue"

export default {
    name: 'Docs',
    components: {
        eui_cssHeader,
        eui_cssSearch,
        eui_cssAside,
        eui_cssFooter
    }
}
</script>

<style>

</style>