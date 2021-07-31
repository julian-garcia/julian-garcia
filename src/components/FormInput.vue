<template>
  <label :for="name">{{ label }}</label>
  <p class="hint" v-if="hint">{{ hint }}</p>
  <input
    v-if="type === 'text' || type === 'email'"
    :type="type"
    :name="name"
    :id="name"
    @input="handleInput"
  />
  <textarea
    v-if="type === 'textarea'"
    :name="name"
    :id="name"
    cols="30"
    rows="10"
    @input="handleInput"
  ></textarea>
</template>

<script>
export default {
  name: "FormInput",
  props: ["type", "name", "label", "hint"],
  methods: {
    handleInput(e) {
      this.$emit(`update:${this.$props.name}`, e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-family: MenuFont;
  color: $secondaryColour;
  margin-bottom: 5px;
  display: block;
}
input,
textarea {
  background: $lightColour;
  border: 1px solid $secondaryColour;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px $primaryColour;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-family: BodyFont;
  font-size: 18px;
}
textarea {
  min-height: 150px;
  max-height: 150px;
  width: 100%;
}

input:focus,
textarea:focus {
  outline: none;
}
.hint {
  color: darken($primaryColour, 10);
  font-size: 16px;
  margin-top: -7px;
}
</style>
