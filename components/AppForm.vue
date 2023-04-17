<script lang="ts" setup>
const form = useFormStore()
const onClickTwilogSearchButton = () => {
  const url = createTwilogKeywordSearchURL({
    user: form.user,
    keyword: form.keyword
  })
  window.open(url)
}
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
    <!-- TODO: コンポーネント化 -->
    <el-form-item>
      <el-button @click="onClickTwilogSearchButton">
        Twilog（検索）
      </el-button>
    </el-form-item>
    <AppFormTwisaveDate />
    <!-- TODO: コンポーネント化 -->
    <el-form-item>
      <el-button @click="onClickTwisaveSearchButton">
        ツイセーブ（検索）
      </el-button>
    </el-form-item>
  </el-form>
</template>
