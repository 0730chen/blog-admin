<template>
    <div class="main">
        <TopBar/>
        <LeftBar/>
        <Container/>
    </div>
</template>
<script lang="ts">

    import Vue from 'vue'
    import Component from "vue-class-component"
    import TopBar from "@/views/TopSidebar/index.vue"
    import LeftBar from '@/views/LeftSidebar/index.vue'
    import Container from '@/views/Container/index.vue'

    @Component({
        components: {
            TopBar,
            LeftBar,
            Container
        }
    })
    export default class Main extends Vue {
        private data() {
            return {
                message: '主界面'
            }
        }

        created() {
        }

    }
</script>
<style lang="scss" scoped>

</style>