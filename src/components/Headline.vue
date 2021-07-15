<template>
  <div class="md:col-span-3">
    <h1 class="text-xl italic">{{ title }}</h1>
    <p class="pt-5">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Headline",
  props: { title: String, text: String },
};
</script>

<style lang="scss" scoped></style>
