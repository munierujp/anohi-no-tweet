<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const openTwitter = () => {
  const url = createTwitterSearchURL({
    user: formStore.user,
    date: parseISO(formStore.date),
    keyword: formStore.keyword,
    includesRetweets: formStore.includesRetweets
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
