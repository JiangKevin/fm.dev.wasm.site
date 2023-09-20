<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
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
        show: false,
        panel: ['Point light'],
        store: store(),
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        all() {
            this.panel = ['Point light', 'Spot light', 'Ambient light', 'Directiona light', 'camera', 'keyboard', 'others']
        },
        none() {
            this.panel = []
        },
        change_color_attributes(color_Various) {
            this.store.change_color_for_bring_in(color_Various);

        },
        change_location_for_light_item(light_item, index) {
            if (this.is_debug) {
                if (Module) {
                    if (light_item.location.x == '') {
                        light_item.location.x = 0
                    }
                    if (light_item.location.y == '') {
                        light_item.location.y = 0
                    }
                    if (light_item.location.z == '') {
                        light_item.location.z = 0
                    }
                    Module.cwrap("update_light_location", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.location.x, light_item.location.y, light_item.location.z);
                }
            }
        },
        change_direction_for_light_item(light_item, index) {
            if (this.is_debug) {
                if (Module) {
                    if (light_item.direction.x == '') {
                        light_item.direction.x = 0
                    }
                    if (light_item.direction.y == '') {
                        light_item.direction.y = 0
                    }
                    if (light_item.direction.z == '') {
                        light_item.direction.z = 0
                    }
                    Module.cwrap("update_light_direction", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.direction.x, light_item.direction.y, light_item.direction.z);
                }
            }
        },
        change_attenuation_for_light_item(light_item, index) {
            if (this.is_debug) {
                if (Module) {
                    if (light_item.constant == '') {
                        light_item.constant = 0
                    }
                    if (light_item.linear == '') {
                        light_item.linear = 0
                    }
                    if (light_item.quadratic == '') {
                        light_item.quadratic = 0
                    }
                    Module.cwrap("update_light_attenuation", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.constant, light_item.linear, light_item.quadratic);
                }
            }
        },
        change_spot_conical_for_light_item(light_item, index) {
            if (this.is_debug) {
                if (Module) {
                    if (light_item.spotCutOff == '') {
                        light_item.spotCutOff = 0
                    }
                    if (light_item.exponent == '') {
                        light_item.exponent = 0
                    }
                    Module.cwrap("update_light_spot_conical", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.spotCutOff, light_item.exponent,);
                }
            }
        },
        change_ambient_surface_for_light_item(light_item, index) {
            if (this.is_debug) {
                if (Module) {
                    if (light_item.surface_w == '') {
                        light_item.surface_w = 0
                    }
                    if (light_item.surface_h == '') {
                        light_item.surface_h = 0
                    }
                    Module.cwrap("update_light_ambient_surface", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.surface_w, light_item.surface_h,);
                }
            }
        },
        change_use_for_light_item(light_item, index) {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_light_use", "", [
                        "string",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.enable,);
                }
            }
        },
        change_legend_for_light_item(light_item, index) {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_light_legend", "", [
                        "string",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.legend,);
                }
            }
        },
        change_diffuse_color_for_light_item(light_item, index) {
            this.change_color_attributes(light_item.diffuse_color)
            // 
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_light_diffuse_color", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.diffuse_color.r, light_item.diffuse_color.g, light_item.diffuse_color.b, light_item.diffuse_color.a);
                }
            }
        },
        change_specular_color_for_light_item(light_item, index) {
            this.change_color_attributes(light_item.specular_color)
            // 
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_light_specular_color", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.specular_color.r, light_item.specular_color.g, light_item.specular_color.b, light_item.specular_color.a);
                }
            }
        },
        change_ambient_color_for_light_item(light_item, index) {
            this.change_color_attributes(light_item.ambient_color)
            // 
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_light_ambient_color", "", [
                        "string",
                        "number",
                        "number",
                        "number",
                        "number",
                        "number",
                    ])(light_item.uuid, index, light_item.ambient_color.r, light_item.ambient_color.g, light_item.ambient_color.b, light_item.ambient_color.a);
                }
            }
        },
        change_mouseMiddleButton_for_config_camera() {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_camera_mouseMiddleButton", "", [
                        "number"
                    ])(this.store.config_of_camera.mouseMiddleButton);
                }
            }
        },
        change_mouseInput_for_config_camera() {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_camera_mouseInput", "", [
                        "number"
                    ])(this.store.config_of_camera.mouseInput);
                }
            }
        },
        change_inertia_for_config_camera() {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_camera_inertia", "", [
                        "number"
                    ])(this.store.config_of_camera.inertia);
                }
            }
        },
        change_debug_show_for_config_others() {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_debug_info_show", "", [
                        "number"
                    ])(this.store.config_of_others.is_debug);
                }
            }
        },
        change_native_ui_show_for_config_others() {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_switch_native_ui_show", "", [
                        "number"
                    ])(this.store.config_of_others.is_native_ui);
                }
            }
        },
        change_lua_support_for_config_others() {
            if (this.is_debug) {
                if (Module) {
                    Module.cwrap("update_switch_lua", "", [
                        "number"
                    ])(this.store.config_of_others.is_lua);
                }
            }
        },
        change_keyboard_kes_for_config() { },
        transform_code_to_key(code) {
            return String.fromCharCode(code)
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
                    <!-- panel lights -->
                    <v-expansion-panel class="fm_expansion_panel" v-for="(light_config, index) in store.config_of_lights"
                        :key="index" :value="light_config.name">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon :icon=light_config.icon></v-icon><span>{{ light_config.name }}</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                            <!-- uuid -->
                            <v-text-field clearable label="UUID" prepend-inner-icon="mdi mdi-barcode" variant="solo"
                                density="comfortable" class="fm_v_text_field" disabled hide-details="true"
                                v-model="light_config.uuid"></v-text-field>
                            <!-- type -->
                            <v-text-field clearable label="Type" prepend-inner-icon="mdi mdi-qrcode" disabled
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                class="fm_v_text_field" v-model="light_config.type"></v-text-field>

                            <!-- 坐标 -->
                            <v-text-field clearable label="X of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                @update:focused="change_location_for_light_item(light_config, index)" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.location.x"></v-text-field>
                            <v-text-field clearable label="Y of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                @update:focused="change_location_for_light_item(light_config, index)" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.location.y"></v-text-field>
                            <v-text-field clearable label="Z of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                @update:focused="change_location_for_light_item(light_config, index)" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.location.z"></v-text-field>
                            <!-- 方位 -->
                            <v-text-field clearable label="X of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                @update:focused="change_direction_for_light_item(light_config, index)" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.direction.x"></v-text-field>
                            <v-text-field clearable label="Y of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                @update:focused="change_direction_for_light_item(light_config, index)" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.direction.y"></v-text-field>
                            <v-text-field clearable label="Z of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                @update:focused="change_direction_for_light_item(light_config, index)" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.direction.z"></v-text-field>
                            <!-- 衰减，平行光源不具备的属性 -->
                            <v-text-field clearable label="Constant" prepend-inner-icon="mdi mdi-flash" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                @update:focused="change_attenuation_for_light_item(light_config, index)"
                                class="fm_v_text_field" v-model="light_config.constant"
                                v-if="light_config.type != 'DIRECTIONA'"></v-text-field>
                            <v-text-field clearable label="Linear" prepend-inner-icon="mdi mdi-flash" hide-details="true"
                                @update:focused="change_attenuation_for_light_item(light_config, index)"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.linear"
                                v-if="light_config.type != 'DIRECTIONA'"></v-text-field>
                            <v-text-field clearable label="Quadratic" prepend-inner-icon="mdi mdi-flash" hide-details="true"
                                @update:focused="change_attenuation_for_light_item(light_config, index)"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field" v-model="light_config.quadratic"
                                v-if="light_config.type != 'DIRECTIONA'"></v-text-field>
                            <!-- 只有运动光源具备的特性 -->
                            <v-text-field clearable label="SpotCutOff" prepend-inner-icon="mdi mdi-angle-obtuse"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                @update:focused="change_spot_conical_for_light_item(light_config, index)" type="number"
                                class="fm_v_text_field" v-model="light_config.spotCutOff"
                                v-if="light_config.type == 'SPOT'"></v-text-field>
                            <v-text-field clearable label="Exponent" prepend-inner-icon="mdi mdi-lightning-bolt-outline"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                @update:focused="change_spot_conical_for_light_item(light_config, index)" type="number"
                                class="fm_v_text_field" v-model="light_config.exponent"
                                v-if="light_config.type == 'SPOT'"></v-text-field>
                            <!-- 只有环境光源具备的特性 -->
                            <v-text-field clearable label="Surface_w" prepend-inner-icon="mdi mdi-arrow-expand-horizontal"
                                @update:focused="change_ambient_surface_for_light_item(light_config, index)"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.surface_w"
                                v-if="light_config.type == 'AMBIENT'"></v-text-field>
                            <v-text-field clearable label="Surface_h" prepend-inner-icon="mdi mdi-arrow-expand-vertical"
                                @update:focused="change_ambient_surface_for_light_item(light_config, index)"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.surface_h"
                                v-if="light_config.type == 'AMBIENT'"></v-text-field>
                            <!-- 颜色 -->
                            <!-- <v-divider :thickness="1" class="border-opacity-75" color="#511acb"></v-divider> -->
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="light_config.diffuse_color.rgba"
                                    @pureColorChange="change_diffuse_color_for_light_item(light_config, index)" />
                                <div class="span_div"> <span>Diffuse Color :{{ light_config.diffuse_color.rgba }}</span>
                                </div>
                            </div>
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="light_config.specular_color.rgba"
                                    @pureColorChange="change_specular_color_for_light_item(light_config, index)" />
                                <div class="span_div"> <span>Specular Color :{{ light_config.specular_color.rgba }}</span>
                                </div>
                            </div>
                            <div class="fm_color_div">
                                <ColorPicker format="rgb" shape="square" theme="black"
                                    v-model:pureColor="light_config.ambient_color.rgba"
                                    @pureColorChange="change_ambient_color_for_light_item(light_config, index)" />
                                <div class="span_div">
                                    <span>Ambient Color :{{ light_config.ambient_color.rgba }}</span>
                                </div>
                            </div>
                            <!-- 启用与否 -->
                            <!-- <v-divider :thickness="1" class="border-opacity-75" color="#511acb"></v-divider> -->
                            <v-switch v-model="light_config.enable" :value=true :true-value=true hide-details="true"
                                @update:modelValue="change_use_for_light_item(light_config, index)" class="fm_switch"
                                label="Enable light" color="red-darken-3" true-icon="mdi mdi-white-balance-sunny"
                                false-icon="mdi mdi-weather-sunny-off"></v-switch>
                            <v-switch v-model="light_config.legend" :value=true :true-value=true hide-details="true"
                                @update:modelValue="change_legend_for_light_item(light_config, index)" class="fm_switch"
                                label="Legend show" color="red-darken-3" true-icon="mdi mdi-pin"
                                false-icon="mdi mdi-pin-off"></v-switch>
                        </v-expansion-panel-text>
                    </v-expansion-panel>



                    <!-- panel camera -->
                    <v-expansion-panel value="camera" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-cctv"></v-icon><span>Camera</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                            <!-- inertia -->
                            <v-switch v-model="store.config_of_camera.inertia" :value=true :true-value=true
                                hide-details="true" @update:modelValue="change_inertia_for_config_camera()"
                                class="fm_switch" label="Enable inertia" color="red-darken-3"
                                true-icon="mdi mdi-star-shooting" false-icon="mdi mdi-star-settings"></v-switch>
                            <!-- mouseInput -->
                            <v-switch v-model="store.config_of_camera.mouseInput" :value=true :true-value=true
                                hide-details="true" @update:modelValue="change_mouseInput_for_config_camera()"
                                class="fm_switch" label="Enable mouseInput" color="red-darken-3" true-icon="mdi mdi-mouse"
                                false-icon="mdi mdi-mouse-variant-off"></v-switch>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- panel keyboard -->
                    <v-expansion-panel value="keyboard" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-keyboard"></v-icon><span>Keyboard key settings</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                            <!-- key left -->
                            <v-text-field clearable label="Left key" prepend-inner-icon="mdi mdi-arrow-left-thin"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.i_left_key)"
                                v-model="store.config_of_others.drive_keys.i_left_key"></v-text-field>
                            <!-- key right -->
                            <v-text-field clearable label="Right key" prepend-inner-icon="mdi mdi-arrow-right-thin"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.i_right_key)"
                                v-model="store.config_of_others.drive_keys.i_right_key"></v-text-field>
                            <!-- key forward -->
                            <v-text-field clearable label="Forward key" prepend-inner-icon="mdi mdi-arrow-up-thin"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.i_forward_key)"
                                v-model="store.config_of_others.drive_keys.i_forward_key"></v-text-field>
                            <!-- key backward -->
                            <v-text-field clearable label="Backward key" prepend-inner-icon="mdi mdi-arrow-down-thin"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.i_backward_key)"
                                v-model="store.config_of_others.drive_keys.i_backward_key"></v-text-field>
                            <!-- key turn left -->
                            <v-text-field clearable label="Backward key" prepend-inner-icon="mdi mdi-arrow-left-top"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.t_left_key)"
                                v-model="store.config_of_others.drive_keys.t_left_key"></v-text-field>
                            <!-- key turn right -->
                            <v-text-field clearable label="Backward key" prepend-inner-icon="mdi mdi-arrow-right-top"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.t_right_key)"
                                v-model="store.config_of_others.drive_keys.t_right_key"></v-text-field>
                            <!-- key turn up -->
                            <v-text-field clearable label="Backward key" prepend-inner-icon="mdi mdi-transfer-up"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.z_up_key)"
                                v-model="store.config_of_others.drive_keys.z_up_key"></v-text-field>
                            <!-- key turn down -->
                            <v-text-field clearable label="Backward key" prepend-inner-icon="mdi mdi-transfer-down"
                                @update:focused="change_keyboard_kes_for_config()" hide-details="true"
                                clear-icon="mdi mdi-backspace" variant="solo" density="comfortable" type="number"
                                class="fm_v_text_field"
                                :suffix="transform_code_to_key(store.config_of_others.drive_keys.z_down_key)"
                                v-model="store.config_of_others.drive_keys.z_down_key"></v-text-field>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- panel other -->
                    <v-expansion-panel value="others" class="fm_expansion_panel">
                        <v-expansion-panel-title class="fm_expansion_panel_title">
                            <v-icon icon="mdi mdi-cogs"></v-icon><span>Others</span>
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''"
                                    :icon="expanded ? 'mdi mdi-chevron-triple-down' : 'mdi mdi-chevron-triple-up'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="fm_expansion_panel_text">
                            <v-switch v-model="store.config_of_others.is_debug" :value=true :true-value=true
                                hide-details="true" @update:modelValue="change_debug_show_for_config_others()"
                                class="fm_switch" label="Show debug information" color="red-darken-3"
                                true-icon="mdi mdi-bug-play-outline" false-icon="mdi mdi-bug-pause-outline"></v-switch>
                            <v-switch v-model="store.config_of_others.is_native_ui" :value=true :true-value=true
                                hide-details="true" @update:modelValue="change_native_ui_show_for_config_others()"
                                class="fm_switch" label="Show native ui" color="red-darken-3" true-icon="mdi mdi-eye-plus"
                                false-icon="mdi mdi-eye-off"></v-switch>
                            <v-switch v-model="store.config_of_others.is_lua" :value=true :true-value=true
                                hide-details="true" @update:modelValue="change_lua_support_for_config_others()"
                                class="fm_switch" label="Lua support" color="red-darken-3" true-icon="mdi mdi-language-lua"
                                false-icon="mdi mdi-circle-off-outline"></v-switch>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <!-- expansion-panels end -->
                <!-- container end -->
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar_bottom">
            <v-spacer></v-spacer>
            <div class="fm_toolbar_contain">
                <v-btn icon="mdi mdi-chevron-triple-down" class="fm_toolbar_btn" @click="all"></v-btn>
                <v-btn icon="mdi mdi-chevron-triple-up" class="fm_toolbar_btn" @click="none"></v-btn>
            </div>
        </v-toolbar>
    </v-card>
</template>