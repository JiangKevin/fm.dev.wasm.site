<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
import { store } from '@/store/store'
export default {
    components: {
    },
    props: {

    },
    data: () => ({
        loaded: false,
        loading: false,
        d_used_search_text: '',
        show: false,
        d_show_count: 100,
        store: store()
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        tl_node_add(obj) {
            this.store.increment_of_tl_rows(obj)
        },
        wasm_select_click(index) {
            this.store.d_wasm_select_edit_index = index;
        }
    },
    async mounted() {
        // console.log('left area used mounted')
        // console.log(this.d_nodes_gather)
    },
    async updated() {
        // console.log('left area used updated')
        // console.log(this.d_nodes_gather)
    },
}
</script>
<!--  -->
<template>
    <v-card flat class="fm_left_area_cards">
        <v-toolbar height="36">
            <v-text-field :loading="loading" density="compact" variant="solo" label="Search ..."
                append-inner-icon="mdi mdi-magnify" single-line hide-details class="fm_left_text_field"
                v-model="d_used_search_text"></v-text-field>
        </v-toolbar>
        <v-card-text class="fm_card_text_for_left_out">
            <v-container class="fm_v_left_container">
                <v-card flat width="310" v-for="(used_node, index) in store.d_wasm_nodes_gather" :key="index"
                    v-show="JSON.stringify(used_node.name).toLowerCase().includes(d_used_search_text) && index < d_show_count"
                    class="fm_card_res" :class="{ 'active': store.d_wasm_select_edit_index == index }"
                    @click="wasm_select_click(index)">
                    <v-card-title class="fm_card_title_l_flex">
                        <v-img :src="used_node.img" cover></v-img>
                        <span class="one">
                            {{ used_node.name }}
                        </span>
                        <span class="two">
                            {{ '#' + index.toFixed(0).padStart(4, "0") + ' ' + used_node.type + ' ' + used_node.creat_date }}
                        </span>
                        <div class="btn" v-if="store.d_wasm_select_edit_index == index">
                            <v-btn class="fm_btn_left" icon="mdi mdi-auto-fix" size="x-small">
                            </v-btn>
                            <!-- <v-btn class="fm_btn_mid" icon="mdi mdi-checkbox-marked-circle-plus-outline" size="x-small">
                            </v-btn> -->
                            <v-btn class="fm_btn_right" icon="mdi mdi-chart-timeline-variant-shimmer" size="x-small"
                                :class="{ 'fm_btn_prohibit': used_node.tl_create }" @click="tl_node_add(used_node)">
                            </v-btn>
                        </div>

                    </v-card-title>
                </v-card>
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar_bottom">
            <v-spacer></v-spacer> <v-icon size="0.9em">
                mdi mdi-torch
            </v-icon><span class="fm_toolbar_span">{{ store.d_wasm_nodes_gather.length }} Model Items</span>
        </v-toolbar>
    </v-card>
</template>
