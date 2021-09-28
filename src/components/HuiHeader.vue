<template>
  <div class="hui-header">
    <p @click="$router.push({ name: 'Home' })" class="hui-active hui-header-link">
      huiCSS
    </p>
    <div class="hui-header-link-container">
      <p @click="$router.push({ name: 'Examples' })" class="hui-header-link">
        Примеры
      </p>
      <p @click="$router.push({ name: 'Docs' })" class="hui-header-link">
        Документы
      </p>
      <p @click="$router.push({ name: 'Download' })" class="hui-header-link">
        Скачать
      </p>
      <p @click="$router.push({ name: 'Themes' })" class="hui-header-link">
        Темы
      </p>
      <p @click="$router.push({ name: 'Icons' })" class="hui-header-link">
        Иконки
      </p>
      <p @click="$router.push({ name: 'Home' })" class="hui-header-link">
        Домой
      </p>
      <p @click="$router.push({ name: 'Blog' })" class="hui-header-link">
        Блог
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "HuiHeader"
}
</script>