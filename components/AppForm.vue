<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const onClickSearchButton = () => {
  const url = createTwitterSearchURL({
    user: formStore.user,
    date: parseISO(formStore.date),
    keyword: formStore.keyword,
    includesRetweets: formStore.includesRetweets
  })
  window.open(url)
}
const onClickTwilogDateButton = () => {
  const url = createTwilogDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
  })
  window.open(url)
}
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
    <el-form-item label="キーワード">
      <el-input
        v-model="formStore.keyword"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox
        v-model="formStore.includesRetweets"
        label="リツイートを含む"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="onClickSearchButton"
      >
        検索
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button @click="onClickTwilogDateButton">
        Twilog（日付）
      </el-button>
    </el-form-item>
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
