<template>
  <h1>{{ $t('welcome') }}</h1>
</template>

<script>
definePageMeta({
  layout: "main",
});
export default {
    head() {
        return {
        title: this.$t('welcome'),
        }
    },
}
</script>

<style>

</style>