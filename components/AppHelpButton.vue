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
      width="min(calc(100vw - 16px), 600px)"
      align-center
    >
      <span>指定した条件にマッチするツイートの検索結果、Twilog、ツイセーブなどを開きます。</span>
    </el-dialog>
  </client-only>
</template>
