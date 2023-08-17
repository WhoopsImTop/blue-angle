<template>
  <div :class="returnClasses" :style="returnStyle">
    <div class="content-container text-block">
      <h1
        v-if="component.mainHeadline && index == 0"
        style="margin-bottom: 0px"
      >
        {{ component.mainHeadline }}
      </h1>
      <h2 v-else>{{ component.mainHeadline }}</h2>
      <h3
        v-if="component.subHeadline"
        :style="index == 0 ? 'margin-top: 5px' : ''"
      >
        {{ component.subHeadline }}
      </h3>
      <p
        v-if="component.contentText"
        v-html="md.render(component.contentText)"
      ></p>
      <NuxtLink
        v-if="
          component.button &&
          component.button.buttonText &&
          component.button.buttonLink
        "
        :to="component.button.buttonLink"
        :class="component.button.buttonIcon ? 'append-icon' : ''"
        class="button"
        >{{ component.button.buttonText }}</NuxtLink
      >
      <img
        v-if="component.imageblock && component.imageblock.image"
        :src="component.imageblock.image"
        :alt="component.mainHeadline"
      />
      <div v-if="component.faq">
        <faq-component :faqs="component.faq"></faq-component>
      </div>
    </div>
  </div>
</template>

<script>
import md from "markdown-it";
import faqComponent from "./faqComponent.vue";
export default {
  props: ["component", "index"],
  components: { faqComponent },
  data() {
    return {
      md: md(),
    };
  },
  computed: {
    backgroundImage() {
      //check if component.imageblock exists and if it has a backgroundImage property
      return (
        this.component.imageblock && this.component.imageblock.backgroundImage
      );
    },
    returnStyle() {
      return {
        "background-image": this.backgroundImage
          ? `url(${this.backgroundImage})`
          : "",
        "background-size": "cover",
        "background-position": "center",
      };
    },
    returnClasses() {
      return {
        "full-height":
          this.component.imageblock &&
          this.component.imageblock.backgroundImage,
        highlighted: this.component.highlight,
      };
    },
  },
};
</script>

<style>
.full-height {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-block {
  padding-top: 100px;
  padding-bottom: 100px;
}

.highlighted {
  background-color: var(--red);
  color: var(--background-dark);
}

.highlighted h2,
.highlighted h3,
.highlighted p {
  color: var(--background-dark);
}
</style>