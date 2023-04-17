<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const openTwisave = () => {
  const url = createTwisaveDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
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
