<script lang="ts" setup>
const config = useAppConfig()
const settings = useSettingsStore()
const theme = ref(settings.theme)
watch(theme, (theme) => {
  settings.theme = theme
})
const darkThemes = new Set(config.themes.filter(({ dark }) => dark).map(({ value }) => value))
const dark = computed(() => darkThemes.has(theme.value))
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
    <span>お好みのテーマを選んでください。</span>
    <el-radio-group
      v-model="theme"
      class="app-theme-buttons"
    >
      <template
        v-for="{ name, value, style } in config.themes"
        :key="value"
      >
        <el-radio
          class="app-theme-button"
          :border="true"
          :label="value"
          :style="style"
        >
          {{ name }}
        </el-radio>
      </template>
    </el-radio-group>
  </AppDialog>
</template>

<style lang="scss">
.app-theme-buttons {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.app-theme-button {
  width: 130px;
  margin: 0;

  &:not(:first-child){
    margin-top: 8px;
  }

  .el-radio__input.is-checked+.el-radio__label {
    color: unset;
  }
}
</style>
