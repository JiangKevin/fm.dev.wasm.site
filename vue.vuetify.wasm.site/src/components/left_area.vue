<!--  -->
<script>
export default {
    inject: ['d_wasm_obj_res'],
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

        d_res_search_text:'',
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
    <v-navigation-drawer :width="left_area_w" expand-on-hover rail rail-width="48">
        <v-card height="100%">
            <div class="d-flex flex-row" :class="class_object_computed_left_area">
                <!--  -->
                <v-tabs v-model="tab" direction="vertical" color="primary" class="fm_left_tabs_vertical">
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
                <!--  -->
                <v-window v-model="tab">
                    <v-window-item value="option-1">
                        <v-card flat class="fm_left_area_cards">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_left_text_field"  v-model="d_res_search_text" ></v-text-field>
                            </v-toolbar>
                            <v-card-text>
                                <v-container class="fm_v_res_container">
                                    <v-card width="310" v-for="(res_node,index) in d_wasm_obj_res" :key="index">
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px"
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
                    <v-window-item value="option-2" width="318">
                        <v-card flat class="fm_left_area_cards" width="318">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_left_text_field"></v-text-field>
                            </v-toolbar>
                            <v-card-text>
                                <v-container fluid>
                                    <v-row dense>
                                        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                                            <v-card>
                                                <v-img :src="card.src" class="align-end"
                                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px"
                                                    cover>
                                                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                                                </v-img>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>

                                                    <v-btn size="small" color="surface-variant" variant="text"
                                                        icon="mdi mdi-heart"></v-btn>

                                                    <v-btn size="small" color="surface-variant" variant="text"
                                                        icon="mdi mdi-bookmark"></v-btn>

                                                    <v-btn size="small" color="surface-variant" variant="text"
                                                        icon="mdi mdi-share-variant"></v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-3">
                        <v-card flat class="fm_left_area_cards">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_left_text_field"></v-text-field>
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
            </div>
        </v-card>
    </v-navigation-drawer>
</template>
