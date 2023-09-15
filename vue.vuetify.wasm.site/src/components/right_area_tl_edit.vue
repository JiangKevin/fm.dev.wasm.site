<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
import { store } from '@/store/store'
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
        store: store()
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
                            <v-icon icon="mdi mdi-align-vertical-center"></v-icon><span>Basic</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text" v-if="store.d_tl_select_row_index != -1">
                            <!-- id -->
                            <v-text-field clearable label="ID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_tl_row_item_of_gather().id"></v-text-field>
                            <!-- uuid -->
                            <v-text-field clearable label="UUID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_tl_row_item_of_gather().uuid"></v-text-field>
                            <!-- title -->
                            <v-text-field clearable label="Title" prepend-inner-icon="mdi mdi-qrcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_tl_row_item_of_gather().title"></v-text-field>
                            <!-- type -->
                            <v-text-field clearable label="Using Type" prepend-inner-icon="mdi mdi-alpha-t-box"
                                variant="solo" density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_tl_row_item_of_gather().type"></v-text-field>
                            <!-- bind uuid -->
                            <v-text-field clearable label="Bind UUID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_tl_row_item_of_gather().bind_object.uuid"></v-text-field>
                            <!-- bind name -->
                            <v-text-field clearable label="Bind name" prepend-inner-icon="mdi mdi-qrcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_tl_row_item_of_gather().bind_object.name"></v-text-field>
                            <!-- shap -->
                            <v-combobox label="Shap of key" variant="solo" class="fm_v_combobox" hide-details="true"
                                prepend-inner-icon="mdi mdi-rhombus-split"
                                v-model="store.current_tl_row_item_of_gather().style.keyframesStyle.shape"
                                :items="['rhomb', 'rect', 'circle']"></v-combobox>
                            <!-- row fillcolor -->
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="store.current_tl_row_item_of_gather().style.fillColor" />
                                <div class="span_div"> <span>Fill color of row :{{
                                    store.current_tl_row_item_of_gather().style.fillColor }}</span></div>
                            </div>
                            <!-- row group fillcolor -->
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="store.current_tl_row_item_of_gather().style.groupsStyle.fillColor" />
                                <div class="span_div"> <span>Fill color of Group :{{
                                    store.current_tl_row_item_of_gather().style.groupsStyle.fillColor }}</span></div>
                            </div>
                            <!-- key fillcolor -->
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="store.current_tl_row_item_of_gather().style.keyframesStyle.fillColor" />
                                <div class="span_div"> <span>Fill color of key :{{
                                    store.current_tl_row_item_of_gather().style.keyframesStyle.fillColor }}</span></div>
                            </div>

                            <!-- key Select fillcolor -->
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="store.current_tl_row_item_of_gather().style.keyframesStyle.selectedFillColor" />
                                <div class="span_div"> <span>Fill color of selected key :{{
                                    store.current_tl_row_item_of_gather().style.keyframesStyle.selectedFillColor
                                }}</span></div>
                            </div>

                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- panel key -->
                    <v-expansion-panel value="key" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-cards-diamond"></v-icon><span>Current Key</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text"
                            v-if="(store.d_tl_select_row_index != -1) && (store.d_tl_select_key_index != -1)">
                            <!-- uuid -->
                            <v-text-field clearable label="UUID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_tl_key_item_of_gather().uuid"></v-text-field>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- panel attributes -->
                    <v-expansion-panel value="attributes" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-heating-coil"></v-icon><span>Attributes</span>
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