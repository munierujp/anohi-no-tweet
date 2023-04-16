<script lang="ts" setup>
defineProps<{
  href: string
  /** @see https://iconify.design/ */
  icon: string
  title?: string
}>()
</script>

<template>
  <a
    class="app-icon-link"
    :title="title"
    :href="href"
    target="_blank"
    rel="noreferrer noopener"
  >
    <Icon
      :name="icon"
      size="24px"
    />
  </a>
</template>

<style lang="scss" scoped>
$size: 48px;
$icon-size: 24px;

.app-icon-link {
  border-radius: 50%;
  color: unset;
  padding: calc(($size - $icon-size) / 2);
}
</style>
