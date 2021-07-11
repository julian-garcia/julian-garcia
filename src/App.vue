<template>
  <div class="container cube mx-auto">
    <MainMenu />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";

export default {
  name: 'App',
  components: { MainMenu },
};
</script>

<style lang="scss">
.container.cube {
  border: 3px solid #000000;
  border-bottom: none;
  box-sizing: border-box;
  background: white;
  margin-top: 2rem;
  min-height: calc(100vh - 2rem);
  max-width: 800px;
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    min-height: calc(100vh - 2rem - 53px);
    top: 50px;
  }

  &:after {
    width: 800px;
    right: -50px;
    border: 3px solid #000000;
    background: $secondaryColour;
    z-index: -1;
    border-bottom: none;
  }

  &:before {
    width: 750px;
    right: -3px;
    border: 3px dashed #999;
  }

  .content {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: 50px;
    left: 50px;
  }
}

@font-face {
  font-family: "BodyFont";
  src: url("./assets/fonts/FrankRuhlLibre-Regular.woff2") format("woff2"),
    url("./assets/fonts/FrankRuhlLibre-Regular.woff") format("woff");
}

@font-face {
  font-family: "TitleFont";
  src: url("./assets/fonts/MontserratAlternates-Bold.woff2") format("woff2"),
    url("./assets/fonts/MontserratAlternates-Bold.woff") format("woff");
}

@font-face {
  font-family: "MenuFont";
  src: url("./assets/fonts/Stoke-Regular.woff2") format("woff2"),
    url("./assets/fonts/Stoke-Regular.woff") format("woff");
}
</style>
