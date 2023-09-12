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
        store_tl_rows_define: tl_drows(),
        panel: [],
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        tl_node_add(obj) {
            this.store_tl_rows_define.increment_of_tl_rows(obj)
        },
        all() {
            this.panel = ['foo', 'bar']
        },
        none() {
            this.panel = []
        },
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
    <v-card flat class="fm_right_area_cards">
        <v-toolbar class="fm_toolbar" height="37">
            <v-btn class="fm_btn" icon="mdi mdi-arrow-expand-vertical" size="x-small" @click="all">
            </v-btn>
            <v-btn class="fm_btn" icon="mdi mdi-arrow-collapse-vertical" size="x-small" @click="none">
            </v-btn>
        </v-toolbar>
        <v-card-text class="fm_card_text_for_right_out">
            <v-container class="fm_v_right_container">
                <v-expansion-panels class="fm_expansion_panels" v-model="panel" multiple>
                    <v-expansion-panel value="foo" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-auto-fix"></v-icon>Basic
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-arrow-expand-vertical' : 'mdi mdi-arrow-collapse-vertical'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                            <p></p>
                            <!-- <wbr/> -->
                            <!--  -->
                            <v-text-field clearable label="Label" prepend-inner-icon="mdi mdi-map-marker"
                                clear-icon="mdi mdi-backspace" variant="underlined" density="comfortable"
                                class="fm_v_text_field"></v-text-field>
                            <!--  -->
                            <v-text-field clearable label="Label" prepend-inner-icon="mdi mdi-map-marker"
                                clear-icon="mdi mdi-backspace" variant="underlined" density="comfortable"
                                class="fm_v_text_field"></v-text-field>

                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel value="bar" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-circle-edit-outline"></v-icon> Expanded

                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-arrow-expand-vertical' : 'mdi mdi-arrow-collapse-vertical'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar" height="36">
            <v-spacer></v-spacer> <v-icon size="0.9em">
                mdi mdi-torch
            </v-icon><span class="fm_toolbar_span">{{ store_wasm_nodes_define.d_nodes_gather.length }} Model Items</span>
        </v-toolbar>
    </v-card>
</template>