<template>
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
        <div @click="buttonsToggler = !buttonsToggler" style="display: flex;">
            <span v-if="!buttonsToggler" style="align-self: center;" class="material-icons">
                chevron_right
            </span>
            <span v-else style="align-self: center;" class="material-icons">
                expand_more
            </span>
            <p class="hui-aside-link">Кнопки</p>
        </div>
        <div v-if="buttonsToggler">
            <p @click="$router.push({ path: '/docs/buttons#btns' })" class="hui-aside-link">Кнопки</p>
            <p @click="$router.push({ path: '/docs/buttons#darkbtn' })" class="hui-aside-link">Тёмная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#whitebtn' })" class="hui-aside-link">Белая кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#redbtn' })" class="hui-aside-link">Красная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#greenbtn' })" class="hui-aside-link">Зелёная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#roundbtns' })" class="hui-aside-link">Круглые кнопки</p>
            <p @click="$router.push({ path: '/docs/buttons#darkroundbtn' })" class="hui-aside-link">Круглая тёмная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#whiteroundbtn' })" class="hui-aside-link">Круглая белая кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#redroundbtn' })" class="hui-aside-link">Круглая красная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#greenroundbtn' })" class="hui-aside-link">Круглая зелёная кнопка</p>
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
</template>

<script>
export default {
    name: 'HuiAside',
    data(){
        return {
            examplesToggler: false,
            buttonsToggler: false,
            headersToggler: false,
        }
    }
}
</script>