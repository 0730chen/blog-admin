<template>
    <div class="Data" @click.self="HandAll">
        <input type="text" autocomplete="off" placeholder="选择时间" v-model="DatePick" @click="HandleDatePick"
               readonly="true">
        <div class="AllDate" v-if="active">
            <div class="DateHeader">
                <button type="button" aria-label="前一年" class="prevYear">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-left-copy"></use>
                    </svg>
                </button>
                <button type="button" aria-label="前一月" class="prevMonth">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-left-copy"></use>
                    </svg>
                </button>
                <span role="button" class="HeaderYear">{{Year}}</span>
                <span role="button" class="HeaderMouth">{{Mouth}}</span>
                <button type="button" aria-label="后一年" class="nextYear">
                    <svg class="icon right" aria-hidden="true">
                        <use xlink:href="#icon-left-copy"></use>
                    </svg>
                </button>
                <button type="button" aria-label="后一月" class="nextYear">
                    <svg class="icon right" aria-hidden="true">
                        <use xlink:href="#icon-left-copy"></use>
                    </svg>
                </button>
            </div>
            <div class="DateContainer"></div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"

    @Component({})
    export default class DataPicker extends Vue {
        name: String | undefined
        active: Boolean | undefined

        private data() {
            return {
                name: '日历组件',
                DataPicker: '',
                Year: new Date().getFullYear(),
                Mouth: new Date().getMonth() + 1,
                active: false
            }
        }

        HandleDatePick() {
            if (!this.active) {
                this.active = !this.active
            } else {

            }
        }

        HandAll() {
            if (this.active) {
                this.active = !this.active
            } else {

            }
        }

        get DatePick() {
            //得到年
            let Data = new Date()
            let Y = Data.getFullYear()//年份
            let M = Data.getMonth() + 1//月份
            let D = Data.getDate()//日期
            let W = Data.getDay()//星期
            let H = Data.getHours()
            let Min: any = Data.getMinutes()
            let WeekHash: any = {
                0: '星期一',
                1: '星期二',
                2: '星期三',
                3: '星期四',
                4: '星期五',
                5: '星期六',
                6: '星期天',
            }
            if (Min < 11) {
                Min = `0` + Min
            } else {
                Min = Min
            }
            let Week = WeekHash[W]
            return `${Y}-${M}-${D}   ${Week}  ${H}:${Min}`
        }

        set DatePick(param: any) {
            console.log(param);
        }


        // @Watch('DataPick', {immediate: true, deep: true})
        //定义事件获取
        created() {
        }
    }
</script>
<style lang="scss" scoped>
    .Data {
        input {
            height: 30px;
            padding: 0 20px;
            cursor: pointer;
        }

        padding: 100px 20px;
    }

    .right {
        transform: rotate(180deg);
    }

    .DateHeader {
        margin: 12px;
        text-align: center;

        .HeaderYear {
            padding: 0 3px;
            cursor: pointer;
        }

        .HeaderMouth {
            padding: 0 3px;
            cursor: pointer;
        }
    }

    button {
        font-size: 12px;
        border: 0;
        cursor: pointer;
        outline: none;
        margin: 0 20px;
    }


</style>