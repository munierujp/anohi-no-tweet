<script lang="ts" setup>
import {
  parseISO,
  subDays,
  subYears
} from 'date-fns'

const form = useFormStore()
const enabledSearch = computed(() => form.user !== '' || form.keyword !== '')
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
const handleEnter = (event: KeyboardEvent | Event) => {
  if (enabledSearch.value && event instanceof KeyboardEvent && event.keyCode === 13) {
    openTwitter()
  }
}
const openTwilogDate = () => {
  const url = createTwilogDateURL({
    user: form.user,
    date: parseISO(form.date)
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
const openTwisaveDate = () => {
  const url = createTwisaveDateURL({
    user: form.user,
    date: parseISO(form.date)
  })
  window.open(url)
}
const openTwisaveSearch = () => {
  const url = createTwisaveKeywordSearchURL({
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
    <el-form-item label="日付">
      <el-date-picker
        v-model="form.date"
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
        :disabled="!enabledSearch"
        @click="openTwitter"
      >
        検索
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        :disabled="!form.user"
        @click="openTwilogSearch"
      >
        Twilog（検索）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        :disabled="!form.user || !form.date"
        @click="openTwilogDate"
      >
        Twilog（日別）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        :disabled="!form.user"
        @click="openTwisaveSearch"
      >
        ツイセーブ（検索）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        :disabled="!form.user || !form.date"
        @click="openTwisaveDate"
      >
        ツイセーブ（日別）
      </el-button>
    </el-form-item>
  </el-form>
  <p>form.user: {{ form.user }}</p>
  <p>form.keyword: {{ form.keyword }}</p>
  <p>form.date: {{ form.date }}</p>
  <p>enabledSearch: {{ enabledSearch }}</p>
</template>
