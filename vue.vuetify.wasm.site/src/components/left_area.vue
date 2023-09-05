<!--  -->
<script>
import loadJs from '@/components/wasm_load.vue'
export default {
    props: {

    },
    data: () => ({
        tab: null,
        loaded: false,
        loading: false,
    }),
    computed: {

    },
    methods:
    {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
    mounted() {
        // loadJs('./static/js/hmi_editer_web.js').then(() => {
        //     // 加载成功，进行后续操作
        // })
        // loadJs('./static/js/pre.js').then(() => {
        //     // 加载成功，进行后续操作
        //     console.log("wasm_programe:\n")
        //     this.wasm_programe = Module
        //     console.log(this.wasm_programe)
        // })
    }
}
</script>
<!--  -->
<template>
    <v-card height="100%">

        <div class="d-flex flex-row fm_left_flex">
            <v-tabs v-model="tab" direction="vertical" color="primary" class="fm_left_tabs_vertical">
                <v-tab value="option-1" max-width="48" width="48">
                    <v-icon>
                        mdi mdi-account
                    </v-icon>
                </v-tab>
                <v-tab value="option-2" max-width="48px">
                    <v-icon>
                        mdi mdi-lock
                    </v-icon>
                </v-tab>
                <v-tab value="option-3" max-width="48px">
                    <v-icon>
                        mdi mdi-access-point
                    </v-icon>
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="option-1">
                    <v-card flat class="fm_left_area_cards">
                        <v-toolbar color="primary" height="36">
                            <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                append-inner-icon="mdi mdi-magnify" single-line hide-details
                                class="fm_left_text_field"></v-text-field>
                        </v-toolbar>
                        <v-card-text>
                            <p>
                                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat
                                lorem non metus. Sed a libero.
                            </p>


                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                    <v-card flat class="fm_left_area_cards">
                        <v-toolbar color="primary" height="36">
                            <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
                                append-inner-icon="mdi mdi-magnify" single-line hide-details
                                class="fm_left_text_field"></v-text-field>
                        </v-toolbar>
                        <v-card-text>
                            <p>
                                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
                                tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris
                                ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt
                                non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                            </p>

                            <p class="mb-0">
                                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget,
                                vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                                dictum sed, iaculis a, condimentum nec, nisi.
                            </p>
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
                                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta
                                a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem. Nam at tortor in tellus interdum sagittis.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>
