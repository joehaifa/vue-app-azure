import { createRouter,createWebHistory } from "vue-router";
import acceuil from "@/components/acceuil.vue";
import detail from "@/components/detail.vue";
import profile from "@/components/profile.vue";

const routes [
    {path:'/',name:'acceuil',component:acceuil},
    {path:'/profile',name:'profile',component:profile},
    {path:'/detail/:id',name:'detail':component:detail}
]

const router = createRouter({
    routes,
    history:createWebHistory();
})

export default router

