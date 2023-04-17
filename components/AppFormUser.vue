<script lang="ts" setup>
const formStore = useFormStore()
</script>

<template>
  <el-form-item label="ユーザー">
    <el-input
      v-model="formStore.user"
      placeholder="munieru_jp"
      clearable
      autofocus
    />
  </el-form-item>
</template>
