<!--  -->
<script>
export default {
    inject: ['d_wasm_obj_res','d_nodes_gather', 'is_debug'],
    props: {
        view_left: {
            type: Boolean,
            required: true,
            default: false
        },
        view_right: {
            type: Boolean,
            required: true,
            default: false
        },
        left_area_w: {
            type: Number,
            required: true,
            default: 0
        },
        right_area_w: {
            type: Number,
            required: true,
            default: 0
        },
    },
    data: () => ({
        tab: null,
        loaded: false,
        loading: false,
        drawer: true,
        rail: true,
        is_lock_left: true,
        is_lock_w: 366,

        d_res_search_text: '',
        cards: [
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
        show: false,
    }),
    computed: {
        class_object_computed_left_area() {
            if (this.view_left) {
                this.drawer = true
                this.rail = true
                return "fm_left_flex_large"
            }
            else {
                this.drawer = false
                this.rail = false
                return "fm_left_flex"
            }
        },
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
        show_expand_Click(obj) {
            obj.is_expand = !obj.is_expand
        },
        add_wasm_item_to_scenes(obj, index) {
            if (this.is_debug) {
                if (Module) {
                    var uuid_str = uuidv4_UpperCase()
                    console.log(uuid_str)
                    /** */
                    let importFlage = this.get_importFlag(obj)
                    /** */
                    Module.cwrap('add_node_to_scenes', '', ['string', 'string', 'number', 'number'])(obj.url, uuid_str, obj.isTexRepeat, importFlage)
                    /** */
                    var wasm_node_insert = {}
                    this.d_index_increment += 1
                    wasm_node_insert.index_id = '#' + this.d_index_increment
                    wasm_node_insert.uuid = uuid_str
                    wasm_node_insert.type = obj.type
                    wasm_node_insert.isTexRepeat = obj.isTexRepeat
                    wasm_node_insert.img = obj.img
                    wasm_node_insert.url = obj.url
                    wasm_node_insert.node_type = obj.node_type
                    wasm_node_insert.node_class = '3D Node'
                    wasm_node_insert.name = obj.name
                    wasm_node_insert.quote = false
                    wasm_node_insert.referenceds = []
                    wasm_node_insert.selected = false
                    wasm_node_insert.creat_date = timestampToTime()
                    wasm_node_insert.icon = obj.icon
                    wasm_node_insert.describe = ''
                    /** 位置 */
                    var i_location = {}
                    i_location.x = 0
                    i_location.y = 0
                    i_location.z = 0
                    wasm_node_insert.location = i_location
                    /** 角度 */
                    var i_direction = {}
                    i_direction.x = 0
                    i_direction.y = 0
                    i_direction.z = 0
                    wasm_node_insert.direction = i_direction
                    /** 颜色 */
                    var i_fillcolor = {}
                    i_fillcolor.r = 0
                    i_fillcolor.g = 0
                    i_fillcolor.b = 0
                    i_fillcolor.a = 0
                    i_fillcolor.hexa = '#00000000'
                    wasm_node_insert.fillcolor = i_fillcolor
                    /** */
                    this.d_nodes_gather.push(wasm_node_insert)
                    console.log(this.d_nodes_gather)
                }
            }
        }
    },
    mounted() {

    }
}
</script>
<!--  -->
<template>
    <v-navigation-drawer :width="is_lock_w" expand-on-hover rail rail-width="48">
        <v-card height="100%">
            <div class="d-flex flex-row" :class="class_object_computed_left_area">
                <!--  -->
                <v-tabs v-model="tab" direction="vertical" color="primary" class="fm_left_tabs_vertical">
                    <v-tab value="option-1" max-width="48" width="48" height="38">
                        <v-icon>
                            mdi mdi-bank
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-2" max-width="48px" height="38">
                        <v-icon>
                            mdi mdi-lock
                        </v-icon>
                    </v-tab>
                    <v-tab value="option-3" max-width="48px" height="38">
                        <v-icon>
                            mdi mdi-access-point
                        </v-icon>
                    </v-tab>
                </v-tabs>
                <!--  -->
                <v-window v-model="tab" class="fm_window">
                    <v-window-item value="option-1" class="fm_window_item">
                        <v-card flat class="fm_left_area_cards">
                            <v-toolbar height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search ..."
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details class="fm_left_text_field"
                                    v-model="d_res_search_text"></v-text-field>
                            </v-toolbar>
                            <v-card-text class="fm_card_text_for_res_out">
                                <v-container class="fm_v_res_container">
                                    <v-card flat width="310" v-for="(res_node, index) in d_wasm_obj_res" :key="index"
                                        v-show="JSON.stringify(res_node.name).toLowerCase().includes(d_res_search_text)"
                                        class="fm_card_res">
                                        <v-img class='fm_card_title_img' :src="res_node.img" height="80" cover></v-img>
                                        <v-card-title class="fm_card_title_l">
                                            {{ res_node.name }}
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
                                            <v-btn class="fm_btn" icon="mdi mdi-checkbox-marked-circle-plus-outline"
                                                size="x-small" @click="add_wasm_item_to_scenes(res_node, index)">
                                            </v-btn>
                                            <v-btn class="fm_btn" size="x-small"
                                                :icon="show ? 'mdi mdi-chevron-double-up' : 'mdi mdi-chevron-double-down'"
                                                @click="show = !show"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-container>
                            </v-card-text>
                            <v-toolbar class="fm_toolbar" height="36">
                                <v-spacer></v-spacer> <v-icon size="0.9em">
                                    mdi mdi-bank
                                </v-icon><span class="fm_toolbar_span">{{ d_wasm_obj_res.length }} Resouse Items</span>
                            </v-toolbar>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-2" width="318">
                        <v-card flat class="fm_left_area_cards" width="318">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_left_text_field"></v-text-field>
                            </v-toolbar>
                            <v-card-text>
                                <v-container fluid>
                                    <v-row dense>
                                        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                                            <v-card>
                                                <v-img :src="card.src" class="align-end"
                                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px"
                                                    cover>
                                                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                                                </v-img>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>

                                                    <v-btn size="small" color="surface-variant" variant="text"
                                                        icon="mdi mdi-heart"></v-btn>

                                                    <v-btn size="small" color="surface-variant" variant="text"
                                                        icon="mdi mdi-bookmark"></v-btn>

                                                    <v-btn size="small" color="surface-variant" variant="text"
                                                        icon="mdi mdi-share-variant"></v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-3">
                        <v-card flat class="fm_left_area_cards">
                            <v-toolbar color="primary" height="36">
                                <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                    append-inner-icon="mdi mdi-magnify" single-line hide-details
                                    class="fm_left_text_field"></v-text-field>
                            </v-toolbar>
                            <v-card-text>
                                <p class="mb-0">
                                    Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum,
                                    porta
                                    a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                                    pretium
                                    quis, sem. Nam at tortor in tellus interdum sagittis.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
            </div>
        </v-card>
    </v-navigation-drawer>
</template>
