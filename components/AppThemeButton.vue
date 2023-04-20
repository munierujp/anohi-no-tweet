<script lang="ts" setup>
const appConfig = useAppConfig()
const settings = useSettingsStore()
const theme = ref(settings.theme)
watch(theme, (theme) => {
  settings.theme = theme
})
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
  <AppDialog
    v-model="showDialog"
    title="テーマ"
  >
    <el-radio-group
      v-model="theme"
      class="app-theme-buttons"
    >
      <template
        v-for="item in appConfig.themes"
        :key="item.value"
      >
        <el-radio
          class="app-theme-button"
          :border="true"
          :label="item.value"
          :style="{
            'background-color': item.backgroundColor,
            color: item.color
          }"
        >
          {{ item.name }}
        </el-radio>
      </template>
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
  </AppDialog>
</template>

<style lang="scss">
.app-theme-buttons {
  display: flex;
  flex-direction: column;
}

.app-theme-button {
  width: 130px;
  margin: 0;

  .el-radio__input.is-checked+.el-radio__label {
    color: unset;
  }
}

.app-theme-button:not(:first-child){
  margin-top: 8px;
}
</style>
