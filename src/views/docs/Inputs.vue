<template>
    <div>
        <HuiHeader />
        <HuiAside />
        <div class="hui-main">
            <p class="hui-header-of-block">
                Поля ввода
            </p>
            <p>
                Легко расширяйте элементы управления формой, добавляя текст, кнопки или группы кнопок по обе стороны от текстовых полей ввода, настраиваемого выбора и ввода настраиваемых файлов.
            </p>
            <p id="btns" class="hui-header-of-block">
                Примеры
            </p>
            <p>
                HuiCSS включает в себя несколько предопределенных стилей полей ввода, каждый из которых служит своей семантической цели, с добавлением нескольких дополнительных элементов для большего контроля.
            </p>
            <div style="width: 200px; display: flex; flex-direction: column;">
                <input type="text" placeholder="" class="hui-search-field" />
                <select class="hui-dropdown">
                    <option value="HuiCSS 1">HuiCSS 1</option>
                    <option value="HuiCSS 2">HuiCSS 2</option>
                    <option value="HuiCSS 3">HuiCSS 3</option>
                </select>
            </div>
            
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                input type="text" placeholder="" class="hui-search-field" /><br/>
                select class="hui-dropdown"><br/>
                    option value="HuiCSS 1">HuiCSS 1/option><br/>
                    option value="HuiCSS 2">HuiCSS 2/option><br/>
                    option value="HuiCSS 3">HuiCSS 3/option><br/>
                /select><br/>
            </div>
            <p id="field" class="hui-header-of-block">
                Поле ввода
            </p>
            <p>
                Поле для ввода
            </p>
            <div style="display: flex; justify-content: space-around;">
                <input type="text" placeholder="" class="hui-search-field" />
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                input type="text" placeholder="" class="hui-search-field" /><br/>
            </div>
            <p id="dropdown" class="hui-header-of-block">
                Выпадающий список
            </p>
            <p>
                Список с выпадающими значениями
            </p>
            <div style="display: flex; justify-content: space-around;">
                <select class="hui-dropdown">
                    <option value="HuiCSS 1">HuiCSS 1</option>
                    <option value="HuiCSS 2">HuiCSS 2</option>
                    <option value="HuiCSS 3">HuiCSS 3</option>
                </select>
            </div>
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                select class="hui-dropdown"><br/>
                    option value="HuiCSS 1">HuiCSS 1/option><br/>
                    option value="HuiCSS 2">HuiCSS 2/option><br/>
                    option value="HuiCSS 3">HuiCSS 3/option><br/>
                /select><br/>
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
    name: "Inputs",
    components: {
        HuiHeader,
        HuiAside,
        HuiFooter,
    }
}
</script>