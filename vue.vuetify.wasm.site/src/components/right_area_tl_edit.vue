<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
import { useWasmNodes, tl_drows } from '@/store/store-pinia'
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
export default {
    components: {
        ColorPicker
    },
    props: {

    },
    data: () => ({
        loaded: false,
        loading: false,
        show: false,
        panel: ['row', 'key', 'attributes'],
        store_wasm_nodes_define: useWasmNodes(),
        store_tl_rows_define: tl_drows(),
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        all() {
            this.panel = ['row', 'key', 'attributes']
        },
        none() {
            this.panel = []
        },
        itemProps(item) {
            return {
                title: item.name,
                subtitle: item.uuid,
            }
        },
    },

    async mounted() {

    },
    async updated() {

    },
}
</script>
<!--  -->
<template>
    <v-card flat class="fm_right_area_cards">
        <v-card-text class="fm_card_text_for_right_out">
            <v-container class="fm_v_right_container">
                <!-- container start -->
                <!-- expansion-panels start -->
                <v-expansion-panels class="fm_expansion_panels" v-model="panel" multiple>
                    <!-- panel row -->
                    <v-expansion-panel value="row" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-lightbulb-group"></v-icon><span>Row</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text"
                            v-if="store_tl_rows_define.d_select_row_index != -1">
                            <!-- id -->
                            <v-text-field clearable label="ID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store_tl_rows_define.current_row_item_of_gather().id"></v-text-field>
                            <!-- uuid -->
                            <v-text-field clearable label="UUID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store_tl_rows_define.current_row_item_of_gather().uuid"></v-text-field>
                            <!-- title -->
                            <v-text-field clearable label="Title" prepend-inner-icon="mdi mdi-qrcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store_tl_rows_define.current_row_item_of_gather().title"></v-text-field>
                            <v-text-field clearable label="Title" prepend-inner-icon="mdi mdi-qrcode" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" class="fm_v_text_field"
                                v-model="store_tl_rows_define.current_row_item_of_gather().title"></v-text-field>
                            <!--  -->
                            <v-combobox label="Bind model" variant="solo" prepend-inner-icon="mdi mdi-qrcode"
                                hide-details="true" class="fm_v_combobox"
                                v-model="store_tl_rows_define.current_row_item_of_gather().bind_object" itemTitle="name"
                                itemValue="uuid" :items="store_wasm_nodes_define.get_gather_for_bind"
                                :item-props="itemProps"></v-combobox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- panel key -->
                    <v-expansion-panel value="key" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-cctv"></v-icon><span>Key</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- panel attributes -->
                    <v-expansion-panel value="attributes" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-cogs"></v-icon><span>Attributes</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <!-- expansion-panels end -->
                <!-- container end -->
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar_bottom" height="36">
            <v-spacer></v-spacer>
            <div class="fm_toolbar_contain">
                <v-btn icon="mdi mdi-chevron-triple-down" class="fm_toolbar_btn" @click="all"></v-btn>
                <v-btn icon="mdi mdi-chevron-triple-up" class="fm_toolbar_btn" @click="none"></v-btn>
            </div>
        </v-toolbar>
    </v-card>
</template>