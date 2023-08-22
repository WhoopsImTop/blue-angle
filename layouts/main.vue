<template>
  <div>
    <NuxtLoadingIndicator>
      <img src="/blue-angel-stripclub-bildmarke.svg" width="100" alt="laden..."
    /></NuxtLoadingIndicator>
    <headerComponent />
    <slot />
    <back-to-top-component />
    <footerComponent />
  </div>
</template>

<script setup>
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
onMounted(() => {
  requestAnimationFrame(raf);
});
</script>

<style>
</style>