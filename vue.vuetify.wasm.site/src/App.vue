<!--  -->
<template>
  <v-app class="fm_app">
    <!-- header -->
    <v-app-bar title="" height="40" class="fm_header_bar" prominent>
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="fm_nav_icon" max-height="40"
          icon="fmicons icon-logo-fm top_area_logo_i"></v-app-bar-nav-icon>
      </template>
      <!--  -->
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

<script >
import { useTheme } from 'vuetify';
import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
  provide,
  defineAsyncComponent,
  reactive
} from 'vue';
import { store } from "@/store/store";
import loadJs from '@/components/wasm_load.vue'
import main_View from '@/components/main_conent.vue';
import left_area_view from '@/components/left_area.vue'
import right_area_view from '@/components/right_area.vue'
/** 用于调试 */
var is_debug = true
// 
export default {
  // inject: ['is_debug'],
  components: {
    main_View,
    left_area_view,
    right_area_view
  },
  data: () => ({
    // // 设置左右区域显示与否的变量
    d_show_left: true,
    d_show_right: true,
    left_width: 366,
    right_width: 366,
    main_width: 100,
    main_height: 100,
    store: store()
  }),
  setup() {
    console.log('App setup')
    // 假如wasm的控制
    // 修改样式
    const theme = useTheme();
    theme.global.name.value = 'dark'
    /** */
    loadJs('./static/js/tl/animation-timeline.js').then(() => {
      // 加载成功，进行后续操作
    })

    // provide('d_tl_rows', tl_data_rows);
    provide('is_debug', is_debug);

    if (is_debug) {
      loadJs('./static/js/hmi_editer_web.js').then(() => {
        // 加载成功，进行后续操作
      })
      loadJs('./static/js/pre.js').then(() => {

      })
    }
    else {
      loadJs('./static/js/no_wasm_pre.js').then(() => {

      })
    }
  },
  methods:
  {
    /** 计算canvas屏幕大小 */
    compute_view_size() {
      /**
        对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
        window.innerHeight - 浏览器窗口的内部高度
        window.innerWidth - 浏览器窗口的内部宽度
       */
      let clientX = window.innerWidth
      let view_siz_x = clientX
      let clientY = window.innerHeight
      // console.log("From js: clientY = " + clientY)
      /** */
      if (this.d_show_left.value) {
        view_siz_x = view_siz_x - 48
      }
      else {
        view_siz_x = view_siz_x - 48
      }
      if (this.d_show_right.value) {
        view_siz_x = view_siz_x - 366
      }
      else {
        view_siz_x = view_siz_x - 48
      }
      /** */
      this.main_width = view_siz_x - 2
      this.main_height = clientY - 108

      // console.log("From js: main size x= " + main_width + " , y= " + main_height)
      if (this.is_debug) {
        if (Module) {
          Module._setArticleWidth(main_width, main_height, 0)
        }
      }
    },
    module_loaded() {
      console.log("From js app")
    },
    /** 控制左侧区域显示与否 */
    left_show_click() {
      this.d_show_left = !this.d_show_left
      if (this.d_show_left) { this.left_width = 48 }
      else {
        this.left_width = 48
      }
      this.compute_view_size()
    },
    /** 控制右侧区域显示与否 */
    right_show_click() {
      this.d_show_right = !this.d_show_right
      if (this.d_show_right) { this.right_width = 366 }
      else {
        this.right_width = 48
      }
      this.compute_view_size()
    },
  },

  async created() {
    console.log('App created')
  },
  async mounted() {
    console.log('App mounted')
    // 期初配置
    var that = this;
    setTimeout(function () {
      that.store.configuration_creat();
      // console.log("setime out do")
    }, 1000);
  },
  async updated() {
    console.log('App updated')
  },
  async activated() {
    console.log('App activated')
  },
  async unmounted() {
    console.log('App unmounted')
  }
}
</script>
