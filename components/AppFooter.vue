<script lang="ts" setup>
const config = useAppConfig()
</script>

<template>
  <el-footer
    id="footer"
    height="auto"
  >
    <span>{{ config.name }} v{{ config.version }}</span>
    <span>© Munieru</span>
  </el-footer>
</template>

<style lang="scss" scoped>
#footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: small;
}
</style>
