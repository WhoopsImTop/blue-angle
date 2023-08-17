<template>
    <div>
        <text-component v-if="component.type === 'contentblock'" :component="component" :index="index"></text-component>
        <block-component v-else-if="component.type === 'blocks'" :component="component"></block-component>
    </div>
</template>

<script>
import textComponent from './blocks/textComponent.vue';
import blockComponent from './blocks/blockComponent.vue';
export default {
  components: { textComponent, blockComponent },
  props: ["component", "index"],
};
</script>

<style>
</style>