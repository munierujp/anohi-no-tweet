import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    endDate: '',
    includesRetweets: true,
    keyword: '',
    startDate: '',
    syncDates: false,
    user: ''
  }),
  persist: true
})
