<template>
    <div>
        <router-view/>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    import Upload from "@/views/Container/Component/Upload.vue";

    @Component({
        components: {
            Upload
        }
    })
    export default class Components extends Vue {
    }
</script>
<style lang="scss">

</style>