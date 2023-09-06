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
        d_tl_rows: null,
        d_tl_select_id: '',
        d_tl_editing_row_index: -1,
        d_tl_editing_key_index: -1,
    }),
    computed: {

    },
    watch:
    {
        d_tl_rows(new_d_tl_rows, old_d_tl_rows) {
            // 初始化json数据到tl
            console.log("d_tl_rows is change")
        },
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
                /**timeline 件处理 */
                this.timeline_obj.onScroll(this.tl_onScroll)
                this.timeline_obj.onSelected(this.tl_onSelected)
                this.timeline_obj.onMouseDown(this.tl_onMouseDown)
                // 初始化json数据到tl
                this.timeline_obj.setModel({ rows: this.d_tl_rows })
            }
        },
        tab_tl_click() {
            setTimeout(this.init_tl, 100)
        },
        tl_onMouseDown(obj) {
            this.d_tl_editing_row_index = -1
            this.d_tl_editing_key_index = -1
            console.log(obj)
        },
        tl_onSelected(obj) {
            // 
        },
        tl_onScroll(obj) {
            // 
        }
    },
    async created() {
        loadJs('./static/js/jsonData.js').then(() => {
            // 加载成功，进行后续操作
            this.d_tl_rows = tl_data_rows
            console.log(tl_data_rows)
        })
        loadJs('./static/js/animationTimelineJs/atl.js?v=2').then(() => {
            // 加载成功，进行后续操作

        })
        console.log('main created')
    },
    async mounted() {
        console.log('main mounted')
    },
    async updated() {
        console.log('main updated')
    },
    async activated() {
        console.log('main activated')
    },
    async serverPrefetch() {
        console.log('main serverPrefetch')
        this.init_tl()
    },

    async unmounted() {
        console.log('main unmounted')
    }
}
</script>
<!--  -->
<template>
    <v-main>
        <v-sheet class="fm_sheet">
            <!-- tabs -->
            <v-tabs v-model="tab" height="38" class="fm_main_area_tabs">
                <v-tab value="one" height="38" :max-width="48" :min-width="48" class="fm_main_area_tab">
                    <v-icon icon="mdi mdi-axis-arrow"></v-icon></v-tab>
                <v-tab value="two" height="38" :max-width="48" :min-width="48" class="fm_main_area_tab"
                    @click="tab_tl_click"><v-icon icon="mdi mdi-chart-timeline-variant-shimmer"></v-icon></v-tab>
            </v-tabs>
            <!-- tab panels -->
            <v-window v-model="tab" class="fm_main_area_window">
                <v-window-item value="one" class="fm_main_area_window_item">
                    <canvas id="canvas" :width="view_size_x" :height="view_size_y" class="fm_wasm_canvas"></canvas>
                </v-window-item>
                <v-window-item value="two">
                    <div class="fm_tl_out_div">
                        <!--  outline -->
                        <div class="fm_tl_outline">
                            <!-- outline heaer -->
                            <div class="fm_outline_header">
                                <div class="fm_outline_header_in"></div>
                            </div>
                            <!-- outline content -->
                            <div class="outline_scroll_container">
                                <div class="outline_items">
                                    <div v-for="(tl_node, index) in d_tl_rows" :key="index">
                                        <div class="outline_node"
                                            :style="{ 'min-height': tl_node.style.height + 'px', 'max-height': tl_node.style.height + 'px' }"
                                            :class="{ 'outline_node_select ': (d_tl_select_id) == (tl_node.id) }">{{ index +
                                                ' : ' + tl_node.id + ' | ' + tl_node.title }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- timeline  -->
                        <div id="timeline" class="fm_timeline"></div>
                    </div>

                </v-window-item>


            </v-window>

        </v-sheet>
    </v-main>
</template>
