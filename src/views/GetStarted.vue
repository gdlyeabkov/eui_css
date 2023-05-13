<template>
    <div>
        <eui_cssHeader />
        <div class="eui_css-aside">
            <p class="eui_css-aside-link">Примеры</p>
            <p class="eui_css-aside-link">Кнопки</p>
            <p class="eui_css-aside-link">Хедеры</p>
            <p class="eui_css-aside-link">Стили</p>
        </div>
        <eui_cssFooter />
    </div>
</template>

<script>
import eui_cssHeader from "@/components/eui_cssHeader.vue"
import eui_cssFooter from "@/components/eui_cssFooter.vue"

export default {
    name: 'Download',
    components: {
        eui_cssHeader,
        eui_cssFooter
    }
}
</script>

<style>

</style>