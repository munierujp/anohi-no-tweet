import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    user: ''
  }),
  persist: true
})
