import { __decorate } from "tslib";
class {
};
"leftBar";
"HandleNavName" >
    class {
    };
"item";
v - ;
for ( = "(item,index) in allMenu"; ; )
    : key = "index" >
        {};
{
    item.title;
}
/div>
    < /div>
    < /template>
    < script;
lang = "ts" >
;
import Vue from 'vue';
import Component from "vue-class-component";
let LeftBar = class LeftBar extends Vue {
    data() {
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
        };
    }
    HandleNavName(e) {
        this.$store.commit('Set_Nav', e.target.innerText);
    }
};
LeftBar = __decorate([
    Component({})
], LeftBar);
export default LeftBar;
/script>
    < style;
lang = "scss";
scoped >
        .leftBar;
{
    position: fixed;
    top: 0;
    left: 0;
    width: 240;
    px;
    background - color;
    rgb(48, 65, 86);
    item;
    {
        color: rgb(191, 203, 217);
        height: 56;
        px;
        line - height;
        56;
        px;
        font - size;
        14;
        px;
        padding: 0;
        20;
        px;
        list - style;
        none;
        cursor: pointer;
        position: relative;
        -webkit - transition;
        border - color;
        .3;
        s, background - color;
        .3;
        s, color;
        .3;
        s;
        transition: border - color;
        .3;
        s, background - color;
        .3;
        s, color;
        .3;
        s;
        -webkit - box - sizing;
        border - box;
        box - sizing;
        border - box;
        white - space;
        nowrap;
    }
    item: hover;
    {
        background - color;
        263445;
    }
}
/style>;
