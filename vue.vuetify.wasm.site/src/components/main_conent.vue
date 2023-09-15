<!--  -->
<script>
import { store } from '@/store/store'

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
        timeline_obj: null,
        d_tl_select_id: '',
        d_tl_select_title: '',
        /* 随机数，改变变量缓存，用于更新样式 */
        d_rand: -1,
        d_ol_w: 366,
        playing: false,
        playStep: 50,
        trackTimelineMovement: false,
        store: store()
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
                this.timeline_obj.setModel({ rows: this.store.d_tl_rows })
                // 
                this.iniPlayer()
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
            this.store.d_tl_select_row_index = -1
            this.store.d_tl_select_key_index = -1
            // console.log(obj)
            // 
            if (obj.target) {
                if (obj.target.type == 'group') {
                    if (obj.target.row) {
                        this.d_tl_select_id = obj.target.row.id
                        this.d_tl_select_title = obj.target.row.title
                        // 获取row index
                        let tl_row_count = this.store.d_tl_rows.length
                        for (var i = 0; i < tl_row_count; i++) {
                            if (obj.target.row.id == this.store.d_tl_rows[i].id) {
                                this.store.d_tl_select_row_index = i
                                this.write_log('From js: Timeline selected ', '', 'edit node index = ' + this.store.d_tl_select_row_index + ' ID/Title = ' + this.d_tl_select_id + '/' + this.d_tl_select_title)
                                break
                            } else {
                                this.store.d_tl_select_row_index = -1
                            }
                        }

                    }
                }
                if (obj.target.type == 'keyframe') {
                    if (obj.target.row && obj.target.keyframe) {
                        this.d_tl_select_id = obj.target.row.id
                        this.d_tl_select_title = obj.target.row.title
                        // 获取row index
                        let tl_row_count = this.store.d_tl_rows.length
                        for (var i = 0; i < tl_row_count; i++) {
                            if (obj.target.row.id == this.store.d_tl_rows[i].id) {
                                this.store.d_tl_select_row_index = i
                                this.write_log('From js: Timeline selected ', '', 'edit node index = ' + this.store.d_tl_select_row_index + ' ID/Title = ' + this.d_tl_select_id + '/' + this.d_tl_select_title)
                                break
                            } else {
                                this.store.d_tl_select_row_index = -1
                            }
                        }
                        // 获取选中row 的 选中key 的index
                        for (var i = 0; i < obj.target.row.keyframes.length; i++) {
                            if (obj.target.row.keyframes[i].uuid == obj.target.keyframe.uuid) {
                                this.store.d_tl_select_key_index = i
                                this.write_log('From js: Timeline selected ', '', 'edit node index = ' + this.store.d_tl_select_row_index + ' edit key index = ' + this.store.d_tl_select_key_index + ' ID/Title = ' + this.d_tl_select_id + '/' + this.d_tl_select_title)
                                break
                            } else {
                                this.store.d_tl_select_key_index = -1
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
        tlMinusClick() {
            if (this.timeline_obj.getZoom() >= 0.1) {
                this.timeline_obj.setZoom(this.timeline_obj.getZoom() - 0.1)
                this.moveTimelineIntoTheBounds()
            }
        },
        tlPlusClick() {
            if (this.timeline_obj.getZoom() <= 8) {
                this.timeline_obj.setZoom(this.timeline_obj.getZoom() + 0.1)
                this.moveTimelineIntoTheBounds()
            }
        },
        tl_zoom_reset() {
            this.timeline_obj.setZoom(1)
        },
        panMode(interactive) {
            if (this.timeline_obj) {
                this.timeline_obj.setInteractionMode(interactive ? 'pan' : 'nonInteractivePan')
            }
        },
        noneMode() {
            if (this.timeline_obj) {
                this.timeline_obj.setInteractionMode('none')
            }
        },
        selectMode() {
            if (this.timeline_obj) {
                this.timeline_obj.setInteractionMode('selector')
            }
        },
        moveTimelineIntoTheBounds() {
            if (this.timeline_obj) {
                if (this.timeline_obj._startPos || this.timeline_obj._scrollAreaClickOrDragStarted) {
                    // User is manipulating items, don't move screen in this case.
                    return
                }
                const fromPx = this.timeline_obj.scrollLeft
                const toPx = this.timeline_obj.scrollLeft + this.timeline_obj.getClientWidth()

                let positionInPixels = this.timeline_obj.valToPx(this.timeline_obj.getTime()) + this.timeline_obj._leftMargin()
                // Scroll to timeline position if timeline is out of the bounds:
                if (positionInPixels <= fromPx || positionInPixels >= toPx) {
                    this.timeline_obj.scrollLeft = positionInPixels
                }
            }
        },
        iniPlayer() {
            setInterval(() => {
                if (this.playing) {
                    if (this.timeline_obj) {
                        this.timeline_obj.setTime(this.timeline_obj.getTime() + this.playStep)
                        this.moveTimelineIntoTheBounds()
                    }
                }
            }, this.playStep)
        },
        play() {
            this.playing = true
            if (this.timeline_obj) {
                this.moveTimelineIntoTheBounds()
                // Don't allow to manipulate timeline during playing (optional).
                this.timeline_obj.setOptions({
                    timelineDraggable: false,
                    groupsDraggable: false,
                    keyframesDraggable: false,
                })
            }
        },
        stop() {
            this.playing = false
            if (this.timeline_obj) {
                this.timeline_obj.setOptions({
                    timelineDraggable: true,
                    groupsDraggable: true,
                    keyframesDraggable: true,
                })
            }
        },
        new_key() {
            this.store.increment_of_select_row(this.timeline_obj.getTime());
            this.timeline_obj.rescale()
            this.timeline_obj.redraw()

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
                                <v-toolbar class="fm_outline_header_in">
                                    <v-spacer></v-spacer>
                                    <div class="fm_toolbar_contain">
                                        <v-btn icon="mdi mdi-play" class="fm_ol_toolbar_btn" @click="play"></v-btn>
                                        <v-btn icon="mdi mdi-stop" class="fm_ol_toolbar_btn" @click="stop"></v-btn>
                                    </div>
                                    <div class="fm_toolbar_contain">
                                        <v-btn icon="mdi mdi-plus-network" class="fm_ol_toolbar_btn"
                                            @click="new_key"></v-btn>
                                    </div>
                                    <!--  -->
                                    <div class="fm_toolbar_contain">
                                        <v-btn icon="mdi mdi-selection-drag" class="fm_ol_toolbar_btn"
                                            @click="selectMode"></v-btn>
                                        <v-btn icon="mdi mdi-gesture-double-tap" class="fm_ol_toolbar_btn"
                                            @click="panMode(true)"></v-btn>
                                        <v-btn icon="mdi mdi-gesture-swipe" class="fm_ol_toolbar_btn"
                                            @click="panMode(false)"></v-btn>
                                        <v-btn icon="mdi mdi-eye-outline" class="fm_ol_toolbar_btn"
                                            @click="noneMode"></v-btn>
                                    </div>
                                    <!--  -->
                                    <div class="fm_toolbar_contain">
                                        <v-btn icon="mdi mdi-magnify-plus" class="fm_ol_toolbar_btn"
                                            @click="tlPlusClick"></v-btn>
                                        <v-btn icon="mdi mdi-magnify-minus" class="fm_ol_toolbar_btn"
                                            @click="tlMinusClick"></v-btn>
                                        <v-btn icon="mdi mdi-refresh-circle" class="fm_ol_toolbar_btn"
                                            @click="tl_zoom_reset"></v-btn>
                                    </div>
                                </v-toolbar>
                            </div>
                            <!-- outline content -->
                            <div id="outline-scroll-container" class="outline_scroll_container">
                                <div id="outline-container" class="outline_items" @wheel="outline_onScroll">
                                    <div class="outline_node" v-for="(tl_node, index) in store.d_tl_rows" :key="index"
                                        :style="{ 'min-height': tl_node.style.height + 'px', 'max-height': tl_node.style.height + 'px' }"
                                        v-bind:class="{ 'outline_node_select': d_tl_select_id == (tl_node.id) }">{{
                                            index.toFixed(0).padStart(4, '0') +
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
