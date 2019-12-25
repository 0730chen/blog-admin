import { __decorate } from "tslib";
import Vue from 'vue';
import Component from "vue-class-component";
let LoginForm = class LoginForm extends Vue {
    data() {
        return {
            ruleForm: {
                admin: 'admin',
                pass: ''
            }
        };
    }
    created() {
    }
    submitForm() {
        this.$store.commit('Set_admin', this.$data.ruleForm);
        this.$store.dispatch("Get_login");
    }
};
LoginForm = __decorate([
    Component({})
], LoginForm);
export default LoginForm;
