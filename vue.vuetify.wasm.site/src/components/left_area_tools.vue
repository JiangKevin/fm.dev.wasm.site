<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
import { store } from '@/store/store'
export default {
    props: {

    },
    data: () => ({
        loaded: false,
        loading: false,
        d_tools_search_text: '',
        show: false,
        d_show_count: 100,
        store: store(),
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        export_file() {

            var model = {}
            console.log("From js: model file content = \n")
            model.timeline = JSON.parse(JSON.stringify(this.store.d_tl_rows));
            model.wasm = JSON.parse(JSON.stringify(this.store.d_wasm_nodes_gather));
            // 打印到控制台
            console.log(JSON.stringify(model))

        }
    },
    mounted() {

    }
}
</script>
<!--  -->
<template>
    <v-card flat class="fm_left_area_cards">
        <v-toolbar height="36">
            <v-text-field :loading="loading" density="compact" variant="solo" label="Search ..."
                append-inner-icon="mdi mdi-magnify" single-line hide-details class="fm_left_text_field"
                v-model="d_tools_search_text"></v-text-field>
        </v-toolbar>
        <v-card-text class="fm_card_text_for_left_out">
            <v-container class="fm_v_left_container">
                <v-btn icon="mdi mdi-home-export-outline" class="fm_nav_btn" @click="export_file"></v-btn>
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar_bottom">
            <v-spacer></v-spacer> <v-icon size="0.9em">
                mdi mdi-bank
            </v-icon><span class="fm_toolbar_span"></span>
        </v-toolbar>
    </v-card>
</template>