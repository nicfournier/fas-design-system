<template>
    <div class="thumbnail reveal-card">
      <img class="thumbnail__img reveal-card" src="https://unsplash.it/500/500"/>
      <div class="thumbnail__content">
          <div class="thumbnail__title" v-if="title">{{ title }}</div>
          <div class="thumbnail__subtitle" v-if="answer">{{ answer }}</div>
          <div class="thumbnail__link">{{ link_title }}</div>
      </div>
    </div>
</template>

<script>

export default {
  name: "RevealCard",
  status: "ready",
  release: "1.0.0",
  model: {
      prop: "active",
  },
  props: {
      title:{
          type:String,
          default:'Titre'
      },
      answer:{
          type:String,
          default:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, corrupti.'
      },
      link_title:{
          type:String,
          default:'En savoir plus'
      }
  }
}
</script>

<style lang="scss" scoped>
/*@import '@/assets/custom-scss.scss';*/

/*body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #212121;
}*/

.thumbnail {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 400px;
  box-sizing: border-box;
  height: 400px;
  padding: 30px;
  background-color: #FFF;
  overflow: hidden;
  cursor: pointer;
}

.thumbnail:before,
.thumbnail:after {
  content: "";
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #666;
  z-index: 1;
  transition: transform .25s ease-in-out .3s;
}

.thumbnail:hover:before,
.thumbnail:hover:after {
  transition-delay: 0s;
}

.thumbnail:hover:before {
  transform: translateX(-100%);
}

.thumbnail:hover:after {
  transform: translateX(100%);
}

.thumbnail:before {
  left: 0;
}

.thumbnail:after {
  right: 0;
}

.thumbnail__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.thumbnail__title,
.thumbnail__subtitle,
.thumbnail__link {
  color: #FFF;
  font-family: arial;
  text-align: center;
  line-height: 1.375;
  letter-spacing: 1px;
  overflow: hidden;
  transition: flex-basis .3s ease,
              opacity .3s ease;
}

.thumbnail__title {
  flex: 1 0 100%;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.thumbnail__subtitle {
  flex: 1 0 0;
  margin-bottom: 20px;
  opacity: 0;
}

.thumbnail__link {
  flex: 1 0 100%;
}

.thumbnail:hover .thumbnail__subtitle {
  flex-basis: 60px;
  opacity: 1;
  transition-delay: 0s, .2s;
}

.thumbnail__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
  transition: transform .3s ease .1s;
}

.thumbnail:hover .thumbnail__img {
  transform: scale(1);
}
</style>

<docs>
  ```jsx
  <div class="thumbnail reveal-card">
      <img class="thumbnail__img reveal-card" src="https://unsplash.it/500/500"/>
      <div class="thumbnail__content">
          <div class="thumbnail__title" v-if="title">{{ title }}</div>
          <div class="thumbnail__subtitle" v-if="answer">{{ answer }}</div>
          <div class="thumbnail__link">{{ link_title }}</div>
      </div>
    </div>
  ```
</docs>