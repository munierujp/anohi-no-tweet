<script lang="ts" setup>
const showDialog = ref(false)
const openDialog = () => {
  showDialog.value = true
}
const closeDialog = () => {
  showDialog.value = false
}
</script>

<template>
  <AppIconButton
    icon="mdi:help-circle"
    title="ヘルプ"
    @click="openDialog"
  />
  <AppDialog
    v-model="showDialog"
    title="ヘルプ"
  >
    <span>指定した条件にマッチするツイートの検索結果、Twilog、ツイセーブなどを開きます。</span>
    <template #footer>
      <el-button
        :circle="false"
        type="primary"
        @click="closeDialog"
      >
        OK
      </el-button>
    </template>
  </AppDialog>
</template>
