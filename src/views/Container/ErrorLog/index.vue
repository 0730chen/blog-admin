<template>
    <div class="errorLog">
        <el-alert
                title="成功提示的文案"
                type="success"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
        <el-alert
                title="消息提示的文案"
                type="info"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
        <el-alert
                title="警告提示的文案"
                type="warning"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
        <el-alert
                title="错误提示的文案"
                type="error"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
        </el-alert>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"

    @Component({})
    export default class ErrorLog extends Vue {
    }
</script>
<style lang="scss" scoped>
    .errorLog{
        margin-left: 250px;
    }

</style>