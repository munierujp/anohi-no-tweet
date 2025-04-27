<script lang="ts" setup>
import {
  parseISO,
  subDays,
  subWeeks,
  subMonths,
  subYears
} from 'date-fns'

const form = useFormStore()
const now = new Date()

const setStartDateToToday = () => {
  form.startDate = formatISODate(now)
}
const setStartDateToYesterday = () => {
  form.startDate = formatISODate(subDays(now, 1))
}
const setStartDateToOneWeekAgo = () => {
  form.startDate = formatISODate(subWeeks(now, 1))
}
const setStartDateToOneMonthAgo = () => {
  form.startDate = formatISODate(subMonths(now, 1))
}
const setStartDateToOneYearAgo = () => {
  form.startDate = formatISODate(subYears(now, 1))
}
const setEndDateToToday = () => {
  form.endDate = formatISODate(now)
}
const setEndDateToYesterday = () => {
  form.endDate = formatISODate(subDays(now, 1))
}
const setEndDateToOneWeekAgo = () => {
  form.endDate = formatISODate(subWeeks(now, 1))
}
const setEndDateToOneMonthAgo = () => {
  form.endDate = formatISODate(subMonths(now, 1))
}
const setEndDateToOneYearAgo = () => {
  form.endDate = formatISODate(subYears(now, 1))
}
const openX = () => {
  const url = createSearchUrl({
    user: form.user,
    startDate: form.startDate ? parseISO(form.startDate) : undefined,
    endDate: form.syncDates
      ? form.startDate
        ? parseISO(form.startDate)
        : undefined
      : form.endDate
      ? parseISO(form.endDate)
      : undefined,
    keyword: form.keyword,
    includesRetweets: form.includesRetweets
  })
  window.open(url)
}
const handleEnter = (event: KeyboardEvent | Event) => {
  if (event instanceof KeyboardEvent && event.keyCode === 13) {
    openX()
  }
}
const openTwilogDate = () => {
  const url = createTwilogDateURL({
    user: form.user,
    date: parseISO(form.startDate)
  })
  window.open(url)
}
const openTwilogSearch = () => {
  const url = createTwilogKeywordSearchURL({
    user: form.user,
    keyword: form.keyword
  })
  window.open(url)
}
</script>

<template>
  <el-form label-position="top">
    <el-form-item label="ユーザー">
      <el-input
        v-model="form.user"
        placeholder="munieru_jp"
        clearable
        autofocus
        @keydown.enter="handleEnter"
      />
    </el-form-item>
    <el-form-item label="開始日">
      <el-date-picker
        v-model="form.startDate"
        type="date"
        value-format="YYYY-MM-DD"
        clearable
        @keydown.enter="handleEnter"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        size="small"
        :circle="false"
        @click="setStartDateToToday"
      >
        今日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="setStartDateToYesterday"
      >
        昨日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="setStartDateToOneWeekAgo"
      >
        1週間前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="setStartDateToOneMonthAgo"
      >
        1ヶ月前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="setStartDateToOneYearAgo"
      >
        1年前
      </el-button>
    </el-form-item>
    <el-form-item label="終了日">
      <el-date-picker
        v-model="form.endDate"
        type="date"
        value-format="YYYY-MM-DD"
        clearable
        :disabled="form.syncDates"
        @keydown.enter="handleEnter"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox
        v-model="form.syncDates"
        label="開始日に合わせる"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="setEndDateToToday"
      >
        今日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="setEndDateToYesterday"
      >
        昨日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="setEndDateToOneWeekAgo"
      >
        1週間前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="setEndDateToOneMonthAgo"
      >
        1ヶ月前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="setEndDateToOneYearAgo"
      >
        1年前
      </el-button>
    </el-form-item>
    <el-form-item label="キーワード">
      <el-input
        v-model="form.keyword"
        clearable
        @keydown.enter="handleEnter"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox
        v-model="form.includesRetweets"
        label="リツイートを含む"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        :circle="false"
        @click="openX"
      >
        検索
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        @click="openTwilogSearch"
      >
        Twilog（検索）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        @click="openTwilogDate"
      >
        Twilog（日別）
      </el-button>
    </el-form-item>
  </el-form>
</template>
