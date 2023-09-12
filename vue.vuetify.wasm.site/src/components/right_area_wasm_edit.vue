<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
// import { store } from '@/store/store.js'
import { useWasmNodes, tl_drows } from '@/store/store-pinia'
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
        store_wasm_nodes_define: useWasmNodes(),
        store_tl_rows_define: tl_drows()
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        tl_node_add(obj) {
            this.store_tl_rows_define.increment_of_tl_rows(obj)
        }
    },
    async mounted() {
        console.log('left area used mounted')
        // console.log(this.d_nodes_gather)
    },
    async updated() {
        console.log('left area used updated')
        // console.log(this.d_nodes_gather)
    },
}
</script>
<!--  -->
<template>
    <v-card flat class="fm_right_area_cards">
        <v-toolbar class="fm_toolbar" height="36">
            <v-spacer></v-spacer> <v-icon size="0.9em">
                mdi mdi-torch
            </v-icon><span class="fm_toolbar_span">{{ store_wasm_nodes_define.d_nodes_gather.length }} Model Items</span>
        </v-toolbar>
        <v-card-text class="fm_card_text_for_right_out">
            <v-container class="fm_v_right_container">


            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar" height="36">
            <v-spacer></v-spacer> <v-icon size="0.9em">
                mdi mdi-torch
            </v-icon><span class="fm_toolbar_span">{{ store_wasm_nodes_define.d_nodes_gather.length }} Model Items</span>
        </v-toolbar>
    </v-card>
</template>