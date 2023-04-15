<script lang="ts" setup>
const formStore = useFormStore()
</script>

<template>
  <v-checkbox
    v-model="formStore.includesRetweets"
    label="リツイートを含む"
    hide-details
  />
</template>
