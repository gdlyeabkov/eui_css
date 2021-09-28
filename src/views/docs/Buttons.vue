<template>
    <div>
        <HuiHeader />
        <HuiAside />
        <div class="hui-main">
            <p class="hui-header-of-block">
                Кнопки
            </p>
            <p>
                Используйте настраиваемые стили кнопок HuiCSS для действий в формах, диалоговых окнах и т. Д. С поддержкой нескольких размеров, состояний и т. Д.
            </p>
            <p id="btns" class="hui-header-of-block">
                Примеры
            </p>
            <p>
                HuiCSS включает в себя несколько предопределенных стилей кнопок, каждый из которых служит своей семантической цели, с добавлением нескольких дополнительных элементов для большего контроля.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button  hui-dark">Нажми меня</button>
                <button class="hui-button  hui-light">Нажми меня</button>
                <button class="hui-button  hui-error">Нажми меня</button>
                <button class="hui-button  hui-happy">Нажми меня</button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button  hui-dark">Нажми меня/button><br/>
                button class="hui-button  hui-light">Нажми меня/button><br/>
                button class="hui-button  hui-error">Нажми меня/button><br/>
                button class="hui-button  hui-happy">Нажми меня/button><br/>
            </div>
            <p id="darkbtn" class="hui-header-of-block">
                Тёмная кнопка 
            </p>
            <p>
                Кнопка в тёмном стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button  hui-dark">Нажми меня</button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button  hui-dark">Нажми меня/button><br/>
            </div>
            <p id="whitebtn" class="hui-header-of-block">
                Белая кнопка 
            </p>
            <p>
                Кнопка в общем стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button  hui-light">Нажми меня</button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button  hui-light">Нажми меня/button><br/>
            </div>
            <p id="redbtn" class="hui-header-of-block">
                Красная кнопка 
            </p>
            <p>
                Кнопка в стиле ошибки.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button  hui-error">Нажми меня</button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button  hui-error">Нажми меня/button><br/>
            </div>
            <p id="greenbtn" class="hui-header-of-block">
                Зелёная кнопка 
            </p>
            <p>
                Кнопка в приветливом стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button  hui-happy">Нажми меня</button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button  hui-happy">Нажми меня/button><br/>
            </div>
            <p id="roundbtns" class="hui-header-of-block">
                Кргулые кнопки
            </p>
            <p>
                Используйте настраиваемые стили круглых кнопок HuiCSS для действий в формах, диалоговых окнах и т. Д. С поддержкой нескольких размеров, состояний и т. Д.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button hui-round-button hui-happy"></button>
                <button class="hui-button hui-round-button hui-light"></button>
                <button class="hui-button hui-round-button hui-dark"></button>
                <button class="hui-button hui-round-button hui-error"></button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button hui-round-button hui-happy">/button><br/>
                button class="hui-button hui-round-button hui-light">/button><br/>
                button class="hui-button hui-round-button hui-dark">/button><br/>
                button class="hui-button hui-round-button hui-error">/button><br/>
            </div>
            <p id="greenroundbtn" class="hui-header-of-block">
                Круглая зелёная кнопка 
            </p>
            <p>
                Круглая кнопка в приветливом стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button hui-round-button hui-happy"></button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button hui-round-button hui-happy">/button><br/>
            </div>
            <p id="whiteroundbtn" class="hui-header-of-block">
                Белая круглая кнопка
            </p>
            <p>
                Круглая кнопка в общем стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button hui-round-button hui-light"></button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button hui-round-button hui-light">/button><br/>
            </div>
            <p id="darkroundbtn" class="hui-header-of-block">
                Тёмная круглая кнопка
            </p>
            <p>
                Круглая кнопка в тёмном стиле.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button hui-round-button hui-dark"></button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button hui-round-button hui-dark">/button><br/>
            </div>
            <p id="redroundbtn" class="hui-header-of-block">
                Красная круглая кнопка
            </p>
            <p>
                Круглая кнопка в стиле ошибки.
            </p>
            <div style="display: flex; justify-content: space-around;">
                <button class="hui-button hui-round-button hui-error"></button>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                button class="hui-button hui-round-button hui-happy">/button><br/>
            </div>
        </div>
        <HuiFooter />
  </div>
</template>

<script>
import HuiHeader from "@/components/HuiHeader.vue"
import HuiAside from "@/components/HuiAside.vue"
import HuiFooter from "@/components/HuiFooter.vue"

export default {
    name: 'Buttons',
    mounted(){
        document.getElementById(`${location.hash.split('#')[1]}`).scrollIntoView({
            block: 'start',
            behavior: "smooth"
        })
    },
    components: {
        HuiHeader,
        HuiAside,
        HuiFooter
    }
}
</script>