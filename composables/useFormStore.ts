import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    date: '',
    includesRetweets: true,
    keyword: '',
    user: ''
  }),
  persist: true
})
