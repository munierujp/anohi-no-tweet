<script lang="ts" setup>
const config = useAppConfig()
</script>

<template>
  <el-footer
    id="footer"
    height="auto"
  >
    <el-row>
      <el-col>{{ config.name }} v{{ config.version }}</el-col>
      <el-col>© Munieru</el-col>
    </el-row>
  </el-footer>
</template>

<style lang="scss" scoped>
#footer {
  text-align: center;
  font-size: small;
}
</style>
