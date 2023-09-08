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
        <v-card height="100%">
            <div class="d-flex flex-row" :class="class_object_computed_right_area">

                <v-window v-model="tab" v-if="view_right">
                    <v-window-item value="option-1">
                        <v-card flat class="fm_right_area_cards">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_right_text_field"></v-text-field>
                            </v-toolbar>
                            <v-card-text>
                                <v-container class="fm_v_res_container" width="310">
                                    <v-card width="310">
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px" width="310px"
                                            cover></v-img>
                                        <v-card-title class="fm_card_title_l">
                                            Top western road trips 
                                        </v-card-title>
                                        <v-expand-transition>
                                            <div v-show="show">
                                                <v-divider></v-divider>
                                                <v-card-text class="fm_card_text">
                                                    I'm a thing. But, like most politicians, he promised more than he could
                                                </v-card-text>
                                            </div>
                                        </v-expand-transition>
                                        <v-card-actions class="fm_card_actions">
                                            <v-spacer></v-spacer>
                                            <v-btn class="fm_btn" icon="mdi mdi-checkbox-marked-circle-plus-outline">
                                            </v-btn>
                                            <v-btn class="fm_btn"
                                                :icon="show ? 'mdi mdi-chevron-double-up' : 'mdi mdi-chevron-double-down'"
                                                @click="show = !show"></v-btn>

                                        </v-card-actions>

                                    </v-card>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-2">
                        <v-card flat class="fm_right_area_cards">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_right_text_field"></v-text-field>
                            </v-toolbar>
                            <v-card-text>
                                <p>
                                    Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
                                    convallis
                                    tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris
                                    ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien,
                                    tincidunt
                                    non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                                </p>

                                <p class="mb-0">
                                    Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere
                                    eget,
                                    vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim
                                    turpis,
                                    dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-3">
                        <v-card flat class="fm_right_area_cards">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_right_text_field"></v-text-field>
                            </v-toolbar>
                            <v-card-text>
                                <p class="mb-0">
                                    Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum,
                                    porta
                                    a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                                    pretium
                                    quis, sem. Nam at tortor in tellus interdum sagittis.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
                <!--  -->
                <v-tabs v-model="tab" direction="vertical" color="primary" :class="class_object_computed_right_area_tab">
                    <v-tab value="option-1" max-width="48" width="48" height="38">
                        <v-icon>
                            mdi mdi-account
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-2" max-width="48px" height="38">
                        <v-icon>
                            mdi mdi-lock
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-3" max-width="48px" height="38">
                        <v-icon>
                            mdi mdi-access-point
                        </v-icon>
                    </v-tab>
                </v-tabs>
            </div>
        </v-card>
    </v-navigation-drawer>
</template>
