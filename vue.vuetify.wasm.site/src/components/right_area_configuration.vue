<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
import { configs_of_platform } from '@/store/store-pinia'
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
        panel: ['Point light', 'Spot light', 'Ambient light', 'Directiona light', 'camera', 'others'],
        store_configs_define: configs_of_platform(),
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {
        all() {
            this.panel = ['Point light', 'Spot light', 'Ambient light', 'Directiona light', 'camera', 'others']
        },
        none() {
            this.panel = []
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
                    <v-expansion-panel class="fm_expansion_panel"
                        v-for="(light_config, index) in store_configs_define.config_of_lights" :key="index"
                        :value="light_config.name">
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
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.location.x"></v-text-field>
                            <v-text-field clearable label="Y of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.location.y"></v-text-field>
                            <v-text-field clearable label="Z of Location" prepend-inner-icon="mdi mdi-map-marker-down"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.location.z"></v-text-field>
                            <!-- 方位 -->
                            <v-text-field clearable label="X of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.direction.x"></v-text-field>
                            <v-text-field clearable label="Y of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.direction.y"></v-text-field>
                            <v-text-field clearable label="Z of Direction" prepend-inner-icon="mdi mdi-flag-triangle"
                                hide-details="true" clear-icon="mdi mdi-backspace" variant="solo" density="comfortable"
                                type="number" class="fm_v_text_field" v-model="light_config.direction.z"></v-text-field>
                            <!-- 颜色 -->
                            <ColorPicker format="rgb" shape="square" theme="black"
                                v-model:pureColor="light_config.diffuse_color.rgba" />
                            <span>Diffuse Color :{{ light_config.diffuse_color.rgba }}</span>
                            <ColorPicker format="rgb" shape="square" theme="black"
                                v-model:pureColor="light_config.specular_color.rgba" />
                            <span>Specular Color :{{ light_config.specular_color.rgba }}</span>
                            <ColorPicker format="rgb" shape="square" theme="black"
                                v-model:pureColor="light_config.ambient_color.rgba" />
                            <span>Ambient Color :{{ light_config.ambient_color.rgba }}</span>

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