<script lang="ts" setup>
const theme = useTheme()
const path = computed(() => `/logo_${theme.value}.png`)
</script>

<template>
  <h1>
    <img
      class="app-logo-image"
      :src="path"
      alt="#あの日のツイートを表示するやつ"
      width="499"
      height="32"
      decoding="async"
    >
  </h1>
  <div>theme: {{ theme }}</div>
  <div>path: {{ path }}</div>
</template>

<style lang="scss" scoped>
.app-logo-image {
  max-width: 100%;
  height: auto;
}
</style>
