import Vue from 'vue'
import Vuex from 'vuex'
import {getInfo, getToken,getLogin} from '../Api/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        admin: '',
        password: '',
        logined: false,
        token: '',
        name: ''
    },
    mutations: {
        Set_admin: ((state, params) => {
            let {admin, pass} = params
            state.admin = admin
            state.password = pass
            state.logined = true
        }),
        Set_Token: (state, token) => {
            state.token = token
        },
        Set_Name: (state, name) => {
            state.name = name
        }
    },
    actions: {
        Get_Token: (context) => {
            getToken((context.state.admin,context.state.password)).then(res=>{
              console.log(res)
            })
        },
        Get_info: (context, state) => {
            getInfo(context.state.admin,context.state.password).then(res=>{
              console.log(res)
            })
        },
      Get_login:(commit,state)=>{
        let {admin,password} = commit.state
        let params = {admin,password}
        getLogin(params).then(res=>{
          console.log(res)
        })
      }
    },
    modules: {}
})
