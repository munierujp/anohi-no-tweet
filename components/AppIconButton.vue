<script lang="ts" setup>
defineProps<{
  /** @see https://iconify.design/ */
  icon: string
  title?: string
}>()
</script>

<template>
  <button
    class="app-icon-button"
    :title="title"
  >
    <Icon
      :name="icon"
      size="24px"
    />
  </button>
</template>

<style lang="scss" scoped>
.app-icon-button {
  border-radius: 50%;
  padding: 8px;
}
</style>
