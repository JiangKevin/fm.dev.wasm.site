/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import loadJs from '@/components/wasm_load.vue'
// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);
/** */
loadJs('./static/js/tl/animation-timeline.js').then(() => {
    // 加载成功，进行后续操作

})
loadJs('./static/js/jsonData.js').then(() => {
    console.log(tl_data_rows)
    // 加载成功，进行后续操作
    app.provide(/* 注入名 */ "d_tl_rows", /* 值 */ tl_data_rows);
})
/** 注入全局数据*/
app.provide(/* 注入名 */ "message", /* 值 */ "hello!");
registerPlugins(app);

app.mount("#app");

