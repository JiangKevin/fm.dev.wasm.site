<!--  -->
<script>
import { inject, watch } from 'vue'
import right_area_wasm_edit_view from '@/components/right_area_wasm_edit.vue'
import right_area_tl_edit_view from '@/components/right_area_tl_edit.vue'
export default {
    components: {
        right_area_wasm_edit_view,
        right_area_tl_edit_view
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
            default: false
        },
        right_area_w: {
            type: Number,
            required: true,
            default: false
        },
    },
    data: () => ({
        tab: null,
        loaded: false,
        loading: false,
        show: false,

    }),

    computed: {
        class_object_computed_right_area() {
            if (this.view_right) {
                return "fm_right_flex_large"
            }
            else {
                return "fm_right_flex"
            }
        },
        class_object_computed_right_area_tab() {
            if (this.view_right) {
                return "fm_right_tabs_vertical"
            }
            else {
                return "fm_right_tabs_vertical_none_leftborder"
            }
        }
    },
    methods:
    {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
    mounted() {

    }
}
</script>
<!--  -->
<template>
    <v-navigation-drawer location="right" :width="right_area_w">
        <v-card height="100%" class="fm_card_no_radius">
            <div class="d-flex flex-row" :class="class_object_computed_right_area">
                <v-window v-model="tab" v-if="view_right" class="fm_window">
                    <v-window-item value="option-1" class="fm_window_item">
                        <right_area_wasm_edit_view></right_area_wasm_edit_view>
                    </v-window-item>
                    <v-window-item value="option-2" class="fm_window_item">
                        <right_area_tl_edit_view></right_area_tl_edit_view>
                    </v-window-item>
                    <v-window-item value="option-3" class="fm_window_item">
                        <right_area_tl_edit_view></right_area_tl_edit_view>
                    </v-window-item>
                </v-window>
                <!--  -->
                <v-tabs v-model="tab" direction="vertical" color="primary" :class="class_object_computed_right_area_tab">
                    <v-tab value="option-1" max-width="48" width="48" height="38">
                        <v-icon>
                            mdi mdi-mace
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-2" max-width="48" width="48" height="38">
                        <v-icon>
                            mdi mdi-magic-staff
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-3" max-width="48" width="48" height="38">
                        <v-icon>
                            mdi mdi-access-point
                        </v-icon>
                    </v-tab>
                </v-tabs>
            </div>
        </v-card>
    </v-navigation-drawer>
</template>
