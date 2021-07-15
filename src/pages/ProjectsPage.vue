<template>
  <div class="headline-container">
    <Headline
      title="What have I done?"
      text="Some examples of my work, ranging from voluntary work for non profits to freelance projects."
    />
    <Profile />
  </div>
  <div class="gradient-section px-7 sm:px-10 md:px-5 pt-9">
    <ul class="bullet mt-0 md:mt-7">
      <div class="sm:grid grid-cols-1 sm:grid-cols-8">
        <a
          href="https://inclusion-nudges.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/images/inclusion-nudges.png"
            alt=""
            class="col-span-2 sm:col-span-1 float-left sm:float-none"
          />
        </a>
        <li class="col-span-6 sm:col-span-7 inline sm:block">
          <h2 class="inline text-lg">Inclusion Nudges.</h2>
          Organisation to help drive change in organisations, communities, or
          society for better inclusivity. A Gatsby project.
        </li>
      </div>
      <div class="sm:grid grid-cols-1 sm:grid-cols-8">
        <a
          href="https://www.nimbusdance.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/images/nimbus.png"
            alt=""
            class="col-span-2 sm:col-span-1 float-left sm:float-none"
          />
        </a>
        <li class="col-span-6 sm:col-span-7 inline sm:block">
          <h2 class="inline text-lg">Nimbus Dance Works.</h2>
          Custom WordPress theme for a dance company based in New. For
          advertising the company and event promotion.
        </li>
      </div>
      <div class="sm:grid grid-cols-1 sm:grid-cols-8">
        <a
          href="https://collective.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/images/tech-collective.png"
            alt=""
            class="col-span-2 sm:col-span-1 float-left sm:float-none"
          />
        </a>
        <li class="col-span-6 sm:col-span-7 inline sm:block">
          <h2 class="inline text-lg">Tech Collective.</h2>
          Informational / sign up site for a tech-upskill community for
          collaborative learning. Implemented using Gatsby.
        </li>
      </div>
      <div class="sm:grid grid-cols-1 sm:grid-cols-8">
        <a
          href="https://movetheelephant.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/images/mte.png"
            alt=""
            class="col-span-2 sm:col-span-1 float-left sm:float-none"
          />
        </a>
        <li class="col-span-6 sm:col-span-7 inline sm:block">
          <h2 class="inline text-lg">Move the Elephant.</h2>
          Any code I write will be publicly available should you need someone
          else in future.
        </li>
      </div>
      <div class="sm:grid grid-cols-1 sm:grid-cols-8">
        <a
          href="https://sclerodermainfo.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/images/scleroderma.png"
            alt=""
            class="col-span-2 sm:col-span-1 float-left sm:float-none"
          />
        </a>
        <li class="col-span-6 sm:col-span-7 inline sm:block">
          <h2 class="inline text-lg">Scleroderma Education Project.</h2>
          Research-based information on systemic scleroderma diagnosis and
          treatments.
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import Headline from "../components/Headline.vue";

export default {
  name: "ProjectsPage",
  components: { Profile, Headline },
};
</script>

<style lang="scss" scoped>
.bullet {
  img {
    width: auto;
    max-width: unset;
    max-height: unset;
    height: 70px;
    margin-right: 1rem;

    @screen sm {
      width: auto;
      max-width: 100px;
      max-height: 50px;
      margin-right: 0;
    }
  }
}
</style>
