import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    date: '',
    includesRetweets: true,
    keyword: '',
    user: ''
  }),
  persist: true
})
