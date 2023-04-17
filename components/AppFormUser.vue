<script lang="ts" setup>
const form = useFormStore()
</script>

<template>
  <el-form-item label="ユーザー">
    <el-input
      v-model="form.user"
      placeholder="munieru_jp"
      clearable
      autofocus
    />
  </el-form-item>
</template>
