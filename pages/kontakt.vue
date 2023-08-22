<template>
    <div>
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
  const pageData = ref(
    await queryContent("seiten/kontakt." + locale.value).find()
  );
  </script>
  
  <style>
  </style>
  