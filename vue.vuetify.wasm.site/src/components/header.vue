<!-- header -->
<!--  -->
<script lang="ts">
export default {
    data: () => ({
        d_show_left: false,
    }),
    methods:
    {
        show_left_area: function () {

            this.d_show_left=!this.d_show_left
        }
    }
}
</script>
<!--  -->
<template>
    <v-app-bar title="Application bar" height="40" class="fm_header_bar">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="show_left_area()"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>