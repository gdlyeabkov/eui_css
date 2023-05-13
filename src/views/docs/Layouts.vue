<template>
    <div>
        <eui_cssHeader />
        <eui_cssAside />
        <div class="eui_css-main">
            <p class="eui_css-header-of-block">
                Макеты
            </p>
            <p>
                Макеты - это фундаментальный строительный блок eui_cssCSS, который содержит, дополняет и выравнивает ваш контент в пределах данного устройства или области просмотра.
            </p>
            <p id="picture" class="eui_css-header-of-block">
                Примеры
            </p>
            <p>
                eui_cssCSS включает в себя несколько предопределенных стилей макетов, каждый из которых служит своей семантической цели, с добавлением нескольких дополнительных элементов для большего контроля.
            </p>
            <div class="eui_css-pad-25">
                <div class="eui_css-picture-layout">
                </div>
                <div class="eui_css-part">
                    <div class="eui_css-part-of-layout">
                    <p class="eui_css-header-of-block">
                        Установка
                    </p>
                    <p class="eui_css-supHeader">
                        Установите исходные файлы Sass и JavaScript eui_cssCSS через npm, Composer или Meteor.
                    </p>
                    <p class="eui_css-sub-header">
                        Установки, управляемые пакетами, не включают в себя документацию или наши полные скрипты сборки. Вы также можете использовать репозиторий шаблонов npm для быстрого создания проекта eui_cssCSS через npm.
                    </p>
                    </div>
                    <div>
                    <div class="eui_css-editor">
                        <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                        <p class="eui_css-editor-string">npm install eui_cssCSS</p>
                    </div>
                    <div class="eui_css-editor">
                        <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                        <p class="eui_css-indent">gem install eui_cssCSS -v 5.1.1</p>
                    </div>
                    </div>
                </div>
                <button class="eui_css-pad-25 eui_css-button eui_css-light">Как установить</button>
            </div>
            
            <div class="eui_css-editor">
                button class="eui_css-editor-btn eui_css-button  eui_css-light">копия/button><br/>
                div class="eui_css-pad-25"><br/>
                div class="eui_css-picture-layout"><br/>
                /div><br/>
                div class="eui_css-part"><br/>
                    div class="eui_css-part-of-layout"><br/>
                        p class="eui_css-header-of-block"><br/>
                            Установка<br/>
                        /p><br/>
                        p class="eui_css-supHeader"><br/>
                            Установите исходные файлы Sass и JavaScript eui_cssCSS через npm, Composer или Meteor.<br/>
                        /p><br/>
                        p class="eui_css-sub-header"><br/>
                            Установки, управляемые пакетами, не включают в себя документацию или наши полные скрипты сборки. Вы также можете использовать репозиторий шаблонов npm для быстрого создания проекта eui_cssCSS через npm.<br/>
                        /p><br/>
                    /div><br/>
                    div><br/>
                    div class="eui_css-editor"><br/>
                        button class="eui_css-editor-btn eui_css-button  eui_css-light">копия/button><br/>
                        p class="eui_css-editor-string">npm install eui_cssCSS/p><br/>
                    /div><br/>
                    div class="eui_css-editor"><br/>
                        button class="eui_css-editor-btn eui_css-button  eui_css-light">копия/button><br/>
                        p class="eui_css-indent">gem install eui_cssCSS -v 5.1.1/p><br/>
                    /div><br/>
                    /div><br/>
                /div><br/>
                button class="eui_css-pad-25 eui_css-button eui_css-light">Как установить/button><br/>
            </div>
        </div>
        <eui_cssFooter />
    </div>
</template>

<script>
import eui_cssHeader from '@/components/eui_cssHeader.vue'
import eui_cssAside from '@/components/eui_cssAside.vue'
import eui_cssFooter from '@/components/eui_cssFooter.vue'

export default {
    name: "Layouts",
    components: {
        eui_cssHeader,
        eui_cssAside,
        eui_cssFooter,
    }
}
</script>