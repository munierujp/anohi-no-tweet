<script lang="ts" setup>
const config = useAppConfig()
</script>

<template>
  <el-footer
    id="footer"
    height="auto"
  >
    <el-row>
      <el-col>
        <small>© Munieru</small>
      </el-col>
      <el-col>
        <!-- TODO: バージョンは package.json のものを使うようにする -->
        <small>#あの日のツイートを表示するやつ v{{ config.version }}</small>
      </el-col>
    </el-row>
  </el-footer>
</template>

<style lang="scss" scoped>
#footer {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
