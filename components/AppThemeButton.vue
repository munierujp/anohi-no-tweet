<script lang="ts" setup>
const config = useConfigStore()
const theme = ref(config.theme)
const dark = computed(() => theme.value === 'darkblue' || theme.value === 'black')
useHead({
  htmlAttrs: {
    class: {
      dark
    }
  },
  bodyAttrs: {
    'data-theme': theme
  }
})
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
    icon="mdi:color"
    title="テーマ"
    @click="openDialog"
  />
  <client-only>
    <el-dialog
      v-model="showDialog"
      title="テーマ"
      class="app-dialog"
      align-center
    >
      <el-radio-group
        v-model="theme"
        class="app-theme-buttons"
      >
        <el-radio
          class="app-theme-button"
          :border="true"
          label="white"
        >
          ホワイト
        </el-radio>
        <el-radio
          class="app-theme-button"
          :border="true"
          label="darkblue"
        >
          ダークブルー
        </el-radio>
        <el-radio
          class="app-theme-button"
          :border="true"
          label="black"
        >
          ブラック
        </el-radio>
      </el-radio-group>
      <template #footer>
        <el-button
          :circle="false"
          type="primary"
          @click="closeDialog"
        >
          OK
        </el-button>
      </template>
    </el-dialog>
  </client-only>
</template>

<style lang="scss">
.app-dialog {
  max-width: 600px;
  width: calc(100vw - 8px * 2);
}

.app-theme-buttons {
  display: flex;
  flex-direction: column;
}

.app-theme-button {
  width: 130px;
  margin: 0;
}

.app-theme-button:not(:first-child){
  margin-top: 8px;
}
</style>
