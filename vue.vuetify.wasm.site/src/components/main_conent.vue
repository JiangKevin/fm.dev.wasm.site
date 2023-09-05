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
        left_w: {
            type: Number,
            required: true,
            default: 0
        },
        right_w: {
            type: Number,
            required: true,
            default: 0
        },
    },
    data: () => ({
        tab: null,
        view_size_x: Number,
        view_size_y: Number,
        wasm_programe: null

    }),
    computed: {
        compute_view_x() {
            let use_view_x;
            let viewSizeX = document.body.clientWidth
            //
            use_view_x = viewSizeX
            // 
            if (this.view_left) {
                use_view_x = use_view_x - this.left_w
            }
            // 
            if (this.view_right) {
                use_view_x = use_view_x - this.right_w
            }
            return use_view_x
        },
        compute_view_y() {
            let use_view_y;
            let viewSizeY = document.body.clientHeight
            use_view_y = viewSizeY
            console.log(use_view_y)
            use_view_y = use_view_y - 41 - 32 - 30
            return use_view_y;
        }
    },
    methods:
    {
        test: function () {
            console.log("adfadf")
        }
    },
    mounted() {
        // loadJs('./static/js/hmi_editer_web.js').then(() => {
        //     // 加载成功，进行后续操作
        // })
        // loadJs('./static/js/pre.js').then(() => {
        //     // 加载成功，进行后续操作
        //     console.log("wasm_programe:\n")
        //     this.wasm_programe = Module
        //     console.log(this.wasm_programe)
        // })
    }
}
</script>
<!--  -->
<template>
    <!-- <canvas id="canvas" class="ems_canvas"></canvas> -->
    <v-card class="fm_cards">
        <v-tabs v-model="tab" bg-color="primary" height="38">
            <v-tab value="one" height="38" maxWidth="48" class="fm_main_area_tab">
                <v-icon icon="mdi mdi-axis-arrow"></v-icon></v-tab>
            <v-tab value="two" height="38" maxWidth="48px" class="fm_main_area_tab"><v-icon
                    icon="mdi mdi-chart-timeline-variant-shimmer"></v-icon></v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <canvas id="canvas" :width="compute_view_x" :height="compute_view_y"></canvas>
                </v-window-item>

                <v-window-item value="two">
                    Two
                </v-window-item>


            </v-window>
        </v-card-text>
    </v-card>
</template>
