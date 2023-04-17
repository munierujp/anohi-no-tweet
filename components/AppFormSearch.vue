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
</script>

<template>
  <el-form-item>
    <el-button
      type="primary"
      @click="openTwitter"
    >
      検索
    </el-button>
  </el-form-item>
</template>
