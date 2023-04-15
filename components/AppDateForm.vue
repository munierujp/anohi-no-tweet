<script lang="ts" setup>
const formStore = useFormStore()
</script>

<template>
  <v-text-field
    v-model="formStore.date"
    type="date"
    label="日付"
    hide-details
    clearable
  />
</template>
