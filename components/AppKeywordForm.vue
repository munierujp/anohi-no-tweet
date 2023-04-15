<script lang="ts" setup>
const formStore = useFormStore()
</script>

<template>
  <v-text-field
    v-model="formStore.keyword"
    type="text"
    label="キーワード"
    hide-details
    clearable
  />
</template>
