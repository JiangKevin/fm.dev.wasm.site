/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import { createPinia, type Pinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app.use(vuetify)
}
