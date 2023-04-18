import { defineStore } from 'pinia'

export const useConfigStore = defineStore('form', {
  state: () => ({
    theme: 'white'
  }),
  persist: true
})
