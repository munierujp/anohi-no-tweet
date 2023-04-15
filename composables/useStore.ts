import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    date: '',
    user: ''
  }),
  persist: true
})
