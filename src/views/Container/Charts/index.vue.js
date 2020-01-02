import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
import Chart from 'chart.js';
import planetData from "@/views/Container/Charts/Data";
let Charts = class Charts extends Vue {
    data() {
        return {
            planetData: planetData
        };
    }
    created() {
        this.createChart('charts', planetData);
    }
    createChart(chartId, ChartData) {
        let ctx = document.getElementById(chartId);
        console.log(ctx);
        const mycharts = new Chart(ctx, {
            type: ChartData.type,
            data: ChartData.data,
            options: ChartData.options,
        });
    }
};
Charts = __decorate([
    Component({})
], Charts);
export default Charts;
