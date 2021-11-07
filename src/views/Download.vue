<template>
    <div>
        <HuiHeader />
        <div class="hui-aside">
            <div @click="" style="display: flex;">
                <span v-if="true" style="align-self: center;" class="material-icons">
                    chevron_right
                </span>
                <span v-else style="align-self: center;" class="material-icons">
                    expand_more
                </span>
                <p class="hui-aside-link">Примеры</p>
            </div>
            <div style="display: flex;">
                <span style="align-self: center;" class="material-icons">
                    chevron_right
                </span>
                <p class="hui-aside-link">Кнопки</p>
            </div>
            <div style="display: flex;">
                <span style="align-self: center;" class="material-icons">
                    chevron_right
                </span>
                <p class="hui-aside-link">Хедеры</p>
            </div>
            <div style="display: flex;">
                <span style="align-self: center;" class="material-icons">
                    chevron_right
                </span>
                <p class="hui-aside-link">Стили</p>
            </div>
        </div>
        <div class="hui-main">
            <p class="hui-header-of-block">
                Скачать
            </p>
            <p>
                Загрузите Bootstrap, чтобы получить скомпилированные CSS и JavaScript, исходный код или включить его в свои любимые менеджеры пакетов, такие как npm, RubyGems и другие.
            </p>
            <p class="hui-header-of-block">
                Скомпилированный CSS и JS
            </p>
            <p>
                Загрузите готовый скомпилированный код для Bootstrap v5.1.1, чтобы легко вставить его в свой проект, который включает:
            </p>
            <ul>
                <li>
                    Скомпилированные и минимизированные пакеты CSS (см. Сравнение файлов CSS)
                </li>
                <li>
                    Скомпилированные и минифицированные плагины JavaScript (см. Сравнение файлов JS)
                </li>
            </ul>
            <p>
                Сюда не входят документация, исходные файлы или любые дополнительные зависимости JavaScript, такие как Popper.
            </p>
            <button class="hui-button  hui-dark" @click="downloadLibrary()">Скачать</button>
            <p class="hui-header-of-block">
                Исходные файлы
            </p>
            <p>
                Скомпилируйте Bootstrap с вашим собственным конвейером ресурсов, загрузив наши исходные файлы Sass, JavaScript и документации. Этот вариант требует дополнительных инструментов:
            </p>
            <p>
                Компилятор Sass для компиляции исходных файлов Sass в файлы CSS
            </p>
            <p>
                Автопрефиксатор для префикса поставщика CSS
            </p>
            <p>
                Should you require our full set of build tools, they are included for developing Bootstrap and its docs, but they’re likely unsuitable for your own purposes.
            </p>
            <button class="hui-button  hui-dark">Скачать исходники</button>
            <p class="hui-header-of-block">
                Примеры
            </p>
            <p>
                Если вы хотите скачать и изучить наши примеры, вы можете взять уже построенные примеры:
            </p>
            <button class="hui-button  hui-dark">Скачать исходники</button>
            <p class="hui-header-of-block">
                CDN через jsDelivr
            </p>
            <p>
                Пропустите загрузку с помощью jsDelivr, чтобы предоставить вашему проекту кешированную версию скомпилированных CSS и JS Bootstrap.
            </p>
            <div class="hui-editor">
               <button class="hui-editor-btn hui-button  hui-light">копия</button> 
                <p class="hui-editor-string">
                    link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"><br/>
                    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">/script><br/>
                </p>
            </div>
            <p>
                Если вы используете наш скомпилированный JavaScript и предпочитаете включать Popper отдельно, добавьте Popper перед нашим JS, желательно через CDN.
            </p>
            <div class="hui-editor">
               <button class="hui-editor-btn hui-button  hui-light">копия</button> 
                <p class="hui-editor-string">
                    script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous">/script><br/>
                    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous">/script><br/>
                </p>
            </div>
            <p class="hui-header-of-block">
                Менеджеры пакетов
            </p>
            <p>
                Загрузите исходные файлы Bootstrap практически в любой проект с помощью некоторых из самых популярных менеджеров пакетов. Независимо от менеджера пакетов, Bootstrap потребует компилятор Sass и Autoprefixer для настройки, соответствующей нашим официальным скомпилированным версиям.
            </p>
            <p class="hui-header-of-block">
                npm
            </p>
            <p>
                Установите Bootstrap в свои приложения на Node.js с пакетом npm:
            </p>
            <div class="hui-editor">
               <button class="hui-editor-btn hui-button  hui-light">копия</button> 
                <p class="hui-editor-string">
                    npm install bootstrap
                </p>
            </div>
            <p>
                const bootstrap = require ('bootstrap') или import bootstrap from 'bootstrap' загрузит все плагины Bootstrap в объект начальной загрузки. Сам модуль начальной загрузки экспортирует все наши плагины. Вы можете вручную загрузить плагины Bootstrap по отдельности, загрузив файлы /js/dist/*.js в каталог верхнего уровня пакета.
            </p>
            <p>
                Пакет Bootstrap package.json содержит некоторые дополнительные метаданные под следующими ключами:
            </p>
            <p>
                sass - путь к основному исходному файлу Sass Bootstrap
            </p>
            <p>
                style - путь к неминифицированному CSS Bootstrap, который был предварительно скомпилирован с использованием настроек по умолчанию (без настройки)
            </p>
            <p>
                Начните работу с Bootstrap через npm в нашем стартовом проекте! Перейдите в репозиторий шаблонов twbs / bootstrap-npm-starter, чтобы узнать, как создать и настроить Bootstrap в своем собственном проекте npm. Включает компилятор Sass, Autoprefixer, Stylelint, PurgeCSS и значки начальной загрузки.
            </p>
            <p class="hui-header-of-block">
                yarn
            </p>
            <p>
                Установите Bootstrap в свои приложения на Node.js с пакетом yarn:
            </p>
            <div class="hui-editor">
               <button class="hui-editor-btn hui-button  hui-light">копия</button> 
                <p class="hui-editor-string">
                    yarn add bootstrap
                </p>
            </div>
            <p class="hui-header-of-block">
                RubyGems
            </p>
            <p>
                Установите Bootstrap в свои приложения Ruby с помощью Bundler (рекомендуется) и RubyGems, добавив следующую строку в свой Gemfile:
            </p>
            <div class="hui-editor">
               <button class="hui-editor-btn hui-button  hui-light">копия</button> 
                <p class="hui-editor-string">
                    gem 'bootstrap', '~> 5.1.1'
                </p>
            </div>
            <p>
                В качестве альтернативы, если вы не используете Bundler, вы можете установить гем, выполнив следующую команду:
            </p>
            <div class="hui-editor">
               <button class="hui-editor-btn hui-button  hui-light">копия</button> 
                <p class="hui-editor-string">
                    gem install bootstrap -v 5.1.1
                </p>
            </div>
            <p>
                См. README драгоценного камня для получения дополнительной информации.
            </p>
            <p class="hui-header-of-block">
                Composer
            </p>
            <p>
                Установите Bootstrap в свои приложения Ruby с помощью Bundler (рекомендуется) и RubyGems, добавив следующую строку в свой Gemfile:
            </p>
            <p>
                В качестве альтернативы, если вы не используете Bundler, вы можете установить гем, выполнив следующую команду:
            </p>
            <p>
                См. README драгоценного камня для получения дополнительной информации.
            </p>
            <p class="hui-header-of-block">
                NuGet
            </p>
            <p>
                Если вы разрабатываете в .NET, вы также можете установить и управлять CSS или Sass и JavaScript Bootstrap с помощью NuGet:
            </p>
        </div>
        <HuiFooter />
    </div>
</template>

<script>
import HuiHeader from "@/components/HuiHeader.vue"
import HuiFooter from "@/components/HuiFooter.vue"

export default {
    name: 'Download',
    methods: {
        downloadLibrary() {
            // window.location = 'http://localhost:4000/api/download'
            window.location = 'https://huicss.herokuapp.com/api/download'
        }
    },
    components: {
        HuiHeader,
        HuiFooter
    }
}
</script>

<style>

</style>