<template>
    <div class="Login">
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm login-form">
            <div class="login-title">Login Form</div>
            <el-form-item prop="admin">
                <span>哈哈</span>
                <el-input type="text" v-model="ruleForm.admin" autocomplete="off"  placeholder="用户名">
                </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"  placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    @Component({})
    export default class LoginForm extends Vue {
        admin:any
        private data() {
            return {
                ruleForm: {
                    admin: 'admin',
                    pass: ''
                }
            }
        }
        created(){
        }
        submitForm(){
            this.$store.commit('Set_admin',this.$data.ruleForm)
            this.$store.dispatch("Get_login")
        }

    }
</script>
<style lang="scss">
    .Login {
        height: 100vh;
        width: 100vw;
        background-color: #2d3a4b;
        overflow: hidden;

        .login-form {
            position: relative;
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
        }

        .login-title {
            text-align: center;
            padding-left: 100px;
            padding-bottom: 22px;
            font-size: 26px;
            color: #eee;
            text-align: center;
            font-weight: bold;
        }
    }
    .el-button--primary{
        width: 100%;
    }
</style>