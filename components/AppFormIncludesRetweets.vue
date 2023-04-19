<script lang="ts" setup>
const form = useFormStore()
const style = ref({
  '--el-checkbox-checked-text-color': 'inherit'
})
</script>

<template>
  <el-form-item>
    <el-checkbox
      v-model="form.includesRetweets"
      label="リツイートを含む"
      :style="style"
    />
  </el-form-item>
</template>
