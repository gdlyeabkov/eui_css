<template>
  <div>
    <div class="hui-header">
      <p class="hui-active hui-header-link">
        huiCSS
      </p>
      <div class="hui-header-link-container">
        <p class="hui-header-link">
          Примеры
        </p>
        <p class="hui-header-link">
          Документы
        </p>
        <p class="hui-header-link">
          Скачать
        </p>
      </div>
    </div>
    <div class="hui-main">
      <button class="hui-button  hui-dark">Нажми меня</button>
      <button class="hui-button  hui-light">Нажми меня</button>
      <button class="hui-button  hui-error">Нажми меня</button>
      <button class="hui-button  hui-happy">Нажми меня</button>
      <button class="hui-button hui-round-button hui-happy"></button>
      <button class="hui-button hui-round-button hui-light"></button>
      <button class="hui-button hui-round-button hui-dark"></button>
      <button class="hui-button hui-round-button hui-error"></button>
      <div style="margin-top: 25px; margin-left: 25px;">
        <div style="float: left; width: 55%;">
          <p class="headerOfBlock">
            Строй удобно, сайты отвечающие ожиданиям с HuiCSS
          </p>
          <p class="descOfBlock">
            Быстро создавайте и настраивайте адаптивные сайты, ориентированные на мобильные устройства, с помощью HuiCSS, самого популярного в мире инструментария с открытым исходным кодом для интерфейса пользователя, включающего переменные и миксины Sass, адаптивную сеточную систему, обширные готовые компоненты и мощные плагины JavaScript.
          </p>
          <div style="margin: 15px;">
            <button class="hui-button  hui-error" @click="$router.push({ name: 'GetStarted' })">Начать</button>
            <button class="hui-button  hui-light" @click="$router.push({ name: 'Download' })">Скачать</button>
          </div>
          <p>Currently v5.1.1 · v4.6.x docs · All releases</p>
        </div>
        <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 175px; height: 175px;">
        </div>
        
        <div style="clear: both;"></div>
        <div class="hui-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="headerOfBlock">
                Установка
              </p>
              <p class="supHeader">
                Установите исходные файлы Sass и JavaScript Bootstrap через npm, Composer или Meteor.
              </p>
              <p class="subHeader">
                Установки, управляемые пакетами, не включают в себя документацию или наши полные скрипты сборки. Вы также можете использовать репозиторий шаблонов npm для быстрого создания проекта Bootstrap через npm.
              </p>
            </div>
            <div>
              <div class="editor">
                <button class="editorBtn hui-button  hui-light">копия</button>
                <p class="editorString">npm install bootstrap</p>
              </div>
              <div class="editor">
                <button class="editorBtn hui-button  hui-light">копия</button>
                <p style="padding: 15px;">gem install bootstrap -v 5.1.1</p>
              </div>
            </div>
          </div>
          <button class="hui-pad-25 hui-button hui-light">Как установить</button>
        </div>

        <div class="hui-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="headerOfBlock">
                jsDelivr
              </p>
              <p class="supHeader">
                Когда вам нужно включить только скомпилированный CSS или JS Bootstrap, вы можете использовать jsDelivr.
              </p>
              <p class="subHeader">
                Посмотрите, как это работает, с помощью нашего простого стартового шаблона или просмотрите примеры, чтобы начать свой следующий проект. Вы также можете включить Popper и наш JS по отдельности.
              </p>
            </div>
            <div>
              <div class="editor">
                <button class="editorBtn hui-button  hui-light">копия</button>
                <p class="editorString">npm install bootstrap</p>
              </div>
              <div class="editor">
                <button class="editorBtn hui-button  hui-light">копия</button>
                <p style="padding: 15px;">gem install bootstrap -v 5.1.1</p>
              </div>
            </div>
          </div>
          <button class="hui-pad-25 hui-button hui-light">Посмотреть доки</button>
        </div>

        <div class="hui-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="headerOfBlock">
                HuiCSS иконки
              </p>
              <p class="supHeader">
                Впервые в истории HuiCSS есть собственная библиотека значков SVG с открытым исходным кодом, предназначенная для наилучшей работы с нашими компонентами и документацией.
              </p>
              <p class="subHeader">
                Иконки HuiCSS лучше всего работают с компонентами HuiCSS, но они будут работать в любом проекте. Это SVG-файлы, поэтому они легко и быстро масштабируются, могут быть реализованы несколькими способами и стилизованы с помощью CSS.
              </p>
            </div>
            <div>
              <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png" alt="" class="hui-picture">
            </div>
          </div>
          <button class="hui-pad-25 hui-button hui-light">Получить иконки</button>
        </div>

        <div class="hui-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="headerOfBlock">
                Официальные темы
              </p>
              <p class="supHeader">
                Поднимите HuiCss на новый уровень с премиальными темами с официального магазина Bootstrap Themes.
              </p>
              <p class="subHeader">
                Темы создаются на HuiCss как собственные расширенные фреймворки, богатые новыми компонентами и плагинами, документацией и мощными инструментами сборки.
              </p>
            </div>
            <div>
              <img src="https://getbootstrap.com/docs/5.1/assets/img/bootstrap-themes.png" alt="" class="hui-picture">
            </div>
          </div>
          <button class="hui-pad-25 hui-button hui-light">Смотреть темы</button>
        </div>

      </div>

    </div>

    <HuiFooter />

  </div>
</template>

<script>
import HuiFooter from "@/components/HuiFooter.vue"

export default {
  name: 'Home',
  components: {
    HuiFooter
  }
}
</script>