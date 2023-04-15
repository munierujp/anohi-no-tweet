<script lang="ts" setup>
import {
  subDays,
  subMonths,
  subWeeks,
  subYears
} from 'date-fns'

const formStore = useFormStore()
const now = new Date()
const dateShortcuts: {
  text: string,
  value: Date
}[] = [
  {
    text: '今日',
    value: now
  },
  {
    text: '昨日',
    value: subDays(now, 1)
  },
  {
    text: '1週間前',
    value: subWeeks(now, 1)
  },
  {
    text: '1ヶ月前',
    value: subMonths(now, 1)
  },
  {
    text: '1年前',
    value: subYears(now, 1)
  }
]
</script>

<template>
  <el-form label-position="top">
    <el-form-item label="ユーザー">
      <el-input
        v-model="formStore.user"
        placeholder="munieru_jp"
        clearable
        autofocus
      />
    </el-form-item>
    <el-form-item label="日付">
      <el-date-picker
        v-model="formStore.date"
        type="date"
        :shortcuts="dateShortcuts"
        clearable
      />
    </el-form-item>
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
  </el-form>
</template>
