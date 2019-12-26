import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
let Rightbar = class Rightbar extends Vue {
    data() {
        return {
            input: '',
            show: false
        };
    }
    InputShow() {
        this.show = !this.show;
    }
    fullScreen() {
    }
};
Rightbar = __decorate([
    Component({})
], Rightbar);
export default Rightbar;
