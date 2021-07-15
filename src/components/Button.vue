<template>
  <button :type="type">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["label", "type"],
};
</script>

<style lang="scss" scoped>
button {
  background: $lightColour;
  border: 1px solid $secondaryColour;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px $primaryColour;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-family: MenuFont;
  font-size: 18px;
  color: $secondaryColour;
}
</style>
