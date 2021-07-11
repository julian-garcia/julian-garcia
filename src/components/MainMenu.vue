<template>
  <ul
    class="
      nav-menu
      grid grid-flow-col
      auto-cols-min
      float-right
      overflow-hidden
      pl-2
    "
  >
    <li>
      <router-link to="/testimonials" class="py-3 px-3 block">
        <span class="inline-block">Testimonials</span>
      </router-link>
    </li>
    <li>
      <router-link to="/projects" class="py-3 px-3 block">
        <span class="inline-block">Projects</span>
      </router-link>
    </li>
    <li>
      <router-link to="/contact" class="py-3 px-3 block">
        <span class="inline-block">Contact</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style lang="scss" scoped>
.nav-menu {
  a {
    font-family: MenuFont;
    -moz-transform: skew(-15deg, 0deg);
    -webkit-transform: skew(-15deg, 0deg);
    -o-transform: skew(-15deg, 0deg);
    -ms-transform: skew(-15deg, 0deg);
    transform: skew(-15deg, 0deg);
    height: 50px;

    span {
      transform: skew(15deg, 0deg);
    }

    &.router-link-active {
      background: $highlightColour;
    }
  }

  li {
    position: relative;
  }

  li::after {
    content: "/";
    position: absolute;
    right: -4px;
    top: 0.7rem;
    z-index: 1;
    font-size: 30px;
    line-height: 23px;
  }

  li:last-of-type {
    &::after {
      content: none;
    }

    a.router-link-active::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 50px;
      background: $highlightColour;
      top: 0;
    }
  }
}
</style>
