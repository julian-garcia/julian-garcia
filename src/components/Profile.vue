<template>
  <div class="profile grid grid-flow-col auto-cols-max mx-auto">
    <div class="profile-links">
      <a
        class="block mt-4 ml-7"
        href="../../julian_garcia.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <font-awesome-icon icon="file-download" />
      </a>
      <a
        class="block mt-1 ml-1"
        href="https://github.com/julian-garcia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'github-square']" />
      </a>
      <a
        class="block mt-1 ml-0.5"
        href="https://www.linkedin.com/in/juliangarcialeoni/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        class="block mt-1"
        href="https://www.catchafire.org/profiles/71413/impact/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/images/catchafire.svg" alt="" class="ml-6" />
      </a>
    </div>
    <div class="profile-image"></div>
    <div class="profile-logos">
      <img src="../assets/images/gatsby.svg" alt="" />
      <font-awesome-icon :icon="['fab', 'js-square']" />
      <font-awesome-icon :icon="['fab', 'angular']" />
      <font-awesome-icon :icon="['fab', 'vuejs']" />
      <font-awesome-icon :icon="['fab', 'sass']" />
      <font-awesome-icon :icon="['fab', 'git-square']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
.profile-links {
  z-index: 1;
  width: 36px;

  a {
    font-size: 26px;
    color: white;
  }
}

.profile-image {
  position: relative;
  background-image: url("../assets/images/me.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -12px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 3px solid $primaryColour;
  -webkit-box-shadow: -50px 0px 0px 0px rgba($primaryColour, 0.8);
  -moz-box-shadow: -50px 0px 0px 0px rgba($primaryColour, 0.8);
  box-shadow: -50px 0px 0px 0px rgba($primaryColour, 0.8);
}

.profile-logos {
  color: rgba($primaryColour, 0.4);
  font-size: 26px;

  & > * {
    display: block;
    margin: 0 auto 0.5rem;
  }
}
</style>
