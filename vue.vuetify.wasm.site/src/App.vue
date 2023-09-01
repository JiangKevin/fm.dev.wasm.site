<!--  -->
<template>
  <v-app>
    <!-- header -->
    <v-app-bar title="Application bar" height="40" class="fm_header_bar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="d_show_left=!d_show_left"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <!-- <header_view></header_view> -->
    <!-- footer -->
    <v-footer app elevation="3" height="30" class="fm_footer_bar">
      <span class="mr-5">2023 &copy;</span>
    </v-footer>
    <!-- left area -->
    <v-navigation-drawer v-if="d_show_left">
      <template v-slot:prepend>
        <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Jane Smith"
          subtitle="Logged in"></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- right area -->
    <v-navigation-drawer v-if="d_show_right" location="right">
      <template v-slot:prepend>
        <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Jane Smith"
          subtitle="Logged in"></v-list-item>
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
      <mainView></mainView>
    </v-main>
    <!-- main end-->

  </v-app>
</template>
<!--  -->
<script setup lang="ts">
import { useTheme } from 'vuetify';
import header_view from '@/components/header.vue';
import mainView from '@/components/main_conent.vue';
import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
} from 'vue';
// 修改样式
const theme = useTheme();
theme.global.name.value = 'dark'
// 设置左右区域显示与否的变量
// const d_show_left: boolean = true
const d_show_left: Ref<boolean> = ref(false);
const d_show_right: boolean = true

// 
// function show_left_area(is_show: boolean): boolean {
//   console.log("ADFADFADSF")
//   console.log(is_show)
//   is_show = !is_show;
//   return is_show
// }
</script>
