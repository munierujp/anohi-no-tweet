import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    startDate: '',
    endDate: '',
    includesRetweets: true,
    keyword: '',
    user: ''
  }),
  persist: true
})
