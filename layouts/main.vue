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

<script>
export default {};
</script>

<style>
</style>