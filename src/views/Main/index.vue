<template>
    <div class="main">
        <TopBar/>
        <LeftBar/>
    </div>
</template>
<script lang="ts">

    import Vue from 'vue'
    import Component from "vue-class-component"
    import TopBar from "@/views/TopSidebar/index.vue"
    import LeftBar from '@/views/LeftSidebar/index.vue'

    @Component({
        components:{
            TopBar,
            LeftBar
        }
    })
    export default class Main extends Vue {
        private data() {
            return {
                message: '主界面'
            }
        }
        created(){}

    }
</script>
<style lang="scss" scoped>

</style>