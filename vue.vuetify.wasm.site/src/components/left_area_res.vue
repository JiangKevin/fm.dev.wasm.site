<!--  -->
<script>
import { defineComponent, inject, watch } from 'vue'
import { store } from '@/store/store'
export default {
    inject: ['is_debug'],
    props: {

    },
    data: () => ({
        loaded: false,
        loading: false,
        d_res_search_text: '',
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
        get_importFlag(obj) {
            /**通过配置的属性，进行按位或运算，得到import flag */
            var importFlage = 0
            for (var i = 0; i < obj.importFlags.length; i++) {
                /** */
                if (obj.importFlags[i] == 'aiProcess_CalcTangentSpace') {
                    importFlage = importFlage | 0x1
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_JoinIdenticalVertices') {
                    importFlage = importFlage | 0x2
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_MakeLeftHanded') {
                    importFlage = importFlage | 0x4
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_Triangulate') {
                    importFlage = importFlage | 0x8
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_RemoveComponent') {
                    importFlage = importFlage | 0x10
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_GenNormals') {
                    importFlage = importFlage | 0x20
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_GenSmoothNormals') {
                    importFlage = importFlage | 0x40
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_SplitLargeMeshes') {
                    importFlage = importFlage | 0x80
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_PreTransformVertices') {
                    importFlage = importFlage | 0x100
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_LimitBoneWeights') {
                    importFlage = importFlage | 0x200
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_ValidateDataStructure') {
                    importFlage = importFlage | 0x400
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_ImproveCacheLocality') {
                    importFlage = importFlage | 0x800
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_RemoveRedundantMaterials') {
                    importFlage = importFlage | 0x1000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_FixInfacingNormals') {
                    importFlage = importFlage | 0x2000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_PopulateArmatureData') {
                    importFlage = importFlage | 0x4000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_SortByPType') {
                    importFlage = importFlage | 0x8000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_FindDegenerates') {
                    importFlage = importFlage | 0x10000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_FindInvalidData') {
                    importFlage = importFlage | 0x20000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_GenUVCoords') {
                    importFlage = importFlage | 0x40000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_TransformUVCoords') {
                    importFlage = importFlage | 0x80000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_FindInstances') {
                    importFlage = importFlage | 0x100000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_OptimizeMeshes') {
                    importFlage = importFlage | 0x200000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_OptimizeGraph') {
                    importFlage = importFlage | 0x400000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_FlipUVs') {
                    importFlage = importFlage | 0x800000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_FlipWindingOrder') {
                    importFlage = importFlage | 0x1000000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_SplitByBoneCount') {
                    importFlage = importFlage | 0x2000000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_Debone') {
                    importFlage = importFlage | 0x4000000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_GlobalScale') {
                    importFlage = importFlage | 0x8000000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_EmbedTextures') {
                    importFlage = importFlage | 0x10000000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_ForceGenNormals') {
                    importFlage = importFlage | 0x20000000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_DropNormals') {
                    importFlage = importFlage | 0x40000000
                }
                /** */
                if (obj.importFlags[i] == 'aiProcess_GenBoundingBoxes') {
                    importFlage = importFlage | 0x80000000
                }
            }

            return importFlage
        },
        async add_wasm_item_to_scenes(obj, index) {
            var uuid_str = uuidv4_UpperCase()
            if (this.is_debug) {
                if (Module) {
                    console.log(uuid_str)
                    /** */
                    let importFlage = this.get_importFlag(obj)
                    /** */
                    Module.cwrap('add_node_to_scenes', '', ['string', 'string', 'number', 'number'])(obj.url, uuid_str, obj.isTexRepeat, importFlage)

                }
            }
            /** */
            this.store.increment_of_wasm_nodes_gather(uuid_str, obj)
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
                v-model="d_res_search_text"></v-text-field>
        </v-toolbar>
        <v-card-text class="fm_card_text_for_left_out">
            <v-container class="fm_v_left_container">
                <v-card flat width="310" v-for="(res_node, index) in store.d_wasm_res" :key="index"
                    v-show="JSON.stringify(res_node.name).toLowerCase().includes(d_res_search_text) && index < d_show_count"
                    class="fm_card_res">

                    <v-card-title class="fm_card_title_l">
                        <v-img :src="res_node.img" height="80" cover></v-img>
                        <span>{{ res_node.name }}</span>
                    </v-card-title>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text class="fm_card_text">
                                {{ '#' + index + ' ' + res_node.type + ' ' + res_node.creat_date }}
                                <p></p>
                                {{ res_node.uuid + ' / ' + res_node.node_type }}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                    <v-card-actions class="fm_card_actions">
                        <v-spacer></v-spacer>
                        <v-btn class="fm_btn" icon="mdi mdi-checkbox-marked-circle-plus-outline" size="x-small"
                            @click="add_wasm_item_to_scenes(res_node, index)">
                        </v-btn>
                        <v-btn class="fm_btn" size="x-small"
                            :icon="show ? 'mdi mdi-chevron-double-up' : 'mdi mdi-chevron-double-down'"
                            @click="show = !show"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-card-text>
        <v-toolbar class="fm_toolbar_bottom">
            <v-spacer></v-spacer> <v-icon size="0.9em">
                mdi mdi-bank
            </v-icon><span class="fm_toolbar_span">{{ store.d_wasm_res.length }} Resouse Items</span>
        </v-toolbar>
    </v-card>
</template>