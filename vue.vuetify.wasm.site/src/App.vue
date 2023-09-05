<!--  -->
<template>
  <v-app class="fm_app">
    <!-- header -->
    <v-app-bar title="" height="40" class="fm_header_bar" prominent>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="left_show_click" class="fm_nav_icon" max-height="40"
          icon="fmicons icon-logo-fm top_area_logo_i"></v-app-bar-nav-icon>
      </template>
      <v-btn-toggle divided variant="outlined" max-height="40">
        <v-btn icon="mdi mdi-arrow-expand-left" @click="right_show_click" class="fm_nav_btn"  maxWidth="48px"></v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <!-- footer -->
    <v-footer app elevation="3" height="30" class="fm_footer_bar">
      <span class="mr-5">2023 &copy; </span>
    </v-footer>
    <!-- left area start-->
    <v-navigation-drawer v-if="d_show_left" :width="left_width">
      <left_area_view></left_area_view>
    </v-navigation-drawer>
    <!-- left area end-->
    <!-- right area start-->
    <v-navigation-drawer v-if="d_show_right" location="right" :width="right_width">
      <right_area_view></right_area_view>
    </v-navigation-drawer>
    <!-- right area end-->
    <!-- main start-->
    <v-main class="d-flex align-center justify-center">
      <main_View :view_left="d_show_left" :view_right="d_show_right" :left_w="left_width" :right_w="right_width">
      </main_View>
    </v-main>
    <!-- main end-->

  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue';
import main_View from '@/components/main_conent.vue';
import loadJs from '@/components/wasm_load.vue'
import left_area_view from '@/components/left_area.vue'
import right_area_view from '@/components/right_area.vue'
// loadJs('./static/js/hmi_editer_web.js')
// 修改样式
const theme = useTheme();
theme.global.name.value = 'dark'

// // 设置左右区域显示与否的变量
let d_show_left = ref(true);
let d_show_right = ref(true);
const left_width = 366
const right_width = 366
let is_debug = ref(true)
let wasm_programe
// 假如wasm的控制
if (!is_debug) {
  loadJs('./static/js/pre.js')
  loadJs('./static/js/hmi_editer_web.js').then(() => {
    // 加载成功，进行后续操作
  })
  loadJs('./static/js/pre.js').then(() => {
    wasm_programe = Module
  })
}
/** */
function left_show_click() {
  d_show_left.value = !d_show_left.value
}
function right_show_click() {
  d_show_right.value = !d_show_right.value
}
</script>
