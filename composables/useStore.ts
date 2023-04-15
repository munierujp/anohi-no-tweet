import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    date: '',
    keyword: '',
    user: ''
  }),
  persist: true
})
