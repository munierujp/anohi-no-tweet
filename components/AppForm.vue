<script lang="ts" setup>
import {
  parseISO,
  subDays,
  subYears
} from 'date-fns'

const form = useFormStore()
const now = new Date()
const setToToday = () => {
  form.date = formatISODate(now)
}
const setToYesterday = () => {
  form.date = formatISODate(subDays(now, 1))
}
const setToOneYearAgo = () => {
  form.date = formatISODate(subYears(now, 1))
}
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
    <el-form-item label="日付">
      <el-date-picker
        v-model="form.date"
        type="date"
        value-format="YYYY-MM-DD"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button
        size="small"
        :circle="false"
        @click="setToToday"
      >
        今日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="setToYesterday"
      >
        昨日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="setToOneYearAgo"
      >
        1年前
      </el-button>
    </el-form-item>
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
