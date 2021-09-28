<template>
    <div>
        <HuiHeader />
        <div style="text-align: center;">
            <div style="text-align: center; background-color: rgb(0, 100, 255); color: rgb(255, 255, 255);">
                <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png" alt="" class="hui-picture">
                <p class="hui-header-of-block">
                    Блог HuiCSS
                </p>
                <p>
                    Новости и объявления обо всем, что касается HuiCSS, включая новые выпуски, темы HuiCSS и значки HuiCSS.
                </p>
            </div>
            <p class="hui-header-of-block">
                Журнал изменений
            </p>
            <ul>
                <li>
                    Исправлена ошибка, из-за которой раскрывающиеся списки не закрывались после нажатия на input>
                </li>
                <li>
                    Проверенные входные данные в .input-groups больше не отображаются за элементами-родственниками
                </li>
                <li>
                    Предотвращение утечки accent-bg во вложенных таблицах
                </li>
                <li>
                    Модальные фоны больше не вызывают ошибку Uncaught TypeError при инициализации через JS.
                </li>
                <li>
                    Реорганизованы свойства утилизации в базовый компонент
                </li>
                <li>
                    Извлечены статические DATA_KEY и EVENT_KEY в базовый компонент
                </li>
                <li>
                    Объединенные обратные вызовы прослушивателя transitionend в один метод
                </li>
                <li>
                    Всплывающие окна и всплывающие подсказки имеют оптимизированное свойство конфигурации
                </li>
                <li>
                    Тосты больше не скрываются автоматически при фокусировке или наведении курсора.
                <li>
                    Больше не переопределяет $ list-group-color в цикле группы списков
                </li>
                <p>
                    Наши документы и примеры также получили несколько обновлений:
                </p>
                <li>
                    Пример исправленных боковых панелей некорректно отображается в Chrome
                </li>
                <li>
                    Фиксированный фрагмент конфигурации RTLCSS stringMap
                </li>
                <li>
                    Обновлен пример внешней панели навигации, чтобы предотвратить ошибку консоли
                </li>
                <li>
                    Исправлены разные опечатки, грамматические ошибки и ссылки в руководстве по миграции.
                </li>
            </ul>
            <hr />
            <p>
                Посетите GitHub, чтобы ознакомиться с полным списком проблем и запросов на вытягивание в версии 5.0.1. Вы также можете просмотреть доску проекта v5.0.1.
            </p>
            <p class="hui-header-of-block">
                Получите релиз
            </p>
            <p>
                Посетите https://herokuapp.huicss.com для получения последней информации. Он также перенесен в npm:
            </p>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                <p class="hui-editor-string">
                    npm i huicss
                </p>
            </div>
            <p>
                Просмотрите журнал изменений выпуска GitHub v5.0.1, чтобы получить полный список изменений с момента нашего последнего выпуска.
            </p>
            <p>
                Поддержи команду
            </p>
            <p>
                Посетите нашу страницу Open Collective или профили членов нашей команды на GitHub, чтобы помочь разработчикам, участвующим в разработке HuiCSS.
            </p>
            <p>
                Примеры GitHub Twitter О
            </p>
            <p>
                Разработан и построен с любовью в мире командой HuiCSS с помощью наших участников.
            </p>
            <p>
                В настоящее время v5.1.0. Блог HuiCSS является открытым исходным кодом под лицензией MIT.
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
    components: {
        HuiHeader,
        HuiFooter
    }
}
</script>

<style>

</style>