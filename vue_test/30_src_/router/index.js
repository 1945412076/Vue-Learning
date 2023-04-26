/* eslint-disable no-undef */
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Mess from '../pages/Mess'
import Ness from '../pages/Ness'
import Details from '../pages/Details'
const router =new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'mess',
                    component:Mess
                },
                {
                    path:'ness',
                    component:Ness,
                    children:[
                        {
                            name:'details',
                            path:'details',
                            component:Details,
                            // props:{

                            // }
                        }
                    ]
                }
            ]
        }
    ]
})
export default router