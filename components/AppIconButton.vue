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

.app-icon-button {
  appearance: none;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: calc(($size - $icon-size) / 2);
}
</style>
