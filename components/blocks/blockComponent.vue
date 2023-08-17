<template>
  <div class="content-container block-padding">
    <div class="block" v-for="(block, index) in component.block" :key="index">
      <img v-if="block.icon" :src="block.icon" alt="Blue Angel" />
      <h2 v-if="block.blockTitle">{{ block.blockTitle }}</h2>
      <p v-if="block.body" v-html="md.render(block.body)"></p>
      <NuxtLink
        v-if="
          block.link &&
          block.link.linkText &&
          block.link.link
        "
        :to="block.link.link"
        class="button"
        >{{ block.link.linkText }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import md from "markdown-it";
export default {
  props: ["component"],
  data() {
    return {
      md: md(),
    };
  },
  mounted() {
    console.log(this.component);
  },
};
</script>

<style>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--background-red);
  margin: 20px 0;
  text-align: center;
}

.block h2 {
  text-transform: uppercase;
}

.block-padding {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>