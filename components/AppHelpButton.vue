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
    <p>Twitterの検索結果を開くには、「検索」ボタンをクリック（タップ）するか、入力欄にフォーカスが当たった状態でEnterキーを押します。</p>
    <p>
      Twilogを開くには、「Twilog（日付）」ボタンまたは「Twilog（検索）」ボタンをクリック（タップ）します。
      なお、Twilogは2023年4月5日以降ツイートの取得を停止しています。<br>
      <a
        href="https://twitter.com/ropross/status/1643572802224783361"
        target="_blank"
      >https://twitter.com/ropross/status/1643572802224783361</a>
    </p>
    <p>
      ツイセーブを開くには、「ツイセーブ（日付）」ボタンまたは「ツイセーブ（検索）」ボタンをクリック（タップ）します。
      なお、ツイセーブは2023年4月4日以降ツイートの取得を停止しています。<br>
      <a
        href="https://twisave.com/info/elonmusk"
        target="_blank"
      >https://twisave.com/info/elonmusk</a>
    </p>
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
