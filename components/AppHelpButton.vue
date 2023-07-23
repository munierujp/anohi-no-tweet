<script lang="ts" setup>
const config = useAppConfig()
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
    fullscreen
  >
    <h2>これは何？</h2>
    <p>{{ config.name }} は、{{ config.description }}です。ホーム画面に追加することで、ネイティブアプリのように使うことができます。</p>
    <h2>使い方</h2>
    <h3>ツイートの検索結果を開く</h3>
    <p>ツイートの検索結果を開くには、「検索」ボタンをクリック（タップ）するか、入力欄にフォーカスが当たった状態でEnterキーを押します。</p>
    <h3>Twilogの検索結果を開く</h3>
    <p>Twilogの検索結果を開くには、「Twilog（検索）」ボタンをクリック（タップ）します。</p>
    <h3>Twilogの日別ページを開く</h3>
    <p>Twilogの日別ページを開くには、「Twilog（日別）」ボタンをクリック（タップ）します。</p>
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
