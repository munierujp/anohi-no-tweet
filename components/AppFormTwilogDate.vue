<script lang="ts" setup>
import { parseISO } from 'date-fns'

const form = useFormStore()
const openTwilog = () => {
  const url = createTwilogDateURL({
    user: form.user,
    date: parseISO(form.date)
  })
  window.open(url)
}
</script>

<template>
  <el-form-item>
    <el-button @click="openTwilog">
      Twilog（日付）
    </el-button>
  </el-form-item>
</template>
