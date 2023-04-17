<script lang="ts" setup>
const showDialog = ref(false)
const openDialog = () => {
  showDialog.value = true
}
</script>

<template>
  <AppIconButton
    icon="mdi:help-circle"
    title="ヘルプ"
    @click="openDialog"
  />
  <client-only>
    <el-dialog
      v-model="showDialog"
      class="app-dialog"
      align-center
    >
      <span>指定した条件にマッチするツイートの検索結果、Twilog、ツイセーブなどを開きます。</span>
    </el-dialog>
  </client-only>
</template>

<style lang="scss">
.app-dialog {
  max-width: 600px;
  width: calc(100vw - 8px * 2);
}
</style>
