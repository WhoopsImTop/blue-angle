<template>
  <div>
    <blockrenderer
      v-for="(component, index) in pageData.components"
      :component="component"
      :index="index"
      :key="component.id"
    ></blockrenderer>
  </div>
</template>

<script>
import Lenis from "@studio-freight/lenis";

definePageMeta({
  layout: "main",
});
export default {
  data() {
    return {
      pageData: {
        components: [],
      },
    };
  },

  async mounted() {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },

  beforeMount() {
    this.fetchPageData();
  },

  methods: {
    async fetchPageData() {
      try {
        const page = await queryContent(
          "seiten",
          "startseite." + this.$i18n.locale
        ).find();
        this.pageData = page[0];
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    },
  },
};
</script>

<style>
</style>
