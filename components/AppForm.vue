<script lang="ts" setup>
const form = useFormStore()
const onClickTwisaveSearchButton = () => {
  const url = createTwisaveKeywordSearchURL({
    user: form.user,
    keyword: form.keyword
  })
  window.open(url)
}
</script>

<template>
  <el-form label-position="top">
    <AppFormUser />
    <AppFormDate />
    <AppFormKeyword />
    <AppFormIncludesRetweets />
    <AppFormSearch />
    <AppFormTwilogDate />
    <AppFormTwilogSearch />
    <AppFormTwisaveDate />
    <!-- TODO: コンポーネント化 -->
    <el-form-item>
      <el-button @click="onClickTwisaveSearchButton">
        ツイセーブ（検索）
      </el-button>
    </el-form-item>
  </el-form>
</template>
