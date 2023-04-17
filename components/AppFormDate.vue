<script lang="ts" setup>
import {
  subDays,
  subYears
} from 'date-fns'

const form = useFormStore()
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
</script>

<template>
  <el-form-item label="日付">
    <el-date-picker
      v-model="form.date"
      type="date"
      value-format="YYYY-MM-DD"
      clearable
    />
  </el-form-item>
  <el-form-item>
    <el-button
      size="small"
      @click="setToToday"
    >
      今日
    </el-button>
    <el-button
      size="small"
      @click="setToYesterday"
    >
      昨日
    </el-button>
    <el-button
      size="small"
      @click="setToOneYearAgo"
    >
      1年前
    </el-button>
  </el-form-item>
</template>
