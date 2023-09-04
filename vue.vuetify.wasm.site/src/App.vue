<!--  -->
<template>
  <v-app class="fm_app">
    <!-- header -->
    <v-app-bar title="Application bar" height="40" class="fm_header_bar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="d_show_left = !d_show_left"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <!-- footer -->
    <v-footer app elevation="3" height="30" class="fm_footer_bar">
      <span class="mr-5">2023 &copy; </span>
    </v-footer>
    <!-- left area -->
    <v-navigation-drawer v-if="d_show_left" :width="left_width">
      <template v-slot:prepend>
        <v-list-item lines="two" prepend-avatar="./assets/81.jpg" title="Jane Smith" subtitle="Logged in"></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- right area -->
    <v-navigation-drawer v-if="d_show_right" location="right" :width="right_width">
      <template v-slot:prepend>
        <v-list-item lines="two" prepend-avatar="./assets/81.jpg" title="Jane Smith" subtitle="Logged in"></v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>


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
loadJs('./static/js/hmi_editer_web.js')
// 修改样式
const theme = useTheme();
theme.global.name.value = 'dark'
// // 设置左右区域显示与否的变量
let d_show_left = ref(false);
let d_show_right = ref(true);
const left_width = 366
const right_width = 300
let wasm_programe
loadJs('./static/js/pre.js')
// 
// wasm_programe = Module
console.log('dasfadsfadsf')
console.log(wasm_programe)
</script>
