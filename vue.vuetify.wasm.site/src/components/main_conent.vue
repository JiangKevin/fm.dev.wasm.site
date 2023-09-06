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
            default: 0
        },
        view_size_y: {
            type: Number,
            required: true,
            default: 0
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
    <v-main>
        <v-sheet class="fm_sheet">
            <v-tabs v-model="tab" height="38" class="fm_main_area_tabs">
                <v-tab value="one" height="38" :max-width="48" :min-width="48" class="fm_main_area_tab">
                    <v-icon icon="mdi mdi-axis-arrow"></v-icon></v-tab>
                <v-tab value="two" height="38" :max-width="48" :min-width="48" class="fm_main_area_tab"><v-icon
                        icon="mdi mdi-chart-timeline-variant-shimmer"></v-icon></v-tab>
            </v-tabs>
            <!--  -->

            <v-window v-model="tab" class="fm_main_area_window">
                <v-window-item value="one" class="fm_main_area_window_item">
                    <canvas id="canvas" :width="view_size_x" :height="view_size_y-7" class="fm_wasm_canvas"></canvas>
                </v-window-item>

                <v-window-item value="two">
                    Two
                </v-window-item>


            </v-window>

        </v-sheet>
    </v-main>
</template>
