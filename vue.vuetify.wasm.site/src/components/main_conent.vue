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
        is_tl_creat: false,
        wasm_programe: null,
        timeline_obj: null,
        d_tl_rows: null
    }),
    computed: {

    },
    methods:
    {
        init_tl() {
            if (!this.is_tl_creat) {
                this.timeline_obj = new timelineModule.Timeline()
                this.timeline_obj.initialize({
                    id: 'timeline',
                    headerHeight: 30,
                    leftMargin: 6,
                    groupsDraggable: true,
                    keyframesDraggable: true,
                    timelineDraggable: true,
                    controlKeyIsMetaKey: true,
                    snapAllKeyframesOnMove: true,
                    // fillColor: '#31313130',
                    // headerFillColor: '#31313130',
                    // tickColor: '#D5D5D530',
                })
                /** */
                this.is_tl_creat = true
                // this.d_tl_rows = tl_data_rows

            }
        }
    },
    mounted() {
        loadJs('./static/js/jsonData.js').then(() => {
            // 加载成功，进行后续操作
            // this.d_tl_rows = tl_data_rows
        })
        loadJs('./static/js/animationTimelineJs/atl.js?v=2').then(() => {
            // 加载成功，进行后续操作
        })
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
                    <canvas id="canvas" :width="view_size_x" :height="view_size_y" class="fm_wasm_canvas"></canvas>
                </v-window-item>

                <v-window-item value="two">
                    <v-btn @click="init_tl">
                        Button
                    </v-btn>
                    <div>
                        <div></div>
                        <!-- timeline component -->
                        <div id="timeline"></div>
                    </div>
                </v-window-item>


            </v-window>

        </v-sheet>
    </v-main>
</template>
