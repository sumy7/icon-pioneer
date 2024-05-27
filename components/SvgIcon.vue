<template>
  <svg class="svg-icon" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconName = computed(() => `#icon-${props.name}`);
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
