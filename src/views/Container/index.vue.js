import { __decorate } from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import Document from "@/views/Container/Document/index.vue";
let Container = class Container extends Vue {
    data() {
        return {
            name: '容器组件'
        };
    }
};
Container = __decorate([
    Component({
        components: {
            Document
        }
    })
], Container);
export default Container;
