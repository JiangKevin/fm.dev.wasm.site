/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '../../static/css/fmfont.css'
import { mdi } from 'vuetify/iconsets/mdi'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import { VBtn } from 'vuetify/components/VBtn'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaults: {
    VBtn: {
      class: 'text-none',
    },
  },
    themes: {
      light: {
        colors: {
          primary: "#673AB7",
          secondary: "#5CBBF6",
        },
      },
      dark: {
        colors: {
          primary: "#d12d49ff",
          secondary: "#EDE7F6",
        },
      },
    },
  },
  icons: {
    aliases,
    sets: {
      fa,
      mdi,
    },
    defaultSet: "fa", // This is already the default value - only for display purposes
  },
})
