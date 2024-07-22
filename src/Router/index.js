import { createRouter, createWebHashHistory } from "vue-router";
import EnterGame from "@/Views/EnterGame.vue";
import Login from "../Components/Login.vue";
import Cquestion from "@/Views/Cquestion.vue";
import Cquestion2 from "@/Views/Cquestion2.vue";
import divideClass from "@/Components/DivideClass.vue";
import Front from "@/Components/questions/front.vue";
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
        },
        {
            path:'/divideClass',
            component:divideClass
        },
        {
            path:'/front/question1',
            component:Front
        }
    ]
})

export default router;