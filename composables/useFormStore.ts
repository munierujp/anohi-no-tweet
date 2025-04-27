import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    startDate: '',
    endDate: '',
    syncDates: false,
    includesRetweets: true,
    keyword: '',
    user: ''
  }),
  persist: true
})
