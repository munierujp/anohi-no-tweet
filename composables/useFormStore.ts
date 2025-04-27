import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    startDate: '',
    endDate: '',
    syncDates: true,
    includesRetweets: true,
    keyword: '',
    user: ''
  }),
  persist: true
})
