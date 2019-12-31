<template>
    <div>
        <router-view/>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Document from "@/views/Container/Document/index.vue";
    @Component({
        components:{
            Document
        }
    })
    export default  class Container extends Vue{

         data(){
            return {
                name:'容器组件'
            }
        }
    }
</script>