


const routes=[
    {path:'/home',component:home},
    {path:'/employee',component:employee},
    {path:'/department',component:department},
    {path:'/userinfo',component:userinfo},
    {path:'/currencyrate',component:currencyrate},
  

]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')


