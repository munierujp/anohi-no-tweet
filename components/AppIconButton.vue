<script lang="ts" setup>
defineProps<{
  /** @see https://iconify.design/ */
  icon: string
  title?: string
}>()
const size = '24px'
</script>

<template>
  <button
    class="app-icon-button"
    type="button"
    :title="title"
  >
    <Icon
      :name="icon"
      :size="size"
    />
  </button>
</template>

<style lang="scss" scoped>
$size: 48px;
$icon-size: v-bind(size);

.app-icon-button {
  border-radius: 50%;
  padding: calc(($size - $icon-size) / 2);
}
</style>
