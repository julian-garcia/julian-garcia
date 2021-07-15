<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4 p-5 w-full">
    <div class="md:col-span-3">
      <h1 class="text-xl italic">Oops!</h1>
      <p class="pt-5">
        There's nothing to see here, where would you like to go?
      </p>
      <router-link to="/contact" class="page-link">Contact</router-link> /
      <router-link to="/projects" class="page-link">Projects</router-link>
    </div>
    <Profile />
  </div>
  <div class="py-1"></div>
</template>

<script>
import Profile from "../components/Profile.vue";

export default {
  name: "ContactPage",
  components: { Profile },
};
</script>
