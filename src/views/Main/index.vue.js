import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
import TopBar from "@/views/TopSidebar/index.vue";
import LeftBar from '@/views/LeftSidebar/index.vue';
import Container from '@/views/Container/index.vue';
let Main = class Main extends Vue {
    data() {
        return {
            message: '主界面'
        };
    }
    created() {
    }
};
Main = __decorate([
    Component({
        components: {
            TopBar,
            LeftBar,
            Container
        }
    })
], Main);
export default Main;
