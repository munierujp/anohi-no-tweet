<script lang="ts" setup>
const props = defineProps<{
  external?: boolean
  href: string
  /** @see https://iconify.design/ */
  icon: string
  title?: string
}>()
const target = props.external ? '_blank' : undefined
const rel = props.external ? 'noreferrer noopener' : undefined
const iconSize = '24px'
</script>

<template>
  <a
    class="app-icon-link"
    :title="title"
    :href="href"
    :target="target"
    :rel="rel"
  >
    <Icon
      :name="icon"
      :size="iconSize"
    />
  </a>
</template>

<style lang="scss" scoped>
$size: 48px;
$icon-size: v-bind(iconSize);

.app-icon-link {
  border-radius: 50%;
  color: unset;
  padding: calc(($size - $icon-size) / 2);
}
</style>
