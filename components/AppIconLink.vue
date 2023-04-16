<script lang="ts" setup>
defineProps<{
  href: string
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
.app-icon-link {
  border-radius: 50%;
  color: unset;
  padding: 8px;
}
</style>
