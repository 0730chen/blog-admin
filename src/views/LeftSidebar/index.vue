<template>
    <div class="leftBar">
        <div class="item" v-for="(item,index) in allMenu" :key="index" @click.self="HandleNavName(index)">
            {{item.title}}
            <div v-for="e in item.children" v-show="item.show" class="item-children" @click=HandleNavChild>
                {{e.title}}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    import {Watch} from 'vue-property-decorator'

    @Component({})
    export default class LeftBar extends Vue {
        allMenu: any

        // show: boolean | undefined;

        private data() {
            return {
                show: false,
                allMenu: [
                    {
                        title: '文档',
                        children: [
                            {
                                title: '用户文档'
                            },
                            {
                                title: '项目文档'
                            }
                        ],
                        show: true,
                    },
                    {
                        title: '指南',
                        children: [
                            {
                                title: '用户指南'
                            },
                            {
                                title: '项目指南'
                            }
                        ],
                        show: false,
                    },
                    {
                        title: '图标',
                        children: [
                            {
                                title: '图标收集'
                            }
                        ],
                        show: false,
                    },
                    {
                        title: '组件',
                    },
                    {
                        title: '表格',
                    },
                    {
                        title: '例子',
                    },
                    {
                        title: '数据库',
                    },
                    {
                        title: 'Icons',
                    },
                    {
                        title: 'Charts',
                    },
                    {
                        title: 'Example',
                    },
                    {
                        title: 'Tab',
                    },
                    {
                        title: 'Error Pages',
                    },
                    {
                        title: 'Error Log',
                    },
                    {
                        title: '我和你',
                    },
                    {
                        title: '心连心',


                    },
                    {
                        title: 'Theme',


                    },
                    {
                        title: 'PDF',

                    }
                ]
            }
        }

        @Watch('show', {immediate: true, deep: true})
        onShow() {
            console.log('show变了')
        }

        HandleNavName(e: number) {
            this.$store.commit('Set_Nav', this.allMenu[e].title)
            this.allMenu[e].show = !this.allMenu[e].show
            //判断是否存在子选项
            if(!this.allMenu[e].children){
                    console.log('不存在子项')
                this.$store.commit('Set_Nav_ChildState',false)
            }else{
                this.$store.commit('Set_Nav_ChildState',true)
            }
        }

        HandleNavChild(e: any) {
            console.log(e.target.innerText)
            this.$store.commit('Set_Nav_Child', e.target.innerText)
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
        overflow: hidden;
        overflow-y: auto;
        height: 100%;

        .item {
            color: rgb(191, 203, 217);
            line-height: 56px;
            font-size: 14px;
            list-style: none;
            cursor: pointer;
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

    .leftBar::-webkit-scrollbar {
        display: none;
    }

    .item-children {
        width: 100% !important;
        color: white;
        padding-left: 65px;
    }

    .item-children:hover {
        background-color: rgb(0, 21, 40);
    }
</style>