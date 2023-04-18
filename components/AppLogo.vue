<script lang="ts" setup>
const config = useConfigStore()
const path = computed(() => `/logo_${config.theme}.png`)
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
</template>

<style lang="scss" scoped>
.app-logo-image {
  max-width: 100%;
  height: auto;
}
</style>
