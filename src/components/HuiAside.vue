<template>
    <div class="eui_css-aside">
        <div @click="inputsToggler = !inputsToggler" class="eui_css-touch">
            <span v-if="!inputsToggler" class="material-icons eui_css-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons eui_css-margin-center">
                expand_more
            </span>
            <p class="eui_css-aside-link">Поля ввода</p>
        </div>
        <div v-if="inputsToggler">
            <p @click="$router.push({ path: '/docs/inputs#field' })" class="eui_css-aside-link">Поле ввода</p>
            <p @click="$router.push({ path: '/docs/inputs#dropdown' })" class="eui_css-aside-link">Выпадающий список</p>
        </div>
        <div @click="buttonsToggler = !buttonsToggler" class="eui_css-touch">
            <span v-if="!buttonsToggler" class="material-icons eui_css-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons eui_css-margin-center">
                expand_more
            </span>
            <p class="eui_css-aside-link">Кнопки</p>
        </div>
        <div v-if="buttonsToggler">
            <p @click="$router.push({ path: '/docs/buttons#btns' })" class="eui_css-aside-link">Кнопки</p>
            <p @click="$router.push({ path: '/docs/buttons#darkbtn' })" class="eui_css-aside-link">Тёмная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#whitebtn' })" class="eui_css-aside-link">Белая кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#redbtn' })" class="eui_css-aside-link">Красная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#greenbtn' })" class="eui_css-aside-link">Зелёная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#roundbtns' })" class="eui_css-aside-link">Круглые кнопки</p>
            <p @click="$router.push({ path: '/docs/buttons#darkroundbtn' })" class="eui_css-aside-link">Круглая тёмная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#whiteroundbtn' })" class="eui_css-aside-link">Круглая белая кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#redroundbtn' })" class="eui_css-aside-link">Круглая красная кнопка</p>
            <p @click="$router.push({ path: '/docs/buttons#greenroundbtn' })" class="eui_css-aside-link">Круглая зелёная кнопка</p>
        </div>
        <div @click="componentsToggler = !componentsToggler" class="eui_css-touch">
            <span v-if="!componentsToggler" class="material-icons eui_css-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons eui_css-margin-center">
                expand_more
            </span>
            <p class="eui_css-aside-link">Компоненты</p>
        </div>
        <div v-if="componentsToggler">
            <p @click="$router.push({ path: '/docs/components#components' })" class="eui_css-aside-link">Компоненты</p>
            <p @click="$router.push({ path: '/docs/components#header' })" class="eui_css-aside-link">Хедер</p>
            <p @click="$router.push({ path: '/docs/components#search' })" class="eui_css-aside-link">Поиск</p>
            <p @click="$router.push({ path: '/docs/components#aside' })" class="eui_css-aside-link">Эсайд</p>
            <p @click="$router.push({ path: '/docs/components#footer' })" class="eui_css-aside-link">Футер</p>
        </div>
        <div @click="layoutsToggler = !layoutsToggler"  class="eui_css-touch">
            <span v-if="!layoutsToggler" class="material-icons eui_css-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons eui_css-margin-center">
                expand_more
            </span>
            <p class="eui_css-aside-link">Макеты</p>
        </div>
        <div v-if="layoutsToggler">
            <p @click="$router.push({ path: '/docs/layouts#picture' })" class="eui_css-aside-link">Макет с картинкой</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'eui_cssAside',
    data(){
        return {
            inputsToggler: false,
            buttonsToggler: false,
            componentsToggler: false,
            layoutsToggler: false
        }
    }
}
</script>