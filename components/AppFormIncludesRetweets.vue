<script lang="ts" setup>
const formStore = useFormStore()
</script>

<template>
  <el-form-item>
    <el-checkbox
      v-model="formStore.includesRetweets"
      label="リツイートを含む"
    />
  </el-form-item>
</template>
