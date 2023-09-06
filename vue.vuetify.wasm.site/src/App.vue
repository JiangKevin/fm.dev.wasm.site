<!--  -->
<template>
  <v-app class="fm_app">
    <!-- header -->
    <v-app-bar title="" height="40" class="fm_header_bar" prominent>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="left_show_click" class="fm_nav_icon" max-height="40"
          icon="fmicons icon-logo-fm top_area_logo_i"></v-app-bar-nav-icon>
      </template>
      <v-btn-toggle divided variant="outlined" class="fm_btn_toggle" height="40" max-height="40">
        <v-btn icon="mdi mdi-arrow-expand-left" @click="right_show_click" class="fm_nav_btn" maxWidth="48px"
          height="40"></v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <!-- footer -->
    <v-footer app elevation="3" height="30" class="fm_footer_bar">
      <div class="fm_footer_info"><i class="mdi mdi-all-inclusive"></i></div>
      <span id="footer_info">2023 &copy; </span>
    </v-footer>
    <!-- left area start-->
    <left_area_view :view_left="d_show_left" :view_right="d_show_right" :left_area_w="left_width"
      :right_area_w="right_width">
    </left_area_view>
    <!-- left area end-->
    <!-- right area start-->
    <right_area_view :view_left="d_show_left" :view_right="d_show_right" :left_area_w="left_width"
      :right_area_w="right_width">
    </right_area_view>
    <!-- right area end-->
    <!-- main start-->
    <main_View :view_left="d_show_left" :view_right="d_show_right" :view_size_x="main_width" :view_size_y="main_height">
    </main_View>
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
let left_width = 366
let right_width = 366
let main_width = 100
let main_height = 100
let is_debug = ref(true)
let wasm_programe = ref();
// 假如wasm的控制
if (is_debug.value) {
  loadJs('./static/js/hmi_editer_web.js').then(() => {
    // 加载成功，进行后续操作
  })
  loadJs('./static/js/pre.js').then(() => {
    wasm_programe = Module
    main_width = canvas_size_x
    main_height = canvas_size_y + 7
    console.log("From js : wasm_programe init!")
    console.log(wasm_programe)

  })
}
/** 控制左侧区域显示与否 */
function left_show_click() {
  d_show_left.value = !d_show_left.value
  if (d_show_left.value) { left_width = 366 }
  else {
    left_width = 48
  }
  compute_view_size()
}
/** 控制右侧区域显示与否 */
function right_show_click() {
  d_show_right.value = !d_show_right.value
  if (d_show_right.value) { right_width = 366 }
  else {
    right_width = 48
  }
  compute_view_size()
}
/** 计算canvas屏幕大小 */
function compute_view_size() {
  /**
    对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
    window.innerHeight - 浏览器窗口的内部高度
    window.innerWidth - 浏览器窗口的内部宽度
   */
  let clientX = window.innerWidth
  let view_siz_x = clientX
  let clientY = window.innerHeight
  console.log("From js: clientY = " + clientY)
  /** */
  if (d_show_left.value) {
    view_siz_x = view_siz_x - 366
  }
  else {
    view_siz_x = view_siz_x - 48
  }
  if (d_show_right.value) {
    view_siz_x = view_siz_x - 366
  }
  else {
    view_siz_x = view_siz_x - 48
  }
  /** */
  main_width = view_siz_x - 2
  main_height = clientY - 108

  console.log("From js: main size x= " + main_width + " , y= " + main_height)
  if (Module) {
    Module._setArticleWidth(main_width, main_height, 0)
  }
}
</script>
