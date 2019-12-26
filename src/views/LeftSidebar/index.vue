<template>
    <div class="leftBar" @click.stop="HandleNavName">
        <div class="item" v-for="(item,index) in allMenu" :key="index">
            {{item.title}}
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"

    @Component({})
    export default class LeftBar extends Vue {
        private data() {
            return {
                allMenu: [
                    {
                        title: '文档'
                    },
                    {
                        title: '指南'
                    },
                    {
                        title: '图标'
                    },
                    {
                        title: '组件'
                    },
                    {
                        title: '表格'
                    },
                    {
                        title: '例子'
                    },
                    {
                        title: '数据库',
                    }
                ]
            }
        }

        HandleNavName(e: any) {
            this.$store.commit('Set_Nav', e.target.innerText)
        }

    }
</script>
<style lang="scss" scoped>
    .leftBar {
        position: fixed;
        top: 0;
        left: 0;
        width: 240px;
        background-color: rgb(48, 65, 86);
        .item {
            color: rgb(191, 203, 217);
            height: 56px;
            line-height: 56px;
            font-size: 14px;
            padding: 0 20px;
            list-style: none;
            cursor: pointer;
            position: relative;
            -webkit-transition: border-color .3s, background-color .3s, color .3s;
            transition: border-color .3s, background-color .3s, color .3s;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            white-space: nowrap;
        }

        .item:hover {
            background-color: #263445;
        }
    }
</style>