<template>
  <div class="headline-container">
    <div class="md:col-span-3">
      <h1 class="text-xl italic">Can I trust you?</h1>
      <p class="pt-5">
        You can't just take my word for it, so here are some comments I've
        gathered along the way.
      </p>
    </div>
    <Profile />
  </div>
  <div class="gradient-section">
    <div class="testimonial left">
      <p class="quote">
        Thank you so much for your work on the KEIGWIN + COMPANY website - I
        absolutely love what you created - stylish, simple and functional. I
        also heard nothing but positive feedback about working with you. You
        have the magic combination of “talent” and “great to work with”. I hope
        we all get to work together in the future.
      </p>
      <h2 class="person">Larry Keigwin,<br />Keigwin + Company</h2>
    </div>
    <div class="testimonial right">
      <p class="quote">
        Julian is an exceptional front end developer. Julian was able to develop
        a complex site that works seamlessly across all browsers and screen
        sizes. The final product exceeded my expectations. He is also a pleasure
        to work with. I highly recommend him to anyone looking to build a
        sophisticated and functional web presence
      </p>
      <h2 class="person">
        Christine Lhowe, Web Designer<br />Nimbus Dance Works
      </h2>
    </div>
    <div class="clear-both"></div>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";

export default {
  name: "TestimonialsPage",
  components: { Profile },
};
</script>

<style lang="scss" scoped>
.testimonial {
  max-width: 450px;

  @apply ml-4 mb-16 relative;

  &::before {
    content: '"';
    position: absolute;
    font-family: TitleFont;
    font-size: 70px;
    font-style: italic;
    line-height: 70px;
  }

  &.left {
    box-shadow: 9px -9px 0px $secondaryColour;
    &::before {
      color: $primaryColour;
      top: -15px;
      left: -15px;
    }

    .quote {
      border: 2px solid $secondaryColour;
    }

    .person {
      color: $secondaryColour;
    }
  }

  &.right {
    box-shadow: -9px -9px 0px $primaryColour;
    @apply float-right mr-4;

    &::before {
      color: $secondaryColour;
      top: -15px;
      left: -15px;
    }

    .quote {
      border: 2px solid $primaryColour;
    }

    .person {
      color: $primaryColour;
    }
  }

  .quote {
    background: white;
    @apply p-4;
  }

  .person {
    background: rgba(white, 0.85);
    @apply absolute right-2 px-2 -bottom-6;
  }
}
</style>
