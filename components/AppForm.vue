<script lang="ts" setup>
import { parseISO } from 'date-fns'

const form = useFormStore()
const openTwitter = () => {
  const url = createTwitterSearchURL({
    user: form.user,
    date: parseISO(form.date),
    keyword: form.keyword,
    includesRetweets: form.includesRetweets
  })
  window.open(url)
}
const handleEnter = (event: KeyboardEvent) => {
  if (event.keyCode === 13) {
    openTwitter()
  }
}
</script>

<template>
  <el-form
    label-position="top"
    @keydown.enter="handleEnter"
  >
    <el-form-item label="ユーザー">
      <el-input
        v-model="form.user"
        placeholder="munieru_jp"
        clearable
        autofocus
      />
    </el-form-item>
    <AppFormDate />
    <AppFormKeyword />
    <AppFormIncludesRetweets />
    <el-form-item>
      <el-button
        type="primary"
        :circle="false"
        @click="openTwitter"
      >
        検索
      </el-button>
    </el-form-item>
    <AppFormTwilogDate />
    <AppFormTwilogSearch />
    <AppFormTwisaveDate />
    <AppFormTwisaveSearch />
  </el-form>
</template>
