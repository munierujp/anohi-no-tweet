<script lang="ts" setup>
const showDialog = ref(false)
const openDialog = () => {
  showDialog.value = true
}
</script>

<template>
  <AppIconButton
    icon="mdi:information-circle"
    title="About"
    @click="openDialog"
  />
  <AppDialog
    v-model="showDialog"
    title="About"
  >
    <p>#あの日のツイートを表示するやつ は、Xのツイート（ポスト）を指定した条件で検索するためのウェブアプリです。ホーム画面に追加することで、ネイティブアプリのように使うことができます。</p>
  </AppDialog>
</template>
