import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
let DataPicker = class DataPicker extends Vue {
    data() {
        return {
            name: '日历组件'
        };
    }
    mounted() {
        console.log(this);
        console.log(this.name);
    }
};
DataPicker = __decorate([
    Component({})
], DataPicker);
export default DataPicker;
