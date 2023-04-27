<script lang="ts" setup>
import {
  parseISO,
  subDays,
  subYears
} from 'date-fns'

const form = useFormStore()
const user = ref(form.user)
const keyword = ref(form.keyword)
const date = ref(form.date)
const includesRetweets = ref(form.includesRetweets)
const enabledSearch = ref(user.value !== '' || keyword.value !== '')
watch(user, (user) => {
  form.user = user
  enabledSearch.value = user !== '' || keyword.value !== ''
})
watch(keyword, (keyword) => {
  form.keyword = keyword
  enabledSearch.value = user.value !== '' || keyword !== ''
})
watch(date, (date) => {
  form.date = date
})
watch(includesRetweets, (includesRetweets) => {
  form.includesRetweets = includesRetweets
})
const now = new Date()
const setToToday = () => {
  date.value = formatISODate(now)
}
const setToYesterday = () => {
  date.value = formatISODate(subDays(now, 1))
}
const setToOneYearAgo = () => {
  date.value = formatISODate(subYears(now, 1))
}
const openTwitter = () => {
  const url = createTwitterSearchURL({
    user: user.value,
    date: parseISO(date.value),
    keyword: keyword.value,
    includesRetweets: includesRetweets.value
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
    user: user.value,
    date: parseISO(date.value)
  })
  window.open(url)
}
const openTwilogSearch = () => {
  const url = createTwilogKeywordSearchURL({
    user: user.value,
    keyword: keyword.value
  })
  window.open(url)
}
const openTwisaveDate = () => {
  const url = createTwisaveDateURL({
    user: user.value,
    date: parseISO(date.value)
  })
  window.open(url)
}
const openTwisaveSearch = () => {
  const url = createTwisaveKeywordSearchURL({
    user: user.value,
    keyword: keyword.value
  })
  window.open(url)
}
</script>

<template>
  <el-form label-position="top">
    <el-form-item label="ユーザー">
      <el-input
        v-model="user"
        placeholder="munieru_jp"
        clearable
        autofocus
        @keydown.enter="handleEnter"
      />
    </el-form-item>
    <el-form-item label="日付">
      <el-date-picker
        v-model="date"
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
        v-model="keyword"
        clearable
        @keydown.enter="handleEnter"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox
        v-model="includesRetweets"
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
        :disabled="!user"
        @click="openTwilogSearch"
      >
        Twilog（検索）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        :disabled="!user || !date"
        @click="openTwilogDate"
      >
        Twilog（日別）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        :disabled="!user"
        @click="openTwisaveSearch"
      >
        ツイセーブ（検索）
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        :circle="false"
        :disabled="!user || !date"
        @click="openTwisaveDate"
      >
        ツイセーブ（日別）
      </el-button>
    </el-form-item>
  </el-form>
  <p>form.user: {{ form.user }}</p>
  <p>user: {{ user }}</p>
  <p>form.keyword: {{ form.keyword }}</p>
  <p>keyword: {{ keyword }}</p>
  <p>form.date: {{ form.date }}</p>
  <p>date: {{ date }}</p>
  <p>enabledSearch: {{ enabledSearch }}</p>
</template>
