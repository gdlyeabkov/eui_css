<template>
  <div>
    <eui_cssHeader />
    <div class="eui_css-main">
      <div style="margin-top: 25px; margin-left: 25px;">
        <div style="float: left; width: 55%;">
          <p class="eui_css-header-of-block">
            Строй удобно, сайты отвечающие ожиданиям с eui_cssCSS
          </p>
          <p class="eui_css-desc-of-block">
            Быстро создавайте и настраивайте адаптивные сайты, ориентированные на мобильные устройства, с помощью eui_cssCSS, самого популярного в мире инструментария с открытым исходным кодом для интерфейса пользователя, включающего переменные и миксины Sass, адаптивную сеточную систему, обширные готовые компоненты и мощные плагины JavaScript.
          </p>
          <div style="margin: 15px;">
            <button class="eui_css-button  eui_css-error" @click="$router.push({ name: 'GetStarted' })">Начать</button>
            <button class="eui_css-button  eui_css-light" @click="$router.push({ name: 'Download' })">Скачать</button>
          </div>
          <p>Currently v5.1.1 · v4.6.x docs · All releases</p>
        </div>
        <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 175px; height: 175px;">
        </div>
        
        <div style="clear: both;"></div>
        <div class="eui_css-pad-25">
          <div class="eui_css-picture-layout">
          </div>
          <div class="eui_css-part">
            <div class="eui_css-part-of-layout">
              <p class="eui_css-header-of-block">
                Установка
              </p>
              <p class="eui_css-supHeader">
                Установите исходные файлы Sass и JavaScript eui_cssCSS через npm, Composer или Meteor.
              </p>
              <p class="eui_css-sub-header">
                Установки, управляемые пакетами, не включают в себя документацию или наши полные скрипты сборки. Вы также можете использовать репозиторий шаблонов npm для быстрого создания проекта eui_cssCSS через npm.
              </p>
            </div>
            <div>
              <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                <p class="eui_css-editor-string">npm install eui_cssCSS</p>
              </div>
              <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                <p class="eui_css-indent">gem install eui_cssCSS -v 5.1.1</p>
              </div>
            </div>
          </div>
          <button class="eui_css-pad-25 eui_css-button eui_css-light">Как установить</button>
        </div>

        <div class="eui_css-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="eui_css-header-block">
                jsDelivr
              </p>
              <p class="eui_css-supHeader">
                Когда вам нужно включить только скомпилированный CSS или JS eui_cssCSS, вы можете использовать jsDelivr.
              </p>
              <p class="eui_css-sub-header">
                Посмотрите, как это работает, с помощью нашего простого стартового шаблона или просмотрите примеры, чтобы начать свой следующий проект. Вы также можете включить Popper и наш JS по отдельности.
              </p>
            </div>
            <div>
              <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                <p class="eui_css-editor-string">npm install eui_cssCSS</p>
              </div>
              <div class="eui_css-editor">
                <button class="eui_css-editor-btn eui_css-button  eui_css-light">копия</button>
                <p style="padding: 15px;">gem install eui_cssCSS -v 5.1.1</p>
              </div>
            </div>
          </div>
          <button class="eui_css-pad-25 eui_css-button eui_css-light">Посмотреть доки</button>
        </div>

        <div class="eui_css-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="eui_css-header-block">
                eui_cssCSS иконки
              </p>
              <p class="eui_css-supHeader">
                Впервые в истории eui_cssCSS есть собственная библиотека значков SVG с открытым исходным кодом, предназначенная для наилучшей работы с нашими компонентами и документацией.
              </p>
              <p class="eui_css-sub-header">
                Иконки eui_cssCSS лучше всего работают с компонентами eui_cssCSS, но они будут работать в любом проекте. Это SVG-файлы, поэтому они легко и быстро масштабируются, могут быть реализованы несколькими способами и стилизованы с помощью CSS.
              </p>
            </div>
            <div>
              <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png" alt="" class="eui_css-picture">
            </div>
          </div>
          <button class="eui_css-pad-25 eui_css-button eui_css-light">Получить иконки</button>
        </div>

        <div class="eui_css-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="eui_css-header-of-block">
                Официальные темы
              </p>
              <p class="eui_css-sup-header">
                Поднимите eui_cssCss на новый уровень с премиальными темами с официального магазина eui_cssCSS Themes.
              </p>
              <p class="eui_css-sub-header">
                Темы создаются на eui_cssCss как собственные расширенные фреймворки, богатые новыми компонентами и плагинами, документацией и мощными инструментами сборки.
              </p>
            </div>
            <div>
              <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-themes.png" alt="" class="eui_css-picture">
            </div>
          </div>
          <button class="eui_css-pad-25 eui_css-button eui_css-light">Смотреть темы</button>
        </div>

      </div>

    </div>

    <eui_cssFooter />

  </div>
</template>

<script>
import eui_cssHeader from "@/components/eui_cssHeader.vue"
import eui_cssFooter from "@/components/eui_cssFooter.vue"

export default {
  name: 'Home',
  components: {
    eui_cssHeader,
    eui_cssFooter
  }
}
</script>