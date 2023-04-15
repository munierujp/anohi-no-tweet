<script lang="ts" setup>
const formStore = useFormStore()
</script>

<template>
  <v-text-field
    v-model="formStore.user"
    type="text"
    label="ユーザー名"
    prefix="@"
    placeholder="munieru_jp"
    hide-details
    clearable
    autofocus
  />
</template>
