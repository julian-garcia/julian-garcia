<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4 p-5">
    <div class="md:col-span-3">
      <h1 class="text-xl">Website construction with long term support</h1>
      <p class="pt-5">
        I'm here to help anyone or any small businesses in need of a unique,
        accessible website without the hassle.
      </p>
    </div>
    <Profile />
  </div>
  <div class="gradient-section grid grid-cols-1 md:grid-cols-6 gap-4 px-5 py-9">
    <ul class="md:col-span-3 bullet">
      <li>
        <h2 class="inline text-lg">Style.</h2>
        I will bring your website to life, applying your unique brand. From
        menus to buttons to forms.
      </li>
      <li>
        <h2 class="inline text-lg">A Nest.</h2>
        Where will all your site content sit? I can optionally handle this for
        you.
      </li>
      <li>
        <h2 class="inline text-lg">Loyalty.</h2>
        Any site I help build, I will support for however long you want.
      </li>
      <li>
        <h2 class="inline text-lg">Transparency.</h2>
        Any code I write will be publicly available should you need someone else
        in future.
      </li>
      <li>
        <h2 class="inline text-lg">Ownership.</h2>
        Ultimately, you will be left with content you can add, edit and remove
        yourself.
      </li>
    </ul>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";

export default {
  name: "ContactPage",
  components: { Profile },
};
</script>

<style scoped></style>
