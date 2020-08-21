import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        inquiryNumber:'',
        initName:'',
		regionCode:''
		
    },
    mutations: {
		
		regionCodesSet(state,cont){
		    //单一的改变某一个变量
		    console.log(state)
		    console.log(cont)
		    state.regionCode = cont;
		},
        copy(state,cont){
            //单一的改变某一个变量
           
            state.inquiryNumber = cont;
        },
        change(state,contObj){
            //通过传入的变量去改变对应的全局变量
            let str = contObj.str;
            let cont = contObj.cont;
            state[str] = cont;
        },
    },
    actions:{
		regionCodeFun:function(context,obj){
			context.commit('regionCodesSet',obj)
		},
        copeFun:function(context,mData){
            context.commit('copy',mData)
        },
        changeFun:function(context,obj){
            context.commit('change',obj)
        }
		
    }
})

export default store