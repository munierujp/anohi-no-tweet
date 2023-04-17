<script lang="ts" setup>
const form = useFormStore()
</script>

<template>
  <el-form-item>
    <el-checkbox
      v-model="form.includesRetweets"
      label="リツイートを含む"
    />
  </el-form-item>
</template>
