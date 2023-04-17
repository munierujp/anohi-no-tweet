<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const openTwilog = () => {
  const url = createTwilogDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
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
