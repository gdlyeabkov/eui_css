<template>
  <div class="eui_css-header">
    <p @click="$router.push({ name: 'Home' })" class="eui_css-active eui_css-header-link">
      eui_cssCSS
    </p>
    <div class="eui_css-header-link-container">
      <p @click="$router.push({ name: 'Examples' })" class="eui_css-header-link">
        Примеры
      </p>
      <p @click="$router.push({ name: 'Docs' })" class="eui_css-header-link">
        Документы
      </p>
      <p @click="$router.push({ name: 'Download' })" class="eui_css-header-link">
        Скачать
      </p>
      <p @click="$router.push({ name: 'Themes' })" class="eui_css-header-link">
        Темы
      </p>
      <p @click="$router.push({ name: 'Icons' })" class="eui_css-header-link">
        Иконки
      </p>
      <p @click="$router.push({ name: 'Home' })" class="eui_css-header-link">
        Домой
      </p>
      <p @click="$router.push({ name: 'Blog' })" class="eui_css-header-link">
        Блог
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "eui_cssHeader"
}
</script>