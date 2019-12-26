<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import {Watch} from "vue-property-decorator";

    @Component
    export default class App extends Vue {
        data() {
            return {}
        }

        @Watch('$route', {immediate: true, deep: true})
        onnavNameChange() {
            console.log('路由变化了')
          this.$store.commit('Get_admin',localStorage.getItem('admin'))
        }
    }
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
