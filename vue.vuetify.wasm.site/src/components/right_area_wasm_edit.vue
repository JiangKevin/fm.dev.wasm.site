<!--  -->
<script>
import { defineComponent, inject, watch, ref } from 'vue'
// import { store } from '@/store/store.js'
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
        d_edit_search_text: '',
        show: false,
        d_show_count: 100,
        store_wasm_nodes_define: useWasmNodes(),
        store_tl_rows_define: tl_drows(),
        panel: ['basic', 'color', 'others'],
        is_del_wasm_item: false
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
            this.panel = ['basic', 'color', 'others']
        },
        none() {
            this.panel = []
        },
        change_fillcolor_attributes(obj) {
            this.store_wasm_nodes_define.update_current_item_fillcolor();

        },
        delete_wasm_node(obj) {
            this.is_del_wasm_item = false
            this.store_wasm_nodes_define.delete_current_item()
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
    <v-card flat class="fm_right_area_cards">
        <v-card-text class="fm_card_text_for_right_out">
            <v-container class="fm_v_right_container">
                <v-expansion-panels class="fm_expansion_panels" v-model="panel" multiple>
                    <v-expansion-panel value="basic" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-auto-fix"></v-icon><span>Basic</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text"
                            v-if="store_wasm_nodes_define.d_select_edit_index != -1">
                            <!-- <wbr/> -->
                            <!--  -->
                            <v-text-field clearable label="UUID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store_wasm_nodes_define.current_item_of_gather().uuid"></v-text-field>
                            <!--  -->
                            <v-text-field clearable label="Name" prepend-inner-icon="mdi mdi-qrcode" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" class="fm_v_text_field"
                                v-model="store_wasm_nodes_define.current_item_of_gather().name"></v-text-field>
                            <!-- 坐标 -->
                            <v-text-field clearable label="X of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store_wasm_nodes_define.current_item_of_gather().location.x"></v-text-field>
                            <v-text-field clearable label="Y of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store_wasm_nodes_define.current_item_of_gather().location.y"></v-text-field>
                            <v-text-field clearable label="Z of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store_wasm_nodes_define.current_item_of_gather().location.z"></v-text-field>
                            <!-- 角度 -->
                            <v-text-field clearable label="X of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store_wasm_nodes_define.current_item_of_gather().direction.x"></v-text-field>
                            <v-text-field clearable label="Y of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store_wasm_nodes_define.current_item_of_gather().direction.y"></v-text-field>
                            <v-text-field clearable label="Z of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store_wasm_nodes_define.current_item_of_gather().direction.z"></v-text-field>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel value="color" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-palette"></v-icon> <span>Colors</span>

                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text"
                            v-if="store_wasm_nodes_define.d_select_edit_index != -1">
                            <p></p>
                            <!-- <wbr/> -->
                            <!--  -->
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="store_wasm_nodes_define.current_item_of_gather().fillcolor.rgba"
                                    @pureColorChange="change_fillcolor_attributes(store_wasm_nodes_define.current_item_of_gather().fillcolor)" />
                                <div class="span_div"> <span>Node Color :{{
                                    store_wasm_nodes_define.current_item_of_gather().fillcolor.rgba }}</span></div>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel value="others" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-airplane-edit"></v-icon> <span>Expanded</span>

                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text"
                            v-if="store_wasm_nodes_define.d_select_edit_index != -1">
                            <!--  -->
                            <v-switch v-model="store_wasm_nodes_define.current_item_of_gather().tl_create" :value=true
                                :true-value=true hide-details="true" class="fm_switch" label="Inclue prefabricated actions"
                                color="red-darken-3" readonly true-icon="mdi mdi-chart-timeline-variant-shimmer"></v-switch>
                            <!-- Rendering mode -->
                            <v-switch v-model="store_wasm_nodes_define.current_item_of_gather().draw_model" value="FACE"
                                true-value="FACE" hide-details="true" class="fm_switch" label="Rendering mode:Face"
                                color="indigo-darken-3" true-icon="mdi mdi-cube"></v-switch>
                            <v-switch v-model="store_wasm_nodes_define.current_item_of_gather().draw_model"
                                value="WIREFRAME" true-value="WIREFRAME" hide-details="true" class="fm_switch"
                                label="Rendering mode:WireFrame" color="indigo-darken-3"
                                true-icon="mdi mdi-cube-outline"></v-switch>
                            <v-switch v-model="store_wasm_nodes_define.current_item_of_gather().draw_model" value="POINT"
                                true-value="POINT" hide-details="true" class="fm_switch" label="Rendering mode:Point"
                                color="indigo-darken-3" true-icon="mdi mdi-blur"></v-switch>

                            <!-- Rendering mode -->
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar_bottom">
            <v-spacer></v-spacer>
            <div class="fm_toolbar_contain">
                <v-btn icon="mdi mdi-delete" class="fm_toolbar_btn"></v-btn>
                <v-dialog v-model="is_del_wasm_item" activator="parent" transition="dialog-bottom-transition" persistent
                    width="auto">
                    <v-card class="fm_dialog_card" v-if="store_wasm_nodes_define.d_select_edit_index != -1">
                        <v-card-title>
                            Are you sure you want to delete the current item?
                        </v-card-title>
                        <v-card-text>
                            <v-icon icon="mdi mdi-barcode"></v-icon>
                            <span> {{ " " + store_wasm_nodes_define.current_item_of_gather().uuid }}</span>
                            <p></p>
                            <v-icon icon="mdi mdi-qrcode"></v-icon>
                            <span> {{ " " + store_wasm_nodes_define.current_item_of_gather().name }}</span>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="is_del_wasm_item = false">
                                Cancel
                            </v-btn>
                            <v-btn color="red" variant="text" @click="delete_wasm_node">
                                Ok
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
            <div class="fm_toolbar_contain">
                <v-btn icon="mdi mdi-chevron-triple-down" class="fm_toolbar_btn" @click="all"></v-btn>
                <v-btn icon="mdi mdi-chevron-triple-up" class="fm_toolbar_btn" @click="none"></v-btn>
            </div>

        </v-toolbar>
    </v-card>
</template>