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

lenis.on("scroll", (e) => {
  console.log(e);
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
</script>

<style>
</style>