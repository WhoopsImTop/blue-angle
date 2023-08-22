<template>
  <div v-if="!loading">
    <blockrenderer
      v-for="(component, index) in pageData[0].components"
      :component="component"
      :index="index"
      :key="component.id"
    ></blockrenderer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const { locale } = useI18n();
const pageData = ref([]);
const loading = ref(true);

onBeforeMount(async () => {
  const data = await queryContent("seiten/gallerie." + locale.value).find();
  console.log(data);
  pageData.value = data;
  loading.value = false;
});
</script>

<style>
</style>
