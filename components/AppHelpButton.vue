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
  <v-btn
    title="ヘルプ"
    icon="mdi-help-circle"
    @click="openDialog"
  />
  <v-dialog
    v-model="showDialog"
    width="auto"
  >
    <v-card>
      <v-card-text>指定した条件にマッチするツイートの検索結果、Twilog、ツイセーブなどを開きます。</v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          block
          @click="closeDialog"
        >
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
