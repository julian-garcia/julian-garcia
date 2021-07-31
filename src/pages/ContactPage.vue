<template>
  <div class="headline-container">
    <div class="md:col-span-3">
      <h1 class="text-xl italic">
        Website construction with long term support
      </h1>
      <p class="pt-5">
        I'm here to help anyone or any small businesses in need of a unique,
        accessible website without the hassle.
      </p>
    </div>
    <Profile />
  </div>
  <div
    class="gradient-section grid grid-cols-1 md:grid-cols-6 gap-12 px-5 pt-9"
  >
    <ul class="md:col-span-4 bullet mt-7">
      <li>
        <h2 class="inline text-lg">Style.</h2>
        I will bring your website to life, applying your unique brand. From
        layout and colour scheme to menus and forms.
        <font-awesome-icon icon="border-style" class="usp-icon" />
      </li>
      <li>
        <h2 class="inline text-lg">A Nest.</h2>
        Where will all your site content sit? I can optionally handle this for
        you.
        <font-awesome-icon icon="igloo" class="usp-icon" />
      </li>
      <li>
        <h2 class="inline text-lg">Loyalty.</h2>
        Any site I help build, I will support for however long you want.
        <font-awesome-icon icon="hand-holding-heart" class="usp-icon" />
      </li>
      <li>
        <h2 class="inline text-lg">Transparency.</h2>
        All code I write will be publicly available should you need someone else
        in future.
        <font-awesome-icon icon="unlock-alt" class="usp-icon" />
      </li>
      <li>
        <h2 class="inline text-lg">Ownership.</h2>
        Ultimately, you will be left with content you can add, edit and remove
        yourself.
        <font-awesome-icon icon="key" class="usp-icon" />
      </li>
    </ul>
    <form class="w-full md:col-span-2 mt-2" @submit.prevent="sendMessage">
      <FormInput
        type="email"
        name="emailAddress"
        label="Email"
        hint="So I can get back to you"
        v-model:emailAddress="emailAddress"
      />
      <FormInput
        type="textarea"
        name="message"
        label="Message"
        v-model:message="message"
      />
      <Button type="submit" label="Send" />
    </form>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import FormInput from "../components/FormInput.vue";
import Button from "../components/Button.vue";
import emailjs from "emailjs-com";

export default {
  name: "ContactPage",
  components: { Profile, FormInput, Button },
  data() {
    return { emailAddress: "", message: "" };
  },
  methods: {
    sendMessage() {
      if (this.$data.emailAddress && this.$data.message) {
        document.getElementById("emailAddress").value = "";
        document.getElementById("message").value = "";

        const templateParams = {
          email: this.$data.emailAddress,
          message: this.$data.message,
        };

        emailjs
          .send(
            process.env.VUE_APP_EMAILJS_SERVICE_ID,
            process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.VUE_APP_EMAILJS_USER_ID
          )
          .then(
            (response) => {
              console.log(response.status, response.text);
              this.emailAddress = "";
              this.message = "";
              alert(
                `Thanks - your message has been sent, I'll get back to you`
              );
            },
            (err) => {
              console.error(err);
            }
          );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bullet {
  li {
    position: relative;
    padding-right: 45px;
  }
}
.usp-icon {
  position: absolute;
  right: 0;
  top: 4px;
  font-size: 36px;
  width: 36px;
  color: $primaryColour;
}
</style>
