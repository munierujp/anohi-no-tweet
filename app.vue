<script lang="ts" setup>
import ja from 'element-plus/es/locale/lang/ja'
</script>

<template>
  <VitePwaManifest />
  <el-config-provider :locale="ja">
    <v-app id="app">
      <AppHeader />
      <NuxtPage />
    </v-app>
  </el-config-provider>
</template>

<style lang="scss" scoped>
#app {
  color: #F7F9F9;
}
</style>
