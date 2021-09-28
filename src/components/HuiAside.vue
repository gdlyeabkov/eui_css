<template>
    <div class="hui-aside">
        <div @click="inputsToggler = !inputsToggler" class="hui-touch">
            <span v-if="!inputsToggler" class="material-icons hui-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons hui-margin-center">
                expand_more
            </span>
            <p class="hui-aside-link">Поля ввода</p>
        </div>
        <div v-if="inputsToggler">
            <p @click="$router.push({ path: '/docs/inputs#field' })" class="hui-aside-link">Поле ввода</p>
            <p @click="$router.push({ path: '/docs/inputs#dropdown' })" class="hui-aside-link">Выпадающий список</p>
        </div>
        <div @click="buttonsToggler = !buttonsToggler" class="hui-touch">
            <span v-if="!buttonsToggler" class="material-icons hui-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons hui-margin-center">
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
        <div @click="componentsToggler = !componentsToggler" class="hui-touch">
            <span v-if="!componentsToggler" class="material-icons hui-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons hui-margin-center">
                expand_more
            </span>
            <p class="hui-aside-link">Компоненты</p>
        </div>
        <div v-if="componentsToggler">
            <p @click="$router.push({ path: '/docs/components#components' })" class="hui-aside-link">Компоненты</p>
            <p @click="$router.push({ path: '/docs/components#header' })" class="hui-aside-link">Хедер</p>
            <p @click="$router.push({ path: '/docs/components#search' })" class="hui-aside-link">Поиск</p>
            <p @click="$router.push({ path: '/docs/components#aside' })" class="hui-aside-link">Эсайд</p>
            <p @click="$router.push({ path: '/docs/components#footer' })" class="hui-aside-link">Футер</p>
        </div>
        <div @click="layoutsToggler = !layoutsToggler"  class="hui-touch">
            <span v-if="!layoutsToggler" class="material-icons hui-margin-center">
                chevron_right
            </span>
            <span v-else class="material-icons hui-margin-center">
                expand_more
            </span>
            <p class="hui-aside-link">Макеты</p>
        </div>
        <div v-if="layoutsToggler">
            <p @click="$router.push({ path: '/docs/layouts#picture' })" class="hui-aside-link">Макет с картинкой</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HuiAside',
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