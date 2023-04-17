<script lang="ts" setup>
const formStore = useFormStore()
const onClickTwilogSearchButton = () => {
  const url = createTwilogKeywordSearchURL({
    user: formStore.user,
    keyword: formStore.keyword
  })
  window.open(url)
}
const onClickTwisaveSearchButton = () => {
  const url = createTwisaveKeywordSearchURL({
    user: formStore.user,
    keyword: formStore.keyword
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
    <el-form-item>
      <el-button @click="onClickTwilogSearchButton">
        Twilog（検索）
      </el-button>
    </el-form-item>
    <AppFormTwisaveDate />
    <el-form-item>
      <el-button @click="onClickTwisaveSearchButton">
        ツイセーブ（検索）
      </el-button>
    </el-form-item>
  </el-form>
</template>
