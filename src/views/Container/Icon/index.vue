<template>
    <div>
        <div class="iconList" v-for="(item,index) in allIcon" :key="index"
             @click="handleClipboard(generateElementIconCode(item.class),$event)">
            <el-tooltip :content=item.context placement="top">
                <i :class=item.class></i>>
            </el-tooltip>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    import clipboard from './clipboard'

    @Component({})
    export default class Icon extends Vue {

        data() {
            return {
                allIcon: [
                    {
                        class: 'el-icon-edit',
                        context: '编辑',
                    },
                    {
                        class: 'el-icon-share',
                        context: '分享',
                    },
                    {
                        class: 'el-icon-delete',
                        context: '删除'
                    },
                    {
                        class: 'el-icon-setting',
                        context: '设置',
                    },
                    {
                        class: 'el-icon-user',
                        context: '用户'
                    },
                    {
                        class: 'el-icon-download',
                        context: '下载'
                    },
                    {
                        class: 'el-icon-orange',
                        context: '橘子'
                    },
                    {
                        class: 'el-icon-coffee',
                        context: '咖啡'
                    },
                    {
                        class: 'el-icon-question',
                        context: '问题'
                    },
                    {
                        class:'el-icon-s-home',
                        context: '首页'
                    },
                    {
                        class:'el-icon-video-play',
                        context: '播放'
                    },
                    {
                        class: 'el-icon-folder-add',
                        context:'添加'
                    },
                    {
                        class: 'el-icon-table-lamp',
                        context: '台灯'
                    },


                ]
            }
        }

        generateElementIconCode(symbol: string) {
            return `<i class="el-icon-${symbol}"></i>`
        }

        handleClipboard(text: string, event: { target: string | Element | NodeListOf<Element> }) {
            clipboard(text, event)
        }

    }
</script>
<style lang="scss">
    .iconList {
        width: 100%;
        height: 100%;
        margin-left: 250px;

        i {
            margin: 20px;
            height: 85px;
            text-align: center;
            width: 100px;
            float: left;
            font-size: 30px;
            color: #24292e;
            cursor: pointer;
        }
    }
</style>