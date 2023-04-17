<script lang="ts" setup>
import {
  subDays,
  subYears
} from 'date-fns'

const formStore = useFormStore()
const now = new Date()
const onClickTodayButton = () => {
  formStore.date = formatISODate(now)
}
const onClickYesterdayButton = () => {
  formStore.date = formatISODate(subDays(now, 1))
}
const onClickOneYearAgoButton = () => {
  formStore.date = formatISODate(subYears(now, 1))
}
</script>

<template>
  <el-form-item label="日付">
    <el-date-picker
      v-model="formStore.date"
      type="date"
      value-format="YYYY-MM-DD"
      clearable
    />
  </el-form-item>
  <el-form-item>
    <el-button
      size="small"
      @click="onClickTodayButton"
    >
      今日
    </el-button>
    <el-button
      size="small"
      @click="onClickYesterdayButton"
    >
      昨日
    </el-button>
    <el-button
      size="small"
      @click="onClickOneYearAgoButton"
    >
      1年前
    </el-button>
  </el-form-item>
</template>
