<script lang="ts" setup>
import { parseISO } from 'date-fns'

const form = useFormStore()
const openTwisave = () => {
  const url = createTwisaveDateURL({
    user: form.user,
    date: parseISO(form.date)
  })
  window.open(url)
}
</script>

<template>
  <el-form-item>
    <el-button @click="openTwisave">
      ツイセーブ（日付）
    </el-button>
  </el-form-item>
</template>
