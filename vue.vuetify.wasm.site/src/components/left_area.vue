<!--  -->
<script>
import left_area_res_view from '@/components/left_area_res.vue'
import left_area_used_view from '@/components/left_area_used.vue'
import left_area_tools_view from '@/components/left_area_tools.vue'
export default {
    inject: ['is_debug'],
    components: {
        left_area_res_view,
        left_area_used_view,
        left_area_tools_view
    },
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
        left_area_w: {
            type: Number,
            required: true,
            default: 0
        },
        right_area_w: {
            type: Number,
            required: true,
            default: 0
        },
    },
    data: () => ({
        tab: null,
        loaded: false,
        loading: false,
        drawer: true,
        rail: true,
        is_lock_left: true,
        is_lock_w: 366,
        d_res_search_text: '',
        cards: [
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
        show: false,
    }),

    computed: {
        class_object_computed_left_area() {
            if (this.view_left) {
                this.drawer = true
                this.rail = true
                return "fm_left_flex_large"
            }
            else {
                this.drawer = false
                this.rail = false
                return "fm_left_flex"
            }
        },
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
    <v-navigation-drawer :width="is_lock_w" expand-on-hover rail rail-width="48">
        <v-card height="100%">
            <div class="d-flex flex-row" :class="class_object_computed_left_area">
                <!--  -->
                <v-tabs v-model="tab" direction="vertical" color="primary" class="fm_left_tabs_vertical">
                    <v-tab value="option-1" max-width="48" width="48" height="38">
                        <v-icon>
                            mdi mdi-bank
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-2" max-width="48px" height="38">
                        <v-icon>
                            mdi mdi-torch
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-3" max-width="48px" height="38">
                        <v-icon>
                            mdi mdi-access-point
                        </v-icon>
                    </v-tab>
                </v-tabs>
                <!--  -->
                <v-window v-model="tab" class="fm_window">
                    <v-window-item value="option-1" class="fm_window_item">
                        <left_area_res_view></left_area_res_view>
                    </v-window-item>
                    <v-window-item value="option-2" class="fm_window_item">
                        <left_area_used_view></left_area_used_view>
                    </v-window-item>
                    <v-window-item value="option-3" class="fm_window_item">
                        <left_area_tools_view></left_area_tools_view>
                    </v-window-item>
                </v-window>
            </div>
        </v-card>
    </v-navigation-drawer>
</template>
