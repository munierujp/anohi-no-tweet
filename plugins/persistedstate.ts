import type { Pinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'

// https://github.com/iendeavor/pinia-plugin-persistedstate-2
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    (nuxtApp.$pinia as Pinia).use(createPersistedStatePlugin())
  }
})
