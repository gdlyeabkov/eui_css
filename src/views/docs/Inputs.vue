<template>
    <div>
        <eui_cssHeader />
        <eui_cssAside />
        <div class="eui_css-main">
            <p class="eui_css-header-of-block">
                Поля ввода
            </p>
            <p>
                Легко расширяйте элементы управления формой, добавляя текст, кнопки или группы кнопок по обе стороны от текстовых полей ввода, настраиваемого выбора и ввода настраиваемых файлов.
            </p>
            <p id="btns" class="eui_css-header-of-block">
                Примеры
            </p>
            <p>
                eui_cssCSS включает в себя несколько предопределенных стилей полей ввода, каждый из которых служит своей семантической цели, с добавлением нескольких дополнительных элементов для большего контроля.
            </p>
            <div style="width: 200px; display: flex; flex-direction: column;">
                <input type="text" placeholder="" class="eui_css-search-field" />
                <select class="eui_css-dropdown">
                    <option value="eui_cssCSS 1">eui_cssCSS 1</option>
                    <option value="eui_cssCSS 2">eui_cssCSS 2</option>
                    <option value="eui_cssCSS 3">eui_cssCSS 3</option>
                </select>
            </div>
            
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                input type="text" placeholder="" class="eui_css-search-field" /><br/>
                select class="eui_css-dropdown"><br/>
                    option value="eui_cssCSS 1">eui_cssCSS 1/option><br/>
                    option value="eui_cssCSS 2">eui_cssCSS 2/option><br/>
                    option value="eui_cssCSS 3">eui_cssCSS 3/option><br/>
                /select><br/>
            </div>
            <p id="field" class="eui_css-header-of-block">
                Поле ввода
            </p>
            <p>
                Поле для ввода
            </p>
            <div style="display: flex; justify-content: space-around;">
                <input type="text" placeholder="" class="eui_css-search-field" />
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                input type="text" placeholder="" class="eui_css-search-field" /><br/>
            </div>
            <p id="dropdown" class="eui_css-header-of-block">
                Выпадающий список
            </p>
            <p>
                Список с выпадающими значениями
            </p>
            <div style="display: flex; justify-content: space-around;">
                <select class="eui_css-dropdown">
                    <option value="eui_cssCSS 1">eui_cssCSS 1</option>
                    <option value="eui_cssCSS 2">eui_cssCSS 2</option>
                    <option value="eui_cssCSS 3">eui_cssCSS 3</option>
                </select>
            </div>
            <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                select class="eui_css-dropdown"><br/>
                    option value="eui_cssCSS 1">eui_cssCSS 1/option><br/>
                    option value="eui_cssCSS 2">eui_cssCSS 2/option><br/>
                    option value="eui_cssCSS 3">eui_cssCSS 3/option><br/>
                /select><br/>
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
    name: "Inputs",
    components: {
        eui_cssHeader,
        eui_cssAside,
        eui_cssFooter,
    }
}
</script>