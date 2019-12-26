import { __decorate } from "tslib";
class {
};
"main" >
    />
    < LeftBar /  >
    /div>
    < /template>
    < script;
lang = "ts" >
;
import Vue from 'vue';
import Component from "vue-class-component";
import TopBar from "@/views/TopSidebar/index.vue";
import LeftBar from '@/views/LeftSidebar/index.vue';
let Main = class Main extends Vue {
    data() {
        return {
            message: '主界面'
        };
    }
    created() { }
};
Main = __decorate([
    Component({
        components: {
            TopBar,
            LeftBar
        }
    })
], Main);
export default Main;
/script>
    < style;
lang = "scss";
scoped >
    /style>;
