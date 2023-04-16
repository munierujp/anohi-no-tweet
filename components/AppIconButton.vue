<script lang="ts" setup>
defineProps<{
  /** @see https://iconify.design/ */
  icon: string
  title?: string
}>()
const iconSize = '24px'
</script>

<template>
  <button
    class="app-icon-button"
    type="button"
    :title="title"
  >
    <Icon
      :name="icon"
      :size="iconSize"
    />
  </button>
</template>

<style lang="scss" scoped>
$size: 48px;
$icon-size: v-bind(iconSize);

%reset-styles {
  appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
  padding: 0;
}

.app-icon-button {
  @extend %reset-styles;
  border-radius: 50%;
  cursor: pointer;
  padding: calc(($size - $icon-size) / 2);
}
</style>
