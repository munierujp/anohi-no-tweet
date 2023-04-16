<script lang="ts" setup>
import ja from 'element-plus/es/locale/lang/ja'
</script>

<template>
  <VitePwaManifest />
  <el-config-provider :locale="ja">
    <el-container direction="vertical">
      <AppHeader />
      <NuxtPage />
    </el-container>
  </el-config-provider>
</template>

<style lang="scss">
body {
  background-color: #15202B;
  color: #F7F9F9;
}
</style>
