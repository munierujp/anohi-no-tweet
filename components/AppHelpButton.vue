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
    <p>{{ config.name }} は、指定した条件にマッチするツイートの検索結果、Twilog、ツイセーブなどを開くためのウェブアプリです。インストールすることで。ネイティブアプリのように使うことができます。</p>
    <h2>使い方</h2>
    <p>ツイートの検索結果を開くには、「検索」ボタンをクリック（タップ）するか、入力欄にフォーカスが当たった状態でEnterキーを押します。</p>
    <p>Twilogの検索結果を開くには、「Twilog（検索）」ボタンをクリック（タップ）します。</p>
    <p>
      Twilogの特定の日付のページを開くには、「Twilog（日付）」ボタンをクリック（タップ）します。なお、<a
        href="https://twitter.com/ropross/status/1643572802224783361"
        target="_blank"
      >Twilogは2023年4月5日以降ツイートの取得を停止しています。</a>
    </p>
    <p>
      ツイセーブの検索結果を開くには、「ツイセーブ（検索）」ボタンをクリック（タップ）します。
    </p>
    <p>
      ツイセーブの特定の日付のページを開くには、「ツイセーブ（日付）」ボタンをクリック（タップ）します。なお、<a
        href="https://twisave.com/info/elonmusk"
        target="_blank"
      >ツイセーブは2023年4月4日以降ツイートの取得を停止しています。</a>
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
