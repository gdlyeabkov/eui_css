<template>
    <div>
        <eui_cssHeader />
        <eui_cssAside />
        <div class="eui_css-main">
            <p class="eui_css-header-of-block">
                Кнопки
            </p>
            <p>
                Используйте настраиваемые стили кнопок eui_cssCSS для действий в формах, диалоговых окнах и т. Д. С поддержкой нескольких размеров, состояний и т. Д.
            </p>
            <p id="btns" class="eui_css-header-of-block">
                Примеры
            </p>
            <p>
                eui_cssCSS включает в себя несколько предопределенных стилей кнопок, каждый из которых служит своей семантической цели, с добавлением нескольких дополнительных элементов для большего контроля.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button  eui_css-dark">Нажми меня</button>
                <button class="eui_css-button  eui_css-light">Нажми меня</button>
                <button class="eui_css-button  eui_css-error">Нажми меня</button>
                <button class="eui_css-button  eui_css-happy">Нажми меня</button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button  eui_css-dark">Нажми меня/button><br/>
                button class="eui_css-button  eui_css-light">Нажми меня/button><br/>
                button class="eui_css-button  eui_css-error">Нажми меня/button><br/>
                button class="eui_css-button  eui_css-happy">Нажми меня/button><br/>
            </div>
            <p id="darkbtn" class="eui_css-header-of-block">
                Тёмная кнопка 
            </p>
            <p>
                Кнопка в тёмном стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button  eui_css-dark">Нажми меня</button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button  eui_css-dark">Нажми меня/button><br/>
            </div>
            <p id="whitebtn" class="eui_css-header-of-block">
                Белая кнопка 
            </p>
            <p>
                Кнопка в общем стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button  eui_css-light">Нажми меня</button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button  eui_css-light">Нажми меня/button><br/>
            </div>
            <p id="redbtn" class="eui_css-header-of-block">
                Красная кнопка 
            </p>
            <p>
                Кнопка в стиле ошибки.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button  eui_css-error">Нажми меня</button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button  eui_css-error">Нажми меня/button><br/>
            </div>
            <p id="greenbtn" class="eui_css-header-of-block">
                Зелёная кнопка 
            </p>
            <p>
                Кнопка в приветливом стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button  eui_css-happy">Нажми меня</button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button  eui_css-happy">Нажми меня/button><br/>
            </div>
            <p id="roundbtns" class="eui_css-header-of-block">
                Кргулые кнопки
            </p>
            <p>
                Используйте настраиваемые стили круглых кнопок eui_cssCSS для действий в формах, диалоговых окнах и т. Д. С поддержкой нескольких размеров, состояний и т. Д.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button eui_css-round-button eui_css-happy"></button>
                <button class="eui_css-button eui_css-round-button eui_css-light"></button>
                <button class="eui_css-button eui_css-round-button eui_css-dark"></button>
                <button class="eui_css-button eui_css-round-button eui_css-error"></button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button eui_css-round-button eui_css-happy">/button><br/>
                button class="eui_css-button eui_css-round-button eui_css-light">/button><br/>
                button class="eui_css-button eui_css-round-button eui_css-dark">/button><br/>
                button class="eui_css-button eui_css-round-button eui_css-error">/button><br/>
            </div>
            <p id="greenroundbtn" class="eui_css-header-of-block">
                Круглая зелёная кнопка 
            </p>
            <p>
                Круглая кнопка в приветливом стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button eui_css-round-button eui_css-happy"></button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button eui_css-round-button eui_css-happy">/button><br/>
            </div>
            <p id="whiteroundbtn" class="eui_css-header-of-block">
                Белая круглая кнопка
            </p>
            <p>
                Круглая кнопка в общем стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button eui_css-round-button eui_css-light"></button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button eui_css-round-button eui_css-light">/button><br/>
            </div>
            <p id="darkroundbtn" class="eui_css-header-of-block">
                Тёмная круглая кнопка
            </p>
            <p>
                Круглая кнопка в тёмном стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button eui_css-round-button eui_css-dark"></button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button eui_css-round-button eui_css-dark">/button><br/>
            </div>
            <p id="redroundbtn" class="eui_css-header-of-block">
                Красная круглая кнопка
            </p>
            <p>
                Круглая кнопка в стиле ошибки.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="eui_css-button eui_css-round-button eui_css-error"></button>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                button class="eui_css-button eui_css-round-button eui_css-happy">/button><br/>
            </div>
        </div>
        <eui_cssFooter />
  </div>
</template>

<script>
import eui_cssHeader from "@/components/eui_cssHeader.vue"
import eui_cssAside from "@/components/eui_cssAside.vue"
import eui_cssFooter from "@/components/eui_cssFooter.vue"

export default {
    name: 'Buttons',
    mounted(){
        document.getElementById(`${location.hash.split('#')[1]}`).scrollIntoView({
            block: 'start',
            behavior: "smooth"
        })
    },
    components: {
        eui_cssHeader,
        eui_cssAside,
        eui_cssFooter
    }
}
</script>