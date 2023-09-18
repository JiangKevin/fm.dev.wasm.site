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
        store: store(),
    }),
    setup() {

    },
    computed: {

    },
    methods:
    {

    },
    async mounted() {

    },
    async updated() {

    },
}
</script>
<!--  -->
<template>
    <!-- location  -->
    <v-text-field clearable label="X of Location" prepend-inner-icon="mdi mdi-map-marker-down" variant="solo"
        density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
        v-model.number="store.current_tl_key_item_of_gather().attributes.location.x"></v-text-field>
    <v-text-field clearable label="Y of Location" prepend-inner-icon="mdi mdi-map-marker-down" variant="solo"
        density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
        v-model.number="store.current_tl_key_item_of_gather().attributes.location.y"></v-text-field>
    <v-text-field clearable label="Z of Location" prepend-inner-icon="mdi mdi-map-marker-down" variant="solo"
        density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
        v-model.number="store.current_tl_key_item_of_gather().attributes.location.z"></v-text-field>
    <!-- direction  -->
    <v-text-field clearable label="X of Direction" prepend-inner-icon="mdi mdi-flag-triangle" variant="solo"
        density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
        v-model.number="store.current_tl_key_item_of_gather().attributes.direction.x"></v-text-field>
    <v-text-field clearable label="Y of Direction" prepend-inner-icon="mdi mdi-flag-triangle" variant="solo"
        density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
        v-model.number="store.current_tl_key_item_of_gather().attributes.direction.y"></v-text-field>
    <v-text-field clearable label="Z of Direction" prepend-inner-icon="mdi mdi-flag-triangle" variant="solo"
        density="comfortable" class="fm_v_text_field" hide-details="true" type="number"
        v-model.number="store.current_tl_key_item_of_gather().attributes.direction.z"></v-text-field>
    <!--  -->
    <div class="fm_color_div">
        <ColorPicker format="rgb" shape="square" theme="black"
            v-model:pureColor="store.current_tl_key_item_of_gather().attributes.fillcolor.rgba"
            @pureColorChange="store.change_color_for_bring_in(store.current_tl_key_item_of_gather().attributes.fillcolor)" />
        <div class="span_div"> <span>Node Color :{{
            store.current_tl_key_item_of_gather().attributes.fillcolor.rgba }}</span></div>
    </div>
</template>