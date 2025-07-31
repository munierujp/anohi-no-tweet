<script lang="ts" setup>
import {
  parseISO,
  subDays,
  subMonths,
  subWeeks,
  subYears
} from 'date-fns'

const form = useFormStore()
const openX = () => {
  const startDate = form.startDate ? parseISO(form.startDate) : undefined
  const endDate = form.endDate ? parseISO(form.endDate) : undefined
  const url = createUrl({
    user: form.user,
    startDate,
    endDate: form.syncDates ? startDate : endDate,
    keyword: form.keyword,
    excludeKeyword: form.excludeKeyword,
    includesRetweets: form.includesRetweets
  })
  window.open(url)
}
const handleEnter = (event: KeyboardEvent | Event) => {
  if (event instanceof KeyboardEvent && event.keyCode === 13) {
    openX()
  }
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
        @click="form.startDate = formatISODate(new Date())"
      >
        今日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="form.startDate = formatISODate(subDays(new Date(), 1))"
      >
        昨日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="form.startDate = formatISODate(subWeeks(new Date(), 1))"
      >
        1週間前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="form.startDate = formatISODate(subMonths(new Date(), 1))"
      >
        1ヶ月前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        @click="form.startDate = formatISODate(subYears(new Date(), 1))"
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
        @click="form.endDate = formatISODate(new Date())"
      >
        今日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="form.endDate = formatISODate(subDays(new Date(), 1))"
      >
        昨日
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="form.endDate = formatISODate(subWeeks(new Date(), 1))"
      >
        1週間前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="form.endDate = formatISODate(subMonths(new Date(), 1))"
      >
        1ヶ月前
      </el-button>
      <el-button
        size="small"
        :circle="false"
        :disabled="form.syncDates"
        @click="form.endDate = formatISODate(subYears(new Date(), 1))"
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
    <el-form-item label="除外キーワード">
      <el-input
        v-model="form.excludeKeyword"
        clearable
        @keydown.enter="handleEnter"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox
        v-model="form.includesRetweets"
        label="リポストを含む"
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
  </el-form>
</template>
