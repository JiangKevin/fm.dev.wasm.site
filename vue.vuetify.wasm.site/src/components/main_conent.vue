<!--  -->
<script>
export default {
    inject: ['d_tl_rows'],
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
        timeline_obj: null,
        d_tl_select_id: '',
        d_tl_select_title: '',
        d_tl_editing_row_index: -1,
        d_tl_editing_key_index: -1,
        /* 随机数，改变变量缓存，用于更新样式 */
        d_rand: -1,
        d_ol_w: 366
    }),
    computed: {


    },
    watch:
    {
        view_size_x(new_view_size_x, old_view_size_x) {
            if (this.timeline_obj) {
                this.timeline_obj.rescale()
                this.timeline_obj.redraw()
            }
        },
        d_tl_rows(new_d_tl_rows, old_d_tl_rows) {
            // 初始化json数据到tl
            // console.log("d_tl_rows is change")
        },
        tab(new_tab, old_tab) {

        }
    },
    methods:
    {
        init_tl() {
            this.d_rand = Math.random()
            if (this.is_tl_creat != true) {
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
                // /** 禁用canvas上的鼠标右键菜单*/
                // let canvas_timeline_el = document.querySelector("timeline_canvas");
                // canvas_timeline_el.addEventListener("contextmenu", (e) => {
                //     e.preventDefault();
                // });

            }
            else {
                if (this.timeline_obj) {
                    this.timeline_obj.rescale()
                    this.timeline_obj.redraw()
                }
            }
        },
        tab_tl_click() {
            setTimeout(this.init_tl, 100)

        },
        tl_onMouseDown(obj) {
            this.d_tl_editing_row_index = -1
            this.d_tl_editing_key_index = -1
            // console.log(obj)
            // 
            if (obj.target) {
                if (obj.target.type == 'group') {
                    if (obj.target.row) {
                        this.d_tl_select_id = obj.target.row.id
                        this.d_tl_select_title = obj.target.row.title
                        // 获取row index
                        let tl_row_count = this.d_tl_rows.length
                        for (var i = 0; i < tl_row_count; i++) {
                            if (obj.target.row.id == this.d_tl_rows[i].id) {
                                this.d_tl_editing_row_index = i
                                this.write_log('From js: Timeline selected ', '', 'edit node index = ' + this.d_tl_editing_row_index + ' ID/Title = ' + this.d_tl_select_id + '/' + this.d_tl_select_id)
                                break
                            } else {
                                this.d_tl_editing_row_index = -1
                            }
                        }

                    }
                }
                if (obj.target.type == 'keyframe') {
                    if (obj.target.row && obj.target.keyframe) {
                        this.d_tl_select_id = obj.target.row.id
                        this.d_tl_select_title = obj.target.row.title
                        // 获取row index
                        let tl_row_count = this.d_tl_rows.length
                        for (var i = 0; i < tl_row_count; i++) {
                            if (obj.target.row.id == this.d_tl_rows[i].id) {
                                this.d_tl_editing_row_index = i
                                this.write_log('From js: Timeline selected ', '', 'edit node index = ' + this.d_tl_editing_row_index + ' ID/Title = ' + this.d_tl_select_id + '/' + this.d_tl_select_id)
                                break
                            } else {
                                this.d_tl_editing_row_index = -1
                            }
                        }
                        // 获取选中row 的 选中key 的index
                        for (var i = 0; i < obj.target.row.keyframes.length; i++) {
                            if (obj.target.row.keyframes[i].uuid == obj.target.keyframe.uuid) {
                                this.d_tl_editing_key_index = i
                                this.write_log('From js: Timeline selected ', '', 'edit node index = ' + this.d_tl_editing_row_index + ' edit key index = ' + this.d_tl_editing_key_index + ' ID/Title = ' + this.d_tl_select_id + '/' + this.d_tl_select_id)
                                break
                            } else {
                                this.d_tl_editing_key_index = -1
                            }
                        }

                    }
                }
            }
        },
        tl_onSelected(obj) {
            // 
        },
        tl_onScroll(obj) {
            // 
            var outlineContainer = document.getElementById('outline-container')
            var timelineScrollContainer = document.getElementById('timeline-scroll-container')
            var outlineScrollContainer = document.getElementById('outline-scroll-container')
            if (outlineContainer) {
                outlineContainer.style.minHeight = timelineScrollContainer.scrollHeight + 'px'
                outlineScrollContainer.scrollTop = timelineScrollContainer.scrollTop
            }
        },
        outline_onScroll(obj) {
            var outlineContainer = document.getElementById('outline_container')
            var timelineScrollContainer = document.getElementById('timeline-scroll-container')
            var outlineScrollContainer = document.getElementById('outline_scroll_container')
            if (outlineContainer) {
                outlineContainer.style.minHeight = timelineScrollContainer.scrollHeight + 'px'
                outlineScrollContainer.scrollTop = timelineScrollContainer.scrollTop
            }

            if (this.timeline_obj) {
                this.timeline_obj._handleWheelEvent(obj)
            }
        },
        write_log(title, type, message) {
            console.log("-- " + title + " : " + message)
            /**footer info */
            $("#footer_info")[0].innerText = "-- " + title + " : " + message;
        }
    },
    async created() {

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
    },

    async unmounted() {
        console.log('main unmounted')
    }

}
</script>
<!--  -->
<template>
    <v-main class="fm_main">
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
                        <div class="fm_tl_outline" :width="d_ol_w">
                            <!-- outline heaer -->
                            <div class="fm_outline_header">
                                <div class="fm_outline_header_in"></div>
                            </div>
                            <!-- outline content -->
                            <div id="outline-scroll-container" class="outline_scroll_container">
                                <div id="outline-container" class="outline_items" @wheel="outline_onScroll">

                                    <div class="outline_node" v-for="(tl_node, index) in d_tl_rows" :key="index"
                                        :style="{ 'min-height': tl_node.style.height + 'px', 'max-height': tl_node.style.height + 'px' }"
                                        v-bind:class="{ 'outline_node_select': d_tl_select_id == (tl_node.id) }">{{ index +
                                            ' : ' + tl_node.id + ' | ' + tl_node.title }}</div>

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
