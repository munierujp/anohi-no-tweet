<script lang="ts" setup>
const form = useFormStore()
const openTwisave = () => {
  const url = createTwisaveKeywordSearchURL({
    user: form.user,
    keyword: form.keyword
  })
  window.open(url)
}
</script>

<template>
  <el-form-item>
    <el-button @click="openTwisave">
      ツイセーブ（検索）
    </el-button>
  </el-form-item>
</template>
