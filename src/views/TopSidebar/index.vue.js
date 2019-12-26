import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Rightbar from "@/views/RightSiderbar/index.vue";
let TopBar = class TopBar extends Vue {
    data() {
        return {
            navName: this.$store.state.Nav
        };
    }
    created() {
    }
    NameBar() {
        return this.$store.state.Nav;
    }
    get NavName() {
        this.navName = this.$store.state.Nav;
        return this.navName;
    }
    onnavNameChange(val, oldvalue) {
    }
};
__decorate([
    Watch('navName', { immediate: true, deep: true })
], TopBar.prototype, "onnavNameChange", null);
TopBar = __decorate([
    Component({
        components: {
            Rightbar
        }
    })
], TopBar);
export default TopBar;
