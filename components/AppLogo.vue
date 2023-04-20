<script lang="ts" setup>
const config = useAppConfig()
const theme = useTheme()
const color = computed(() => config.themes.find(({ value }) => value === theme.value)?.style.color)
</script>

<template>
  <h1>
    <AppLogoImage
      class="app-logo-image"
      :color="color"
      alt="#あの日のツイートを表示するやつ"
    />
  </h1>
</template>

<style lang="scss" scoped>
.app-logo-image {
  fill: var(--app-color);
  width: 499px;
  max-width: 100%;
}
</style>
