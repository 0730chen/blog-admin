<template>
    <div>
        <DocumentS v-if="show"/>
        <router-view/>
    </div>
</template>
<script lang="ts">
    import DocumentS from "@/views/Container/Document/Document.vue";
    import Vue from 'vue'
    import Component from "vue-class-component"
    import {Watch} from "vue-property-decorator";

    @Component({
        components: {
            DocumentS
        }
    })
    export default class Document extends Vue {
        show: boolean | undefined;

        data() {
            return {
                show: true
            }
        }

        @Watch('$route', {immediate: true, deep: true})
        onshow() {
            if(this.$route.name ==='document'){
                this.show = true
            }else{
                this.show = false
            }
        }
    }
</script>
<style lang="scss">

</style>