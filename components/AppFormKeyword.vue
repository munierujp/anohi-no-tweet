<script lang="ts" setup>
const form = useFormStore()
</script>

<template>
  <el-form-item label="キーワード">
    <el-input
      v-model="form.keyword"
      clearable
    />
  </el-form-item>
</template>
