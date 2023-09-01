<!--  -->
<template>
  <v-app>
    <!-- header -->
    <v-app-bar color="surface-variant" title="Application bar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <!-- footer -->
    <v-footer app elevation="3">
      <span class="mr-5">2023 &copy;</span>
    </v-footer>
    <!-- left area -->
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- right area -->
    <v-navigation-drawer expand-on-hover rail location="right">
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
    <!-- main -->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <HelloWorld></HelloWorld>
    </v-main>

  </v-app>
</template>
<!--  -->
<script setup lang="ts">
import { useTheme } from 'vuetify';
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
// 
import HelloWorld from '@/components/HelloWorld.vue'
/** Vuetify Theme */
const theme = useTheme();

</script>
