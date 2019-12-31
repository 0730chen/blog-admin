<template>
    <div>
        文档父组件
    </div>
</template>
<script lang="ts">
    import UserDoc from "@/views/Container/Document/UserDoc.vue";
    import Vue from 'vue'
    import Component from "vue-class-component"

    @Component({
        components: {
            UserDoc
        }
    })
    export default class Document extends Vue {

    }
</script>
<style lang="scss">

</style>