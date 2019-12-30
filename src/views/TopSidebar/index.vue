<template>
    <div class="topBar">
        <div class="nav-title">{{NavName}}
            <div class="child-nav" v-if="Show">&nbsp;{{NavChildren}}</div>
        </div>
        <Rightbar></Rightbar>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    import {Watch} from "vue-property-decorator"
    import Rightbar from "@/views/RightSiderbar/index.vue";

    @Component({
        components: {
            Rightbar
        }
    })

    export default class TopBar extends Vue {
        navName: string | undefined
        navChild: string | undefined

        private data() {
            return {
                navName: this.$store.state.Nav,
                navChild: this.$store.state.ChildName,
            }
        }

        created() {
        }


        get NavName() {
            this.navName = this.$store.state.Nav
            return this.navName
        }

        get NavChildren() {
            this.navChild = this.$store.state.ChildName
            return this.navChild
        }
        get Show(){
            return this.$store.state.ChildNavState
        }

        @Watch('navName', {immediate: true, deep: true})
        onnavNameChange(val: string, oldvalue: string) {

        }

        @Watch('navChild', {immediate: true})
        onnavChildNav() {
        }

    }
</script>
<style lang="scss">
    .topBar {
        height: 50px;
        margin-left: 240px;
        overflow: hidden;
        position: relative;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

        .nav-title {
            height: 100%;
            position: absolute;
            margin: auto 0;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 50px;
        }
    }
    .child-nav{
        padding-left: 10px;
    }
</style>