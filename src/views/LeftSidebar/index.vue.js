import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
import { Watch } from 'vue-property-decorator';
let LeftBar = class LeftBar extends Vue {
    // show: boolean | undefined;
    data() {
        return {
            allMenu: [
                {
                    title: '全部文章',
                    href: '/main/document',
                    children: [
                        {
                            title: '用户文档',
                            href: '/main/document/userdoc'
                        },
                        {
                            title: '项目文档',
                            href: '/main/document/demo'
                        }
                    ],
                    show: true,
                },
                {
                    title: '指南',
                    href: '/main/guide',
                    children: [
                        {
                            title: '用户指南',
                            href: '/main/document/userdoc'
                        },
                        {
                            title: '项目指南',
                            href: '/main/document/userdoc'
                        }
                    ],
                    show: false,
                },
                {
                    title: '图标',
                    href: '/main/icon',
                    show: false,
                },
                {
                    title: '组件',
                    href: '/main/component',
                    show: false
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
                    href: '/main/database',
                },
                {
                    title: 'Charts',
                    href: '/main/charts',
                },
                {
                    title: 'Tab',
                    href: '/main/tab',
                },
                {
                    title: 'Error Pages',
                    href: '/main/errorpage',
                },
                {
                    title: 'Error Log',
                    href: '/main/errorlog',
                },
                {
                    title: '动画',
                    href: '/main/animation',
                },
                {
                    title: 'Webpack',
                    href: '/main/webpack',
                },
                {
                    title: 'Theme',
                    href: '/main/theme',
                },
                {
                    title: 'PDF',
                    href: '/main/pdf',
                }
            ]
        };
    }
    onShow() {
        //观察show的变化
    }
    HandleNavName(e) {
        this.$store.commit('Set_Nav', this.allMenu[e].title);
        this.allMenu[e].show = !this.allMenu[e].show;
        //判断是否存在子选项
        if (!this.allMenu[e].children) {
            this.$store.commit('Set_Nav_ChildState', false);
        }
        else {
            this.$store.commit('Set_Nav_ChildState', true);
        }
    }
    HandleNavChild(e) {
        this.$store.commit('Set_Nav_Child', e.target.innerText);
    }
};
__decorate([
    Watch('show', { immediate: true, deep: true })
], LeftBar.prototype, "onShow", null);
LeftBar = __decorate([
    Component({})
], LeftBar);
export default LeftBar;
