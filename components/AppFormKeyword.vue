<script lang="ts" setup>
const formStore = useFormStore()
</script>

<template>
  <el-form-item label="キーワード">
    <el-input
      v-model="formStore.keyword"
      clearable
    />
  </el-form-item>
</template>
