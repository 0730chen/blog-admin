<template>
    <div>
        <canvas id="charts" width="500" height="500"></canvas>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    import planetData from "@/views/Container/Charts/Data";
    import Chart from "chart.js";
    @Component({})
    export default class Charts extends Vue {
        data() {
            return {
                planetData: planetData
            }
        }

        mounted() {
            this.createChart('charts', planetData)
        }

        createChart(chartId: string, ChartData: any) {
            console.log(chartId)
            let ctx: any = document.getElementById(chartId)
            console.log(ctx)
            const mycharts = new Chart(ctx, {
                type: ChartData.type,
                data: ChartData.data,
                options: ChartData.options,
            })
        }
    }
</script>
<style lang="scss">

</style>