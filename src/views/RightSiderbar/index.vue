<template>
    <div class="right-bar">
        <div class="search">
            <svg class="icon" aria-hidden="true" @click.prevent="InputShow">
                <use xlink:href="#icon-fangdajing"></use>
            </svg>
            <el-input
                    v-show="show"
                    placeholder="请输入内容"
                    v-model="input"
                    clearable>
            </el-input>
        </div>
        <div class="fullscreen" @click="fullScreen">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-quanping"></use>
            </svg>
        </div>
        <div class="avatar">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    import screenfull from "screenfull";

    @Component({})
    export default class Rightbar extends Vue {
        show: Boolean | undefined

        private data() {
            return {
                input: '',
                show: false,
                isFullscreen: false
            }
        }

        InputShow() {
            this.show = !this.show
        }

        fullScreen() {
            if (!screenfull.isEnabled) {
                this.$message({
                    message: 'warning',
                    type: 'warning'
                })
                return false
            }
            screenfull.toggle()
            this.$message({
                message: '打开全屏',
                type: 'success'
            })
        }
    }
</script>
<style lang="scss">
    .right-bar {
        position: absolute;
        display: flex;
        flex-direction: row;
        height: 100%;
        line-height: 50px;
        right: 200px;
        align-items: center;
        .search {
            display: inline-block;
            padding: 0 30px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;
            cursor: pointer;
        }

        .fullscreen {
            padding: 0 30px;
            cursor: pointer;
        }

        .el-input {
            width: auto;
            padding-left: 10px;
        }
        .avatar{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 30px;
        }
    }

</style>