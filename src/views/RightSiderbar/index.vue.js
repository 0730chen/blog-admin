import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
import screenfull from "screenfull";
let Rightbar = class Rightbar extends Vue {
    data() {
        return {
            input: '',
            show: false,
            isFullscreen: false
        };
    }
    InputShow() {
        this.show = !this.show;
    }
    fullScreen() {
        if (!screenfull.isEnabled) {
            this.$message({
                message: 'warning',
                type: 'warning'
            });
            return false;
        }
        screenfull.toggle();
        this.$message({
            message: '打开全屏',
            type: 'success'
        });
    }
};
Rightbar = __decorate([
    Component({})
], Rightbar);
export default Rightbar;
