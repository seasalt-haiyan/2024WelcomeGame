import { createRouter, createWebHashHistory } from "vue-router";
import EnterGame from "@/Views/EnterGame.vue";
import Login from "../Components/Login.vue";
import Cquestion from "@/Views/Cquestion.vue";
import Cquestion2 from "@/Views/Cquestion2.vue";
const router=createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/entergame',
            component:EnterGame
        },
        {
            path:'/',
            component:Login
        },
        {
            path:'/Cquestion',
            component:Cquestion
        },
        {
            path:'/Cquestion2',
            component:Cquestion2
        }
    ]
})

export default router;