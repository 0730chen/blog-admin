import Vue from 'vue'
import Vuex from 'vuex'
import {getInfo, getLogin, getToken} from '../Api/user'
import {getTokens, setToken} from "@/Api/auth";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        admin: '',
        password: '',
        logined: false,
        token: getTokens(),
        name:'',
        Nav:'文档',
        ChildName:'',
        ChildNavState:true
    },
    mutations: {
        Set_admin: ((state, params) => {
            let {admin, pass} = params
            state.admin = admin
            state.password = pass
            state.logined = true
        }),
        Set_Token: (state, token) => {
            console.log(token)
            state.token = token
        },
        Set_Name: (state, name) => {
            state.name = name
        },
        Set_Nav:(state,nav)=>{
            state.Nav = nav
        },
        Set_Nav_Child:(state,child)=>{
            state.ChildName = child
        },
        Get_admin:(state,admin)=>{
            state.admin = admin
        },
        Set_Nav_ChildState:(state,bool)=>{
            state.ChildNavState = bool
        }
    },
    actions: {
        Get_Token: (context) => {
            getToken((context.state.admin, context.state.password)).then(res => {
                console.log(res)
            })
        },
        Get_info: (context, state) => {
            getInfo(context.state.admin, context.state.password).then(res => {
                console.log(res)
            })
        },
        Get_login: ({commit, state}) => {
            return new Promise((resolve, reject) => {
                let {admin, password} = state
                let params = {admin, password}
                localStorage.setItem('admin',admin)
                getLogin(params).then(res => {
                    const {data} = res
                    commit('Set_Token', data.token)
                    setToken(data.token)
                    resolve()
                })
            })
        },
        Get_NavName:({commit,state})=>{
            return new Promise((resolve,reject)=>{

            })}

    }
})
