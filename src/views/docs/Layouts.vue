<template>
    <div>
        <HuiHeader />
        <HuiAside />
        <div class="hui-main">
            <p class="hui-header-of-block">
                Макеты
            </p>
            <p>
                Макеты - это фундаментальный строительный блок HuiCSS, который содержит, дополняет и выравнивает ваш контент в пределах данного устройства или области просмотра.
            </p>
            <p id="picture" class="hui-header-of-block">
                Примеры
            </p>
            <p>
                HuiCSS включает в себя несколько предопределенных стилей макетов, каждый из которых служит своей семантической цели, с добавлением нескольких дополнительных элементов для большего контроля.
            </p>
            <div class="hui-pad-25">
                <div class="hui-picture-layout">
                </div>
                <div class="hui-part">
                    <div class="hui-part-of-layout">
                    <p class="hui-header-of-block">
                        Установка
                    </p>
                    <p class="hui-supHeader">
                        Установите исходные файлы Sass и JavaScript HuiCSS через npm, Composer или Meteor.
                    </p>
                    <p class="hui-sub-header">
                        Установки, управляемые пакетами, не включают в себя документацию или наши полные скрипты сборки. Вы также можете использовать репозиторий шаблонов npm для быстрого создания проекта HuiCSS через npm.
                    </p>
                    </div>
                    <div>
                    <div class="hui-editor">
                        <button class="hui-editor-btn hui-button  hui-light">копия</button>
                        <p class="hui-editor-string">npm install HuiCSS</p>
                    </div>
                    <div class="hui-editor">
                        <button class="hui-editor-btn hui-button  hui-light">копия</button>
                        <p class="hui-indent">gem install HuiCSS -v 5.1.1</p>
                    </div>
                    </div>
                </div>
                <button class="hui-pad-25 hui-button hui-light">Как установить</button>
            </div>
            
            <div class="hui-editor">
                button class="hui-editor-btn hui-button  hui-light">копия/button><br/>
                div class="hui-pad-25"><br/>
                div class="hui-picture-layout"><br/>
                /div><br/>
                div class="hui-part"><br/>
                    div class="hui-part-of-layout"><br/>
                        p class="hui-header-of-block"><br/>
                            Установка<br/>
                        /p><br/>
                        p class="hui-supHeader"><br/>
                            Установите исходные файлы Sass и JavaScript HuiCSS через npm, Composer или Meteor.<br/>
                        /p><br/>
                        p class="hui-sub-header"><br/>
                            Установки, управляемые пакетами, не включают в себя документацию или наши полные скрипты сборки. Вы также можете использовать репозиторий шаблонов npm для быстрого создания проекта HuiCSS через npm.<br/>
                        /p><br/>
                    /div><br/>
                    div><br/>
                    div class="hui-editor"><br/>
                        button class="hui-editor-btn hui-button  hui-light">копия/button><br/>
                        p class="hui-editor-string">npm install HuiCSS/p><br/>
                    /div><br/>
                    div class="hui-editor"><br/>
                        button class="hui-editor-btn hui-button  hui-light">копия/button><br/>
                        p class="hui-indent">gem install HuiCSS -v 5.1.1/p><br/>
                    /div><br/>
                    /div><br/>
                /div><br/>
                button class="hui-pad-25 hui-button hui-light">Как установить/button><br/>
            </div>
        </div>
        <HuiFooter />
    </div>
</template>

<script>
import HuiHeader from '@/components/HuiHeader.vue'
import HuiAside from '@/components/HuiAside.vue'
import HuiFooter from '@/components/HuiFooter.vue'

export default {
    name: "Layouts",
    components: {
        HuiHeader,
        HuiAside,
        HuiFooter,
    }
}
</script>