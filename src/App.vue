<template>
  <div class="app-container cube md:mx-auto">
    <MainMenu />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";

export default {
  name: "App",
  components: { MainMenu },
};
</script>

<style lang="scss">
.app-container.cube {
  border: 5px solid darken($primaryColour, 10);
  box-sizing: border-box;
  background: white;
  min-height: 500px;
  max-width: 800px;
  position: relative;

  @apply mt-0 md:mt-8;

  &:after,
  &:before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    min-height: 400px;
    top: 50px;
  }

  &:before {
    height: calc(100% - 45px);
  }

  &:after {
    width: 800px;
    border: 5px solid darken($secondaryColour, 10);
    background: $secondaryColour;
    z-index: -1;
    height: 100%;

    @apply hidden md:block;

    @screen md {
      right: -53px;
    }
  }

  &:before {
    right: -3px;
    border: 3px dashed darken($lightColour, 10);
    border-left: none;
    border-right: none;
    border-bottom: none;
    left: 0;
    width: 100%;
    max-width: 752px;

    @screen md {
      left: 43px;
      border-left: 3px dashed darken($lightColour, 10);
      border-right: 3px dashed darken($lightColour, 10);
      border-bottom: 3px dashed darken($lightColour, 10);
    }
  }

  .content {
    box-sizing: border-box;

    @apply relative md:mt-12;

    @screen md {
      margin-left: calc(3rem - 2px);
    }
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
