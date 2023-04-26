//引入vuex
import Vuex from 'vuex';
//引入Vue
import Vue from 'vue'
//创建actions——用于响应组件中的动作
const actions={
    jia(context,value){
        console.log('触发actions中的jia事件',context);
        context.commit('JIA',value)
    },
    oddadd(context,value){
        console.log('触发actions中oddadd事件',value,context);
        if(context.state.sum%2!==0){
            context.commit('JIA',value)
        }
    },
    waritadd(context,value){
        setInterval(()=>{context.commit('JIA',value)},1000);
    },
}
//创建mutations——用于操作数据
const mutations={
    JIA(state,value){
        // console.log('触发mutations中的JIA事件',state);
        state.sum+=value
    },
    JIAN(state,value){
        // console.log('触发mutations中的JIAN事件',state);
        state.sum-=value
    },
    addname(state,value){
       console.log('触发mutations中的addname',value);
       state.pare.unshift(value)
    }
}
//创建stato——用于储存数据
const state={
    sum:0,
    pare:[
        {id:'001',name:'张三'}
    ]
}
const getters={
    bigger(state){
        return state.sum*10
    }
}
//使用插件
Vue.use(Vuex)
const store =new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store
