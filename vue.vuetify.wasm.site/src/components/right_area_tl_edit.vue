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
        panel: ['style', 'key', 'attributes'],
        Easing_items: ['EASE_NONE', 'EASE_NONE'],
        store: store(),
        is_del_tl_key: false,
        is_del_tl_row: false
    }),
    setup() {

    },
    computed: {
        compute_of_key_del() {
            if ((this.store.d_tl_select_row_index == -1) || (this.store.d_tl_select_key_index == -1)) {
                return 'fm_btn_prohibit'
            }
            else {
                if ((this.store.d_tl_rows[this.store.d_tl_select_row_index].keyframes.length == 2)) {
                    return 'fm_btn_prohibit'
                }
            }
        }
    },
    methods:
    {
        all() {
            this.panel = ['style', 'key', 'attributes']
        },
        none() {
            this.panel = []
        },
        delete_tl_key() {
            this.is_del_tl_key = false
            this.store.del_current_tl_key_item_of_gather()
        },
        delete_tl_row() {
            this.is_del_tl_row = false
            this.store.del_current_tl_row_item_of_gather()
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
                    <v-expansion-panel value="style" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-align-vertical-center"></v-icon><span>Style</span>
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
                            <!-- style height -->
                            <v-text-field clearable label="Row height" prepend-inner-icon="mdi mdi-arrow-up-down-bold"
                                variant="solo" @update:modelValue="store.current_tl_key_item_of_gather()"
                                density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
                                v-model.number="store.current_tl_row_item_of_gather().style.height"></v-text-field>
                            <!-- style groupsStyle height -->
                            <v-text-field clearable label="Group height" prepend-inner-icon="mdi mdi-menu-swap"
                                variant="solo" @update:modelValue="store.current_tl_key_item_of_gather()"
                                density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
                                v-model.number="store.current_tl_row_item_of_gather().style.groupsStyle.height"></v-text-field>
                            <!-- shap -->
                            <v-combobox label="Shap of key" variant="solo" class="fm_v_combobox" hide-details="true"
                                prepend-inner-icon="mdi mdi-rhombus-split"
                                v-model="store.current_tl_row_item_of_gather().style.keyframesStyle.shape"
                                :items="['rhomb', 'rect', 'circle']"></v-combobox>
                            <!-- style keyframesStyle width -->
                            <v-text-field clearable label="Shape width" prepend-inner-icon="mdi mdi-arrow-left-right"
                                variant="solo" @update:modelValue="store.current_tl_key_item_of_gather()"
                                density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
                                v-model.number="store.current_tl_row_item_of_gather().style.keyframesStyle.width"></v-text-field>
                            <!-- style keyframesStyle height -->
                            <v-text-field clearable label="Shape height" prepend-inner-icon="mdi mdi-arrow-up-down"
                                variant="solo" @update:modelValue="store.current_tl_key_item_of_gather()"
                                density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
                                v-model.number="store.current_tl_row_item_of_gather().style.keyframesStyle.height"></v-text-field>

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
                            <!-- val -->
                            <v-text-field clearable label="Val" prepend-inner-icon="mdi mdi-valve-closed" variant="solo"
                                @update:modelValue="store.current_tl_key_item_of_gather()" density="comfortable"
                                class="fm_v_text_field" hide-details="true" type="number"
                                v-model.number="store.current_tl_key_item_of_gather().val"></v-text-field>
                            <!-- min -->
                            <v-text-field clearable label="Min" prepend-inner-icon="mdi mdi-arrow-collapse-left"
                                @update:modelValue="store.current_tl_key_item_of_gather()" variant="solo"
                                density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
                                v-model="store.current_tl_key_item_of_gather().min"></v-text-field>
                            <!-- max -->
                            <v-text-field clearable label="Max" prepend-inner-icon="mdi mdi-arrow-collapse-right"
                                @update:modelValue="store.current_tl_key_item_of_gather()" variant="solo"
                                density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
                                v-model.number="store.current_tl_key_item_of_gather().max"></v-text-field>
                            <!-- Easing function -->
                            <v-combobox label="Easing function" variant="solo" class="fm_v_combobox" hide-details="true"
                                prepend-inner-icon="mdi mdi-function-variant"
                                v-model.number="store.current_tl_key_item_of_gather().animation"
                                :items="Easing_items"></v-combobox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- panel attributes -->
                    <v-expansion-panel value="attributes" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-heating-coil"></v-icon><span>Attributes of bind object</span>
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
                <v-btn icon="mdi mdi-delete-forever" class="fm_toolbar_btn" :class="compute_of_key_del"></v-btn>
                <!-- 删除当前key -->
                <v-dialog v-model="is_del_tl_key" activator="parent" transition="dialog-bottom-transition" persistent
                    v-if="store.d_tl_select_key_index != -1" width="auto">
                    <v-card class="fm_dialog_card" v-if="store.d_tl_select_key_index != -1">
                        <v-card-title>
                            Are you sure you want to delete the current key item?
                        </v-card-title>
                        <v-card-text>
                            <span>The deleted timeline key information is: </span>
                            <p></p>
                            <v-icon icon="mdi mdi-barcode"></v-icon>
                            <span> {{ " " + store.current_tl_key_item_of_gather().uuid }}</span>
                            <p></p>
                            <span> {{ " " + store.current_tl_key_item_of_gather().min }}</span>
                            <v-icon icon="mdi mdi-arrow-collapse-left"></v-icon>
                            <span> {{ " " + store.current_tl_key_item_of_gather().val }}</span>
                            <v-icon icon="mdi mdi-arrow-collapse-right"></v-icon>
                            <span> {{ " " + store.current_tl_key_item_of_gather().max }}</span>
                            <p></p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="is_del_tl_key = false">
                                Cancel
                            </v-btn>
                            <v-btn color="red" variant="text" @click="delete_tl_key">
                                Ok
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-btn icon="mdi mdi-delete" class="fm_toolbar_btn"
                    :class="{ 'fm_btn_prohibit': this.store.d_tl_select_row_index == -1 }"></v-btn>
                <!-- 删除当前row -->
                <v-dialog v-model="is_del_tl_row" activator="parent" transition="dialog-bottom-transition" persistent
                    v-if="store.d_tl_select_row_index != -1" width="auto">
                    <v-card class="fm_dialog_card" v-if="store.d_tl_select_row_index != -1">
                        <v-card-title>
                            Are you sure you want to delete the current row item?
                        </v-card-title>
                        <v-card-text>
                            <span>The deleted timeline row information is: </span>
                            <p></p>
                            <v-icon icon="mdi mdi-barcode"></v-icon>
                            <span> {{ " " + store.current_tl_row_item_of_gather().uuid }}</span>
                            <p></p>
                            <v-icon icon="mdi mdi-barcode"></v-icon>
                            <span> {{ " " + store.current_tl_row_item_of_gather().id }}</span>
                            <!-- <p></p>
                            <span> {{ " " + store.current_tl_key_item_of_gather().min }}</span>
                            <v-icon icon="mdi mdi-arrow-collapse-left"></v-icon>
                            <span> {{ " " + store.current_tl_key_item_of_gather().val }}</span>
                            <v-icon icon="mdi mdi-arrow-collapse-right"></v-icon>
                            <span> {{ " " + store.current_tl_key_item_of_gather().max }}</span>
                            <p></p> -->
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="is_del_tl_row = false">
                                Cancel
                            </v-btn>
                            <v-btn color="red" variant="text" @click="delete_tl_row">
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