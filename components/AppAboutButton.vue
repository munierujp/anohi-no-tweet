<script lang="ts" setup>
const config = useAppConfig()
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
    <p>{{ config.name }} は、{{ config.description }}です。ホーム画面に追加することで、ネイティブアプリのように使うことができます。</p>
  </AppDialog>
</template>
