<template>
    <div>
        <HuiHeader />
        <div class="hui-aside">
            <p class="hui-aside-link">Примеры</p>
            <p class="hui-aside-link">Кнопки</p>
            <p class="hui-aside-link">Хедеры</p>
            <p class="hui-aside-link">Стили</p>
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