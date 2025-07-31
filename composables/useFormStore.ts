import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    endDate: '',
    excludeKeyword: '',
    includesRetweets: true,
    keyword: '',
    startDate: '',
    syncDates: false,
    user: ''
  }),
  persist: true
})
