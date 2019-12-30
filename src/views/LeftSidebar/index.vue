<template>
    <div class="leftBar">
        <div class="item" v-for="(item,index) in allMenu" :key="index" @click.self="HandleNavName(index)">
            <router-link :to=item.href>{{item.title}}</router-link>
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
                        href: '/main/document',
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
                        href: '/main/guide',
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
                        href: '/main/icon',
                        children: [
                            {
                                title: '图标收集'
                            }
                        ],
                        show: false,
                    },
                    {
                        title: '组件',
                        href: '/main/component',
                    },
                    {
                        title: '表格',
                        href: '/main/table',
                    },
                    {
                        title: '例子',
                        href: '/main/example',
                    },
                    {
                        title: '数据库',
                        href: '/main/guide',
                    },
                    {
                        title: 'Icons',
                        href: '/main/guide',
                    },
                    {
                        title: 'Charts',
                        href: '/main/guide',
                    },
                    {
                        title: 'Example',
                        href: '/main/guide',
                    },
                    {
                        title: 'Tab',
                        href: '/main/guide',
                    },
                    {
                        title: 'Error Pages',
                        href: '/main/guide',
                    },
                    {
                        title: 'Error Log',
                        href: '/main/guide',
                    },
                    {
                        title: '我和你',
                        href: '/main/guide',
                    },
                    {
                        title: '心连心',
                        href: '/main/guide',


                    },
                    {
                        title: 'Theme',
                        href: '/main/guide',


                    },
                    {
                        title: 'PDF',
                        href: '/main/guide',

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
            if (!this.allMenu[e].children) {
                console.log('不存在子项')
                this.$store.commit('Set_Nav_ChildState', false)
            } else {
                this.$store.commit('Set_Nav_ChildState', true)
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