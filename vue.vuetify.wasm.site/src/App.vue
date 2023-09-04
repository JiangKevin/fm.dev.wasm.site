<!--  -->
<template>
  <v-app class="fm_app">
    <!-- header -->
    <v-app-bar title="Application bar" height="40" class="fm_header_bar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="d_show_left=!d_show_left"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <!-- footer -->
    <v-footer app elevation="3" height="30" class="fm_footer_bar">
      <span class="mr-5">2023 &copy; </span>
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
      <main_View :view_left="d_show_left" :view_right="d_show_right"></main_View>
    </v-main>
    <!-- main end-->

  </v-app>
</template>
<!--  -->
<script setup lang="ts">
import { useTheme } from 'vuetify';
import header_view from '@/components/header.vue';
import main_View from '@/components/main_conent.vue';
import persistence from '@/components/Persistence.vue';
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
const d_show_left: Ref<boolean> = ref(false);
const d_show_right: Ref<boolean> = ref(true);

</script>
