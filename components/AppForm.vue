<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const onClickTwilogSearchButton = () => {
  const url = createTwilogKeywordSearchURL({
    user: formStore.user,
    keyword: formStore.keyword
  })
  window.open(url)
}
const onClickTwisaveDateButton = () => {
  const url = createTwisaveDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
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
    <el-form-item>
      <el-button @click="onClickTwisaveDateButton">
        ツイセーブ（日付）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button @click="onClickTwisaveSearchButton">
        ツイセーブ（検索）
      </el-button>
    </el-form-item>
  </el-form>
</template>
