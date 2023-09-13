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
        d_used_search_text: '',
        show: false,
        d_show_count: 100,
        store_wasm_nodes_define: useWasmNodes(),
        store_tl_rows_define: tl_drows(),
        panel: [],
        c_color: 'rgba(252, 192, 46, 0.62)'
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
            console.log(obj)
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
        <v-toolbar class="fm_toolbar" height="37">
            <v-btn class="fm_btn" icon="mdi mdi-arrow-expand-vertical" size="x-small" @click="all">
            </v-btn>
            <v-btn class="fm_btn" icon="mdi mdi-arrow-collapse-vertical" size="x-small" @click="none">
            </v-btn>
        </v-toolbar>
        <v-card-text class="fm_card_text_for_right_out">
            <v-container class="fm_v_right_container">
                <v-expansion-panels class="fm_expansion_panels" v-model="panel" multiple>
                    <v-expansion-panel value="basic" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-auto-fix"></v-icon><span>Basic</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-arrow-expand-vertical' : 'mdi mdi-arrow-collapse-vertical'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
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
                                    :icon="expanded ? 'mdi mdi-arrow-expand-vertical' : 'mdi mdi-arrow-collapse-vertical'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                            <p></p>
                            <!-- <wbr/> -->
                            <!--  -->
                            <ColorPicker format="rgb" shape="square" theme="black"
                                v-model:pureColor="store_wasm_nodes_define.current_item_of_gather().fillcolor.rgba"
                                @pureColorChange="change_fillcolor_attributes(store_wasm_nodes_define.current_item_of_gather().fillcolor)" />
                            <span>Node Color :{{ store_wasm_nodes_define.current_item_of_gather().fillcolor.rgba }}</span>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel value="others" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-airplane-edit"></v-icon> <span>Expanded</span>

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