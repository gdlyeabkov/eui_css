<template>
  <div>
    <HuiHeader />
    <div class="hui-main">
      <div style="margin-top: 25px; margin-left: 25px;">
        <div style="float: left; width: 55%;">
          <p class="hui-header-of-block">
            Иконки HuiCSS
          </p>
          <p class="hui-desc-of-block">
            Бесплатная высококачественная библиотека значков с открытым исходным кодом, содержащая более 1300 значков. Включите их как хотите - SVG, спрайты SVG или веб-шрифты. Используйте их с HuiCSS или без него в любом проекте.
          </p>
          <div style="margin: 15px;">
            <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                <p class="hui-editor-string">npm i HuiCSS-icons</p>
            </div>              
          </div>
          <p>Currently v5.1.1 · v4.6.x docs · All releases</p>
        </div>
        <div style="clear: both;"></div>
        <div class="hui-pad-25">
            <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
            </div>
            <p class="hui-header-of-block">
                Установка
            </p>
            <p class="hui-supHeader">
                Значки начальной загрузки публикуются в npm, но при необходимости их также можно загрузить вручную.
            </p>
        <div style="width: 100%; display: flex;">
            <div style="width: 25%;">
                <p class="hui-header-of-block">
                    npm
                </p>
                <p class="hui-supHeader">
                    Установите значки HuiCSS, включая SVG, спрайты значков и шрифты значков, с помощью npm. Затем выберите способ добавления значков в инструкции по использованию.
                </p>
                <div class="hui-editor">
                    <button class="hui-editor-btn hui-button  hui-light">копия</button>
                    <p class="hui-editor-string">npm install HuiCSS</p>
                </div>
                
            </div>
            <div style="width: 25%;">
                <p class="hui-header-of-block">
                    Скачать
                </p>
                <p class="hui-supHeader">
                    Релизы публикуются на GitHub и включают значки SVG, шрифты, лицензию и файл readme. Наш package.json также включен, хотя наши сценарии npm в основном доступны для наших рабочих процессов разработки.
                </p>
                <button class="hui-button  hui-light">Скачать последний ZIP</button>    
            </div>
            <div style="width: 25%;">
                <p class="hui-header-of-block">
                    CDN
                </p>
                <p class="hui-supHeader">
                    Включите таблицу стилей шрифтов значков - в head> вашего веб-сайта или через @import в CSS - из нашей CDN и приступайте к работе за секунды. Примеры см. В документации по шрифтам значков.
                </p>
                <div class="hui-editor">
                    <button class="hui-editor-btn hui-button  hui-light">копия</button>
                    <p class="hui-editor-string">npm install HuiCSS</p>
                </div>
                <div class="hui-editor">
                    <button class="hui-editor-btn hui-button  hui-light">копия</button>
                    <p class="hui-editor-string">npm install HuiCSS</p>
                </div>
              
            </div>
          </div>
          <div>
                <p class="hui-header-of-block">
                    Использование
                </p>
                <p>
                    Иконки HuiCSS - это SVG, поэтому вы можете включать их в свой HTML несколькими способами в зависимости от того, как настроен ваш проект. Значки HuiCSS по умолчанию имеют ширину и высоту 1em, что позволяет легко изменять размер с помощью font-size.
                </p>
          </div>
        </div>

        <div class="hui-pad-25">
          <div style="margin-left: 25px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png'); background-size: 100% 100%; float: left; width: 75px; height: 75px;">
          </div>
          <div style="width: 100%; display: flex;">
            <div style="width: 35%;">
              <p class="hui-header-block">
                jsDelivr
              </p>
              <p class="hui-supHeader">
                Когда вам нужно включить только скомпилированный CSS или JS HuiCSS, вы можете использовать jsDelivr.
              </p>
              <p class="hui-sub-header">
                Посмотрите, как это работает, с помощью нашего простого стартового шаблона или просмотрите примеры, чтобы начать свой следующий проект. Вы также можете включить Popper и наш JS по отдельности.
              </p>
            </div>
            <div>
              <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                <p class="hui-editor-string">npm install HuiCSS</p>
              </div>
              <div class="hui-editor">
                <button class="hui-editor-btn hui-button  hui-light">копия</button>
                <p style="padding: 15px;">gem install HuiCSS -v 5.1.1</p>
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
              <p class="hui-header-block">
                HuiCSS иконки
              </p>
              <p class="hui-supHeader">
                Впервые в истории HuiCSS есть собственная библиотека значков SVG с открытым исходным кодом, предназначенная для наилучшей работы с нашими компонентами и документацией.
              </p>
              <p class="hui-sub-header">
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
              <p class="hui-header-of-block">
                Официальные темы
              </p>
              <p class="hui-sup-header">
                Поднимите HuiCss на новый уровень с премиальными темами с официального магазина HuiCSS Themes.
              </p>
              <p class="hui-sub-header">
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
import HuiHeader from "@/components/HuiHeader.vue"
import HuiFooter from "@/components/HuiFooter.vue"

export default {
  name: 'Home',
  components: {
    HuiHeader,
    HuiFooter
  }
}
</script>