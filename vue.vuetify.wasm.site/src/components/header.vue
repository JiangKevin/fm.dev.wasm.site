<!-- header -->
<!--  -->
<script lang="ts">
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

export default {
    props: {
        d_show_left:{
            // type: boolean,
            required:true
        }
    },
    // data() {
    //     return {
           
    //     }
    // },

    methods:
    {
        async show_left_area () {
            this.d_show_left = !this.d_show_left
            console.log(this.d_show_left)
            await nextTick()
            // this.$emit('show-left-click', this.d_show_left)
        }
    }
}
</script>
<!--  -->
<template>
    <v-app-bar title="Application bar" height="40" class="fm_header_bar">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="show_left_area"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>