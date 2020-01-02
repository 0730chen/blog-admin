<template>
    <div class="article">
        <el-table :data="tableData"
                  height="250"
                  border
                  style="width: 100%">
            <el-table-column prop="title"
                             label="标题">
            </el-table-column>
            <el-table-column prop="context"
                             label="内容">
            </el-table-column>
            <el-table-column prop="data"
                             label="时间">
            </el-table-column>
        </el-table>
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </div>
    </div>
</template>
<script lang="ts">
    import UserDoc from "@/views/Container/Document/UserDoc.vue";
    import Vue from 'vue'
    import Component from "vue-class-component"

    @Component({
        components: {
            UserDoc
        }
    })
    export default class Document extends Vue {
        tableData: Array<Object> | undefined

        data() {
            return {
                tableData: []
            }
        }

        created() {
            this.$store.dispatch('Get_AllArt').then(res => {
                this.tableData = res
            })
        }
    }
</script>
<style lang="scss">
    .article {
        width: 80%;
        margin-left: 250px;
        margin: 100px 250px;
    }
</style>