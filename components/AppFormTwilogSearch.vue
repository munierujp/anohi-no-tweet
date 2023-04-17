<script lang="ts" setup>
const form = useFormStore()
const openTwilog = () => {
  const url = createTwilogKeywordSearchURL({
    user: form.user,
    keyword: form.keyword
  })
  window.open(url)
}
</script>

<template>
  <el-form-item>
    <el-button @click="openTwilog">
      Twilog（検索）
    </el-button>
  </el-form-item>
</template>
