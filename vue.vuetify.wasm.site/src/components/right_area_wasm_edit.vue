<!--  -->
<script>
import { defineComponent, inject, watch, ref } from 'vue'
import { store } from '@/store/store'
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

export default {
    inject: ['is_debug'],
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
        store: store(),
        panel: ['basic', 'color', 'others'],
        is_del_wasm_item: false
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        all() {
            this.panel = ['basic', 'color', 'others']
        },
        none() {
            this.panel = []
        },
        // 更改名字
        change_name_for_wasm_item(uuid, name) {
            if (this.store.current_wasm_item_of_gather().tl_create) {
                this.store.update_current_tl_row_bind_for_wasm(uuid, name)
            }
        },
        change_location_for_wasm_item(wasm_item) {
            if (this.is_debug) {
                if (Module) {
                    if (wasm_item.location.x == '') {
                        wasm_item.location.x = 0
                    }
                    if (wasm_item.location.y == '') {
                        wasm_item.location.y = 0
                    }
                    if (wasm_item.location.z == '') {
                        wasm_item.location.z = 0
                    }
                    Module.cwrap("update_node_location", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.location.x, wasm_item.location.y, wasm_item.location.z);
                }
            }
        },
        change_direction_for_wasm_item(wasm_item) {
            if (this.is_debug) {
                if (Module) {
                    if (wasm_item.direction.x == '') {
                        wasm_item.direction.x = 0
                    }
                    if (wasm_item.direction.y == '') {
                        wasm_item.direction.y = 0
                    }
                    if (wasm_item.direction.z == '') {
                        wasm_item.direction.z = 0
                    }
                    Module.cwrap("update_node_direction", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.direction.x, wasm_item.direction.y, wasm_item.direction.z);
                }
            }
        },
        change_render_for_wasm_item(wasm_item) {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("switch_node_render_for_scenes", "", [
                        "string",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.switch_render);
                }
            }
        },
        change_render_model_material_for_wasm_item(wasm_item) {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("switch_node_render_model_material_for_scenes", "", [
                        "string",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.render_materials);
                }
            }
        },
        change_render_model_surface_for_wasm_item(wasm_item) {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("switch_node_render_model_face_for_scenes", "", [
                        "string",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.render_face);
                }
            }
        },
        change_render_model_wireframe_for_wasm_item(wasm_item) {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("switch_node_render_model_wireframe_for_scenes", "", [
                        "string",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.render_wireframe);
                }
            }
        },
        change_render_model_points_for_wasm_item(wasm_item) {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("switch_node_render_model_points_for_scenes", "", [
                        "string",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.render_points);
                }
            }
        },
        change_render_color_for_wasm_item(wasm_item) {
            this.store.change_color_for_bring_in(wasm_item.fillcolor);
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_select_node_color_for_scenes", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(wasm_item.uuid, this.store.d_wasm_select_edit_index, wasm_item.fillcolor.r, wasm_item.fillcolor.g, wasm_item.fillcolor.b, wasm_item.fillcolor.a);
                }
            }
        },
        // 
        delete_wasm_node(wasm_uuid) {
            this.is_del_wasm_item = false
            this.store.delete_wasm_current_item(wasm_uuid)
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
                        <v-expansion-panel-text class="fm_expansion_panel_text" v-if="store.d_wasm_select_edit_index != -1">
                            <!-- <wbr/> -->
                            <!--  -->
                            <v-text-field clearable label="UUID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="store.current_wasm_item_of_gather().uuid"></v-text-field>
                            <!--  -->
                            <v-text-field clearable label="Name" prepend-inner-icon="mdi mdi-qrcode" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" class="fm_v_text_field"
                                v-model="store.current_wasm_item_of_gather().name"
                                @update:modelValue="change_name_for_wasm_item(store.current_wasm_item_of_gather().uuid, store.current_wasm_item_of_gather().name)"></v-text-field>
                            <!-- 坐标 -->
                            <v-text-field clearable label="X of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                @update:focused="change_location_for_wasm_item(store.current_wasm_item_of_gather())"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model.number="store.current_wasm_item_of_gather().location.x"></v-text-field>
                            <v-text-field clearable label="Y of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                @update:focused="change_location_for_wasm_item(store.current_wasm_item_of_gather())"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model.number="store.current_wasm_item_of_gather().location.y"></v-text-field>
                            <v-text-field clearable label="Z of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                @update:focused="change_location_for_wasm_item(store.current_wasm_item_of_gather())"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model.number="store.current_wasm_item_of_gather().location.z"></v-text-field>
                            <!-- 角度 -->
                            <v-text-field clearable label="X of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                @update:focused="change_direction_for_wasm_item(store.current_wasm_item_of_gather())"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store.current_wasm_item_of_gather().direction.x"></v-text-field>
                            <v-text-field clearable label="Y of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                @update:focused="change_direction_for_wasm_item(store.current_wasm_item_of_gather())"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store.current_wasm_item_of_gather().direction.y"></v-text-field>
                            <v-text-field clearable label="Z of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                @update:focused="change_direction_for_wasm_item(store.current_wasm_item_of_gather())"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field"
                                v-model="store.current_wasm_item_of_gather().direction.z"></v-text-field>
                            <!--  -->
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="store.current_wasm_item_of_gather().fillcolor.rgba"
                                    @pureColorChange="change_render_color_for_wasm_item(store.current_wasm_item_of_gather())" />
                                <div class="span_div"> <span>Node Color :{{
                                    store.current_wasm_item_of_gather().fillcolor.rgba }}</span></div>
                            </div>
                            <!--  -->

                            <!-- Rendering mode -->
                            <v-switch v-model="store.current_wasm_item_of_gather().switch_render" :value=true
                                @update:modelValue="change_render_for_wasm_item(store.current_wasm_item_of_gather())"
                                :true-value=true hide-details="true" class="fm_switch" label="Rendering"
                                color="rindigo-darken-3" true-icon="mdi mdi-eye" false-icon="mdi mdi-eye-off"></v-switch>
                            <v-switch v-model="store.current_wasm_item_of_gather().render_materials" :value=true
                                :true-value=true hide-details="true" class="fm_switch" label="Rendering Materials"
                                @update:modelValue="change_render_model_material_for_wasm_item(store.current_wasm_item_of_gather())"
                                color="rindigo-darken-3" true-icon="mdi mdi-texture"
                                false-icon="mdi mdi-square-off-outline"></v-switch>

                            <v-switch v-model="store.current_wasm_item_of_gather().render_face" :value=true :true-value=true
                                @update:modelValue="change_render_model_surface_for_wasm_item(store.current_wasm_item_of_gather())"
                                hide-details="true" class="fm_switch" label="Rendering mode:Face" color="rindigo-darken-3"
                                true-icon="mdi mdi-cube" false-icon="mdi mdi-cube-off"></v-switch>
                            <v-switch v-model="store.current_wasm_item_of_gather().render_wireframe" :value=true
                                @update:modelValue="change_render_model_wireframe_for_wasm_item(store.current_wasm_item_of_gather())"
                                :true-value=true hide-details="true" class="fm_switch" label="Rendering mode:Wireframe"
                                color="rindigo-darken-3" true-icon="mdi mdi-cube-outline"
                                false-icon="mdi mdi-cube-off-outline"></v-switch>
                            <v-switch v-model="store.current_wasm_item_of_gather().render_points" :value=true
                                @update:modelValue="change_render_model_points_for_wasm_item(store.current_wasm_item_of_gather())"
                                :true-value=true hide-details="true" class="fm_switch" label="Rendering mode:Points"
                                color="rindigo-darken-3" true-icon="mdi mdi-blur" false-icon="mdi mdi-blur-off"></v-switch>

                            <!-- tl created -->
                            <v-switch v-model="store.current_wasm_item_of_gather().tl_create" :value=true :true-value=true
                                hide-details="true" class="fm_switch" label="Inclue prefabricated actions"
                                color="red-darken-3" readonly true-icon="mdi mdi-chart-timeline-variant-shimmer"></v-switch>
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
                        <v-expansion-panel-text class="fm_expansion_panel_text" v-if="store.d_wasm_select_edit_index != -1">
                            <p></p>
                            <!-- <wbr/> -->
                            <!--  -->

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
                        <v-expansion-panel-text class="fm_expansion_panel_text" v-if="store.d_wasm_select_edit_index != -1">
                            <!--  -->


                            <!-- Rendering mode -->
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar_bottom">
            <v-spacer></v-spacer>
            <div class="fm_toolbar_contain">
                <v-btn icon="mdi mdi-delete" class="fm_toolbar_btn" @click="is_del_wasm_item = true"
                    :class="{ 'fm_btn_prohibit': this.store.d_wasm_select_edit_index == -1 }"></v-btn>
                <v-dialog v-model="is_del_wasm_item" transition="dialog-bottom-transition" persistent
                    v-if="store.d_wasm_select_edit_index != -1" width="auto">
                    <v-card class="fm_dialog_card" v-if="store.d_wasm_select_edit_index != -1">
                        <v-card-title>
                            Are you sure you want to delete the current item?
                        </v-card-title>
                        <v-card-text>
                            <span>The deleted model object information is: </span>
                            <p></p>
                            <v-icon icon="mdi mdi-barcode"></v-icon>
                            <span> {{ " " + store.current_wasm_item_of_gather().uuid }}</span>
                            <p></p>
                            <v-icon icon="mdi mdi-qrcode"></v-icon>
                            <span> {{ " " + store.current_wasm_item_of_gather().name }}</span>
                            <div v-if="store.current_wasm_item_of_gather().tl_create">
                                <span>The corresponding prefabricated action information is: </span>
                                <p></p>
                                <v-icon icon="mdi mdi-barcode"></v-icon>
                                <span> {{ " " +
                                    store.current_tl_row_bind_for_wasm(store.current_wasm_item_of_gather().uuid).id
                                }}</span>
                                <p></p>
                                <v-icon icon="mdi mdi-barcode"></v-icon>
                                <span> {{ " " +
                                    store.current_tl_row_bind_for_wasm(store.current_wasm_item_of_gather().uuid).uuid
                                }}</span>
                                <p></p>
                                <v-icon icon="mdi mdi-qrcode"></v-icon>
                                <span> {{ " " +
                                    store.current_tl_row_bind_for_wasm(store.current_wasm_item_of_gather().uuid).title
                                }}</span>
                            </div>

                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="is_del_wasm_item = false">
                                Cancel
                            </v-btn>
                            <v-btn color="red" variant="text"
                                @click="delete_wasm_node(store.current_wasm_item_of_gather().uuid)">
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