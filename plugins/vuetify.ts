import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
  aliases,
  mdi
} from 'vuetify/iconsets/mdi'

const darkBlueTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#15202B'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      aliases,
      defaultSet: 'mdi',
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'darkBlueTheme',
      themes: {
        darkBlueTheme
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
