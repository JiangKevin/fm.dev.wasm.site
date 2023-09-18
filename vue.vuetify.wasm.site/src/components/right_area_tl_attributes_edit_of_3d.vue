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
    <!-- id -->
    <v-text-field clearable label="ID" prepend-inner-icon="mdi mdi-barcode" variant="solo" density="comfortable"
        class="fm_v_text_field" disabled hide-details="true"  type="number"
        v-model.number="store.current_tl_key_item_of_gather().attributes.location.x"></v-text-field>
</template>