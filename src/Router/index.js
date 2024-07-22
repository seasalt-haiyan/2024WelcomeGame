import { createRouter, createWebHashHistory } from "vue-router";
import EnterGame from "@/Views/EnterGame.vue";
import Login from "../Components/Login.vue";
import Cquestion from "@/Views/Cquestion.vue";
import Cquestion2 from "@/Views/Cquestion2.vue";
import divideClass from "@/Components/DivideClass.vue";
import Front from "@/Components/questions/front.vue";
import QianDuan2 from "@/Components/questions/QianDuan2.vue";
import QianDuan3 from "@/Components/questions/QianDuan3.vue";
import QianDuan4 from "@/Components/questions/QianDuan4.vue";
import QianDuanEnd from "@/Components/questions/QianDuanEnd.vue";
import HouDuan1 from "@/Components/questions/HouDuan1.vue";
import HouDuan2 from "@/Components/questions/HouDuan2.vue";
import HouDuan3 from "@/Components/questions/HouDuan3.vue";
import HouDuan4 from "@/Components/questions/HouDuan4.vue";
import SuanFa1 from '@/Components/questions/SuanFa1.vue'
import SuanFa2 from '@/Components/questions/SuanFa2.vue'
import SuanFa3 from '@/Components/questions/SuanFa3.vue'
import YouXi1 from '@/Components/questions/YouXi1.vue'
import YouXi2 from '@/Components/questions/YouXi2.vue'
import YouXi3 from '@/Components/questions/YouXi3.vue'
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
        },
        {
            path:'/front/question2',
            component:QianDuan2
        },
        {
            path:'/front/question3',
            component:QianDuan3
        },
        {
            path:'/front/question4',
            component:QianDuan4
        },
        /*{
            path:'/front/questionEnd',
            component:QianDuanEnd
        }*/
        {
            path:'/back/question1',
            component:HouDuan1
        },
        {
            path:'/back/question2',
            component:HouDuan2
        },
        {
            path:'/back/question3',
            component:HouDuan3
        },
        {
            path:'/back/question4',
            component:HouDuan4
        },
        {
            path:'/acm/question1',
            component:SuanFa1
        },
        {
            path:'/acm/question2',
            component:SuanFa2
        },
        {
            path:'/acm/question3',
            component:SuanFa3
        },
        {
            path:'/game/question1',
            component:YouXi1
        },
        {
            path:'/game/question2',
            component:YouXi2
        },
        {
            path:'/game/question3',
            component:YouXi3
        },
    ]
})

export default router;