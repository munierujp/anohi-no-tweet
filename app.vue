<script lang="ts" setup>
import ja from 'element-plus/es/locale/lang/ja'
</script>

<template>
  <VitePwaManifest />
  <el-config-provider :locale="ja">
    <el-container direction="vertical">
      <AppHeader />
      <NuxtPage />
      <el-divider />
      <AppFooter />
    </el-container>
  </el-config-provider>
</template>
