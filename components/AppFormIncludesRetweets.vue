<script lang="ts" setup>
const form = useFormStore()
const style = reactive({
  '--el-checkbox-checked-text-color': 'unset'
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
