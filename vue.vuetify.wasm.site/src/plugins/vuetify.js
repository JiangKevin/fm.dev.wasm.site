/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#673AB7",
          secondary: "#5CBBF6",
        },
      },
      dark: {
        colors: {
          primary: "#673AB7",
          secondary: "#EDE7F6",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi", // This is already the default value - only for display purposes
  },
})
