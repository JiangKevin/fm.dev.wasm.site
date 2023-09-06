<!--  -->
<script>
import loadJs from '@/components/wasm_load.vue'
export default {
    props: {
        view_left: {
            type: Boolean,
            required: true,
            default: false
        },
        view_right: {
            type: Boolean,
            required: true,
            default: false
        },
        view_size_x: {
            type: Number,
            required: true,
            default: false
        },
        view_size_y: {
            type: Number,
            required: true,
            default: false
        },
    },
    data: () => ({
        tab: null,
        wasm_programe: null

    }),
    computed: {

    },
    methods:
    {

    },
    mounted() {


    }
}
</script>
<!--  -->
<template>
    <v-main class="d-flex align-center justify-center">
        <v-sheet :height="view_size_y + 38" class="fm_sheet">
            <v-tabs v-model="tab" height="38" class="fm_main_area_tabs">
                <v-tab value="one" height="38" maxWidth="38" class="fm_main_area_tab">
                    <v-icon icon="mdi mdi-axis-arrow"></v-icon></v-tab>
                <v-tab value="two" height="38" maxWidth="38px" class="fm_main_area_tab"><v-icon
                        icon="mdi mdi-chart-timeline-variant-shimmer"></v-icon></v-tab>
            </v-tabs>
            <!--  -->
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <canvas id="canvas" :width="view_size_x" :height="view_size_y"></canvas>
                    </v-window-item>

                    <v-window-item value="two">
                        Two
                    </v-window-item>


                </v-window>
            </v-card-text>
        </v-sheet>
    </v-main>
</template>
