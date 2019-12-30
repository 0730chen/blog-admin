<template>
    <div>
        我是主容器界面
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    @Component({})
    export default  class Container extends Vue{

         data(){
            return {
                name:'容器组件'
            }
        }
    }
</script>