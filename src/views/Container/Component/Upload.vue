<template>
    <div class="upload">
        <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="List">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"

    @Component({})
    export default class Upload extends Vue {
        List: Array<Object> | undefined

        private data() {
            return {
                List: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                    {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }
                ]
            }
        }

        handleRemove(file: any, fileList: any) {
            console.log(file, fileList);
        }

        handlePreview(file: any) {
            console.log(file);
        }

        handleExceed(files: string | any[], fileList: string | any[]) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        }

        beforeRemove(file: { name: any; }, fileList: any) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
</script>